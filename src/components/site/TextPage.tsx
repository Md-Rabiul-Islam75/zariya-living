import { Eyebrow } from "@/components/site/ui";

/** The plain text layout shared by the Legal and Privacy pages. */
export function TextPage({
  label,
  title,
  sections,
}: {
  label: string;
  title: string;
  sections: [string, string][];
}) {
  return (
    <>
      <section className="bg-z-deep pt-[150px] pb-20">
        <div data-container="" className="mx-auto max-w-[860px] px-12">
          <Eyebrow data-reveal="" className="mb-[18px]">
            {label}
          </Eyebrow>
          <h1 data-reveal="" className="text-[54px] font-normal text-white">
            {title}
          </h1>
        </div>
      </section>
      <section data-sec="" className="bg-white py-[90px]">
        <div data-container="" className="mx-auto max-w-[860px] px-12">
          <div data-reveal="" className="flex flex-col gap-9">
            {sections.map(([heading, text]) => (
              <div key={heading}>
                <h2 className="text-[28px] font-medium text-z-green">{heading}</h2>
                <p className="mt-3 text-[18px] leading-[1.9] text-[rgba(9,44,44,.88)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
