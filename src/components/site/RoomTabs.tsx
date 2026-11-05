"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Room = {
  name: string;
  image: string;
  alt: string;
  backdrop: string;
  glow: number;
  text: string;
  details: [string, string][];
};

const ROOMS: Room[] = [
  {
    name: "Velvet Haven",
    image: "/images/velvet-haven.png",
    alt: "The Velvet Haven room, with a king-size bed and warm amber lighting",
    backdrop: "linear-gradient(150deg,#000000,#092C2C)",
    glow: 0.22,
    text: "Step into a world of soft textures and amber warmth. The Velvet Haven wraps you in cream-toned upholstery, honey-toned wood accents, and the gentle glow of bedside lamps. Designed for the traveller who values quiet luxury over loud statements.",
    details: [
      ["Cosy Bed", "A plush king-size bed dressed in 600-thread Egyptian cotton, layered with a cashmere throw in warm mocha tones."],
      ["Washroom", "Marble-finished, with a deep soaking tub, rainfall shower, and warm vanity lighting."],
      ["Balcony", "Cushioned rattan chairs and a side table — made for morning coffee and the golden warmth of early sun."],
    ],
  },
  {
    name: "Golden Sovereign",
    image: "/images/golden-sovereign.png",
    alt: "The Golden Sovereign suite, with dark furnishings and gold lighting",
    backdrop: "linear-gradient(150deg,#000000,#000000)",
    glow: 0.28,
    text: "A suite born from the intersection of power and beauty. Deep ebony furnishings contrast with luminous gold lighting, while floor-to-ceiling glass partitions reveal a private lounge that speaks volumes without a word. Reserved for those who expect nothing less than extraordinary.",
    details: [
      ["Cosy Bed", "A super-king bed with silk-blend linens, contrasting black accent cushions, and a hand-stitched coverlet."],
      ["Washroom", "Dark stone and brushed gold fixtures. A freestanding sculptural tub, dual vanities, and a steam shower built for two."],
      ["Balcony", "A wraparound balcony commanding a sweeping skyline view, furnished with deep lounge seating and ambient floor lighting."],
    ],
  },
  {
    name: "Timber & Ember",
    image: "/images/timber-ember.png",
    alt: "The Timber & Ember room, with walnut-panelled walls and warm spotlights",
    backdrop: "linear-gradient(150deg,#000000,#092C2C)",
    glow: 0.26,
    text: "Where nature meets craftsmanship. Rich walnut panels rise floor to ceiling, framing a bed of unparalleled softness beneath a canopy of warm spotlights. A retreat for those who draw strength from the beauty of natural things.",
    details: [
      ["Cosy Bed", "A king bed nestled within hand-carved walnut panelling, dressed in layered earth-toned linens — warm taupe, brushed bronze, and ivory."],
      ["Washroom", "Warm travertine stone, rich timber accents, a spacious walk-in rain shower, and a deep vessel basin."],
      ["Balcony", "A timber-decked sanctuary overlooking lush garden greenery — a woven bench seat, a small lantern table, and the sound of birdsong replacing the noise of the day."],
    ],
  },
];

const TAB =
  "cursor-pointer rounded-[3px] border border-solid px-[30px] py-[14px] text-[22px] font-normal whitespace-nowrap transition-all duration-300 ease-[ease]";

/** "Where You Rest": three room tabs, showing one room at a time. */
export function RoomTabs() {
  const [active, setActive] = useState(0);
  const room = ROOMS[active];

  // A newly shown room photo joins the scroll motion.
  useEffect(() => {
    window.dispatchEvent(new Event("z:rescan"));
  }, [active]);

  return (
    <>
      <div data-reveal="" className="mt-11 flex flex-wrap justify-center gap-[14px]">
        {ROOMS.map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`${TAB} ${
              i === active
                ? "border-z-gold bg-z-gold text-z-deep"
                : "border-[rgba(223,193,165,.35)] bg-transparent text-z-gold"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div data-2col="" className="mt-11 grid grid-cols-[1fr_1fr] items-center gap-[50px]">
        <div
          className="relative min-h-[440px] overflow-hidden rounded-[8px] shadow-[0_30px_60px_rgba(0,0,0,.35)]"
          style={{ background: room.backdrop }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(60% 50% at 50% 40%,rgba(223,193,165,${room.glow}),transparent 65%)`,
            }}
          />
          <Image
            key={room.image}
            src={room.image}
            alt={room.alt}
            fill
            sizes="(max-width: 920px) 100vw, 590px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-[38px] font-normal tracking-[.04em] text-white">{room.name}</h3>
          <p className="mt-[18px] text-[18.5px] leading-[1.85] text-[rgba(255,255,255,.88)]">
            {room.text}
          </p>
          <div className="mt-[26px] flex flex-col gap-[18px]">
            {room.details.map(([title, text]) => (
              <div key={title} className="border-t border-solid border-[rgba(223,193,165,.2)] pt-4">
                <p className="text-[14px] font-semibold tracking-[.1em] text-z-gold uppercase">
                  {title}
                </p>
                <p className="mt-[7px] text-[17px] leading-[1.7] text-[rgba(255,255,255,.88)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
