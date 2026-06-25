"use client";

import { Reveal } from "@/components/motion/Reveal";
import { OWNERSHIP_COMPARE } from "@/lib/site-data";

export function CompareOptions() {
  const { title, columns, rows } = OWNERSHIP_COMPARE;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-teal-deep sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-teal-deep/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
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
                    <tr key={row.feature} className={ri % 2 === 1 ? "bg-teal-deep/[0.03]" : "bg-white"}>
                      <td className="px-6 py-5 text-sm font-semibold text-teal-deep">{row.feature}</td>
                      {row.values.map((value, vi) => (
                        <td
                          key={vi}
                          className={`px-6 py-5 text-sm ${
                            value === "✓"
                              ? "text-lg text-gold-deep"
                              : "font-normal text-teal-deep/75"
                          }`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
