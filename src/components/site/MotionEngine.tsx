"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * The site's scroll and pointer motion, ported from the design prototype.
 *
 * Pages stay server-rendered: they only mark elements with data-* attributes
 * (data-reveal, data-delay, data-rule, data-count, data-parallax, ...) and this
 * single client component drives them. Behaviour:
 *  - Reveal blocks replay when they leave the viewport, and enter from the
 *    direction of travel (above when scrolling up, below when scrolling down).
 *  - Gold rules next to eyebrows draw in after their parent.
 *  - Photos in overflow-hidden frames settle in scale and drift with scroll.
 *  - Hero content fades and drifts down as the hero scrolls out.
 *  - Scroll progress bar, card spotlight, magnetic uppercase CTAs, count-ups.
 */

const EASE = "cubic-bezier(.16,1,.3,1)";

type RevealEl = HTMLElement & {
  _zup?: boolean;
  _zt?: ReturnType<typeof setTimeout>;
};

type RuleEl = HTMLElement & { _zline?: boolean };

type MotionImg = HTMLElement & {
  _zbox: HTMLElement;
  _zs?: number;
  _zy: number;
  _zon: boolean;
};

type MagnetEl = HTMLElement & { _zmag?: boolean };

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function animateCount(el: HTMLElement) {
  const target = parseFloat(el.getAttribute("data-count") ?? "0");
  const suffix = el.getAttribute("data-suffix") ?? "";
  const duration = 1700;
  const start = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

class Motion {
  private reveals: RevealEl[] = [];
  private images: MotionImg[] = [];
  private raf = 0;
  private tick: ReturnType<typeof setInterval> | undefined;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private reduced = false;

  private pointer = {
    lastY: 0,
    velocity: 0,
    magnet: null as HTMLElement | null,
    card: null as HTMLElement | null,
  };

  start() {
    document.documentElement.setAttribute("data-zready", "");
    document.documentElement.setAttribute("data-zjs", "");
    this.reduced = prefersReducedMotion();
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onScroll, { passive: true });
    window.addEventListener("z:rescan", this.rescan);
    this.tick = setInterval(this.checkReveals, 300);
    if (this.reduced) return;
    this.pointer.lastY = window.scrollY;
    document.addEventListener("mousemove", this.onMove, { passive: true });
    this.raf = requestAnimationFrame(this.loop);
  }

  stop() {
    cancelAnimationFrame(this.raf);
    if (this.tick) clearInterval(this.tick);
    this.timers.forEach(clearTimeout);
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onScroll);
    window.removeEventListener("z:rescan", this.rescan);
    document.removeEventListener("mousemove", this.onMove);
  }

  /** Call after a page has mounted. Runs over a few frames so layout has settled. */
  scan() {
    if (this.reduced) {
      this.reveals = [];
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.setAttribute("data-revealed", "1");
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }
    const setup = () => {
      this.reveals = Array.from(document.querySelectorAll<RevealEl>("[data-reveal]"));
      document.querySelectorAll("[data-grid], [data-reveal-stagger]").forEach((grid) => {
        Array.from(grid.children).forEach((child, k) => {
          if (child.hasAttribute("data-reveal") && !child.hasAttribute("data-delay")) {
            child.setAttribute("data-delay", String(k * 110));
          }
        });
      });
      this.reveals.forEach((el) => {
        if (el.getAttribute("data-revealed") !== "1") this.hide(el);
      });
      this.checkReveals();
      this.scanImages();
    };
    requestAnimationFrame(() => {
      setup();
      requestAnimationFrame(setup);
    });
    this.timers.push(setTimeout(setup, 90));
  }

  /** Components that swap in a new photo fire "z:rescan" so it joins the motion. */
  private rescan = () => {
    if (!this.reduced) requestAnimationFrame(() => this.scanImages());
  };

  private hide(el: RevealEl, up = false) {
    const sign = up ? -1 : 1;
    el._zup = up;
    clearTimeout(el._zt);
    el.removeAttribute("data-revealed");
    const isHeading = el.hasAttribute("data-h1") || el.hasAttribute("data-h2");
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = isHeading
      ? `translateY(${56 * sign}px)`
      : `translateY(${90 * sign}px) scale(.97)`;
    if (isHeading) el.style.clipPath = up ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)";
    el.style.filter = `blur(${isHeading ? 3 : 4}px)`;

    // Set before the reflow below on purpose: the hide then runs as a transition,
    // so the first visibility check still sees the block at its real position.
    const delay = el.getAttribute("data-delay");
    const transition = `opacity 1.1s ${EASE}, transform 1.2s ${EASE}, filter 1.1s ${EASE}, clip-path 1.3s ${EASE}`;
    el.style.transition = transition;
    el.style.transitionDelay = `${delay ?? 0}ms`;

    el.querySelectorAll<RuleEl>("[data-rule]").forEach((rule) => {
      const s = rule.style;
      if (!rule._zline) {
        rule._zline = true;
        s.transition = `scale 1.1s ${EASE} ${(delay ? +delay : 0) + 250}ms`;
      }
      const ruleTransition = s.transition;
      s.transition = "none";
      s.transformOrigin = up ? "right center" : "left center";
      s.scale = "0 1";
      void rule.offsetWidth;
      s.transition = ruleTransition;
    });

    void el.offsetWidth;
    el.style.transition = transition;
    el.style.transitionDelay = `${delay ?? 0}ms`;
  }

  private checkReveals = () => {
    const vh = window.innerHeight;
    const trigger = vh * 0.85;
    this.reveals.forEach((el) => {
      if (!el.isConnected) return;
      const r = el.getBoundingClientRect();
      const inHero = !!el.closest("[data-hero]");

      if (el.getAttribute("data-revealed") === "1") {
        if ((r.top > vh + 40 || r.bottom < -40) && !inHero) this.hide(el, r.bottom < -40);
        return;
      }
      if (!inHero) {
        if (r.top > vh + 40 && el._zup) return this.hide(el, false);
        if (r.bottom < -40 && !el._zup) return this.hide(el, true);
      }
      // Hero blocks show as soon as they are on screen. With the 85% line, the hero
      // buttons on a 1366x768 laptop would stay hidden until the visitor scrolled.
      if (r.top < (inHero ? vh : trigger) && r.bottom > vh * 0.15) {
        el.setAttribute("data-revealed", "1");
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "blur(0)";
        if (el.style.clipPath) el.style.clipPath = "inset(-20% -6% -30% -6%)";
        el.querySelectorAll<RuleEl>("[data-rule]").forEach((rule) => {
          if (rule._zline) rule.style.scale = "1 1";
        });
        const delay = +(el.getAttribute("data-delay") ?? 0);
        el._zt = setTimeout(() => {
          el.style.filter = "";
          el.style.clipPath = "";
          el.style.transform = "";
          el.style.transition =
            "opacity .4s ease, transform .35s ease, box-shadow .35s ease, border-color .35s ease, background .35s ease";
          el.style.transitionDelay = "0ms";
        }, delay + 1400);
        if (el.hasAttribute("data-count")) animateCount(el);
        el.querySelectorAll<HTMLElement>("[data-count]").forEach(animateCount);
      }
    });
  };

  private scanImages() {
    const clips = (el: HTMLElement) => {
      const cs = getComputedStyle(el);
      return cs.overflow === "hidden" || cs.overflowX === "hidden" || cs.overflowY === "hidden";
    };
    this.images = Array.from(document.querySelectorAll<MotionImg>("main img")).filter((img) => {
      if (img.closest("[data-hero]")) return false;
      const box = img.parentElement;
      if (!box || !clips(box)) return false;
      const r = box.getBoundingClientRect();
      if (r.width < 120 || r.height < 100) return false;
      img._zbox = box;
      if (img._zs == null) {
        img._zs = 1.22;
        img._zy = 0;
        img._zon = false;
      }
      img.style.willChange = "scale, translate";
      return true;
    });
  }

  private onScroll = () => {
    if (!this.reduced) {
      const y = `translate3d(0,${(window.scrollY * 0.3).toFixed(1)}px,0)`;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        el.style.transform = y;
      });
    }
    this.checkReveals();
  };

  private onMove = (e: MouseEvent) => {
    const target = e.target as Element | null;
    if (!target?.closest) return;
    const m = this.pointer;

    // Magnetic CTA: large uppercase buttons lean towards the cursor.
    const btn = target.closest<MagnetEl>("a, button");
    const magnetic =
      btn && getComputedStyle(btn).textTransform === "uppercase" && btn.offsetWidth > 90;
    if (m.magnet && m.magnet !== btn) {
      m.magnet.style.translate = "0 0";
      m.magnet = null;
    }
    if (btn && magnetic) {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      if (!btn._zmag) {
        btn._zmag = true;
        const t = getComputedStyle(btn).transition;
        btn.style.transition = `${t}, translate .4s ${EASE}`;
      }
      btn.style.translate = `${(dx * 14).toFixed(1)}px ${(dy * 10).toFixed(1)}px`;
      m.magnet = btn;
    }

    // Card spotlight: a soft gold glow follows the cursor on rounded cards.
    const card = target.closest<HTMLElement>("[data-reveal]");
    if (m.card && m.card !== card) {
      m.card.style.backgroundImage = "";
      m.card = null;
    }
    if (card && !card.closest("[data-hero]")) {
      const cs = getComputedStyle(card);
      if (
        parseFloat(cs.borderTopLeftRadius) >= 8 &&
        (cs.backgroundImage === "none" || card === m.card) &&
        cs.backgroundColor !== "rgba(0, 0, 0, 0)"
      ) {
        const r = card.getBoundingClientRect();
        card.style.backgroundImage = `radial-gradient(420px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(223,193,165,.2), transparent 62%)`;
        m.card = card;
      }
    }
  };

  private loop = () => {
    const vh = window.innerHeight;
    const sy = window.scrollY;
    const max = document.documentElement.scrollHeight - vh;
    const m = this.pointer;

    const bar = document.getElementById("zprog");
    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, sy / max) : 0})`;

    m.velocity += (sy - m.lastY - m.velocity) * 0.2;
    m.lastY = sy;
    const blur = Math.min(Math.abs(m.velocity) * 0.02, 1);

    this.images.forEach((img) => {
      if (!img.isConnected) return;
      const box = img._zbox;
      const r = box.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      if (!img._zon && r.top < vh * 0.92) img._zon = true;
      const parent = box.parentElement;
      const hovered =
        box.matches(":hover") ||
        (parent?.matches(":hover") && parent.offsetHeight - box.offsetHeight < 260);
      const target = !img._zon ? 1.22 : hovered ? 1.18 : 1.12;
      const scale = (img._zs ?? 1.22) + (target - (img._zs ?? 1.22)) * 0.07;
      img._zs = scale;
      const offset = (r.top + r.height / 2 - vh / 2) / vh;
      const limit = Math.max(0, ((scale - 1) / 2) * r.height - 1);
      const ty = Math.max(-limit, Math.min(limit, offset * -60));
      img._zy += (ty - img._zy) * 0.12;
      img.style.scale = scale.toFixed(4);
      img.style.translate = `0 ${img._zy.toFixed(1)}px`;
      img.style.filter = blur > 0.25 ? `blur(${blur.toFixed(2)}px)` : "";
    });

    document.querySelectorAll<HTMLElement>("[data-hero] [data-revrap]").forEach((el) => {
      const hero = el.closest("[data-hero]");
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      if (r.bottom < 0) return;
      const p = Math.max(0, Math.min(1, -r.top / (r.height || 1)));
      el.style.opacity = (1 - p * 1.25).toFixed(3);
      el.style.translate = `0 ${(p * 90).toFixed(1)}px`;
    });

    this.raf = requestAnimationFrame(this.loop);
  };
}

export function MotionEngine() {
  const pathname = usePathname();
  const engine = useRef<Motion | null>(null);
  const firstLoad = useRef(true);

  useEffect(() => {
    const motion = new Motion();
    engine.current = motion;
    motion.start();
    return () => {
      motion.stop();
      engine.current = null;
    };
  }, []);

  useEffect(() => {
    engine.current?.scan();
    // After a client-side route change, move focus to the new page for screen readers.
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}
