"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { TOWNSHIP_INVENTORY, CONTACT } from "@/lib/site-data";

function StatusPill({ status }: { status: string }) {
  const available = status.toLowerCase() === "available";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${
        available ? "bg-teal-deep/10 text-teal-deep/80" : "bg-gold/20 text-gold-deep"
      }`}
    >
      {status}
    </span>
  );
}

export function OwnershipInventory() {
  const { title, subtitle, columns, rows, cta } = TOWNSHIP_INVENTORY;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal direction="up" className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-teal-deep/80 md:text-lg">{subtitle}</p>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-teal-deep/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="bg-teal-deep">
                    {columns.map((col, i) => (
                      <th
                        key={col}
                        className={`px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                          i === 0 ? "text-foreground" : "text-gold"
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={row.type} className={ri % 2 === 1 ? "bg-teal-deep/[0.03]" : "bg-white"}>
                      <td className="px-6 py-5 font-serif text-lg font-light text-teal-deep">{row.type}</td>
                      <td className="px-6 py-5 text-sm font-normal text-teal-deep/75">{row.size}</td>
                      <td className="px-6 py-5 text-sm font-normal text-teal-deep/75">{row.units}</td>
                      <td className="px-6 py-5 text-sm font-normal text-teal-deep/75">{row.tenure}</td>
                      <td className="px-6 py-5">
                        <StatusPill status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15} className="mt-12 text-center">
          <Link
            href={CONTACT.bookHref}
            className="inline-block rounded-md bg-teal-deep px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-transform duration-300 hover:scale-105"
          >
            {cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
