import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

import { Check, Cloud, PenLineIcon } from "lucide-react";
import type { ReactNode } from "react";

export function PreciseControl() {
  return (
    <section className="flex flex-col items-center mt-20 mx-10">
      <h2 className="text-xl font-medium">Precise Control</h2>
      <p className="mt-4 text-center text-neutral-700 text-sm">
        Simplify your site content for effortless crawling.
        <br />
        Three steps to a perfect llms.txt file.
      </p>

      <div className="grid grid-cols-3 mt-15 border border-[#C4C7C7]">
        <StepsCard
          number={1}
          icon={<PenLineIcon size={20} />}
          title="Build"
          subtitle="Use the convenient file builder and compose your first llms.txt file. Fast and secure by default."
        />
        <StepsCard
          number={2}
          icon={<Check size={22} />}
          title="Validate"
          subtitle="Real-time linting against the official llms.txt specification. Identify formatting errors instantly."
        />
        <StepsCard
          number={3}
          icon={<Cloud size={22} />}
          title="Deploy"
          subtitle="Export your optimized file and host it at /llms.txt. Ready for OpenAI, Anthropic, and Perplexity crawlers."
        />
      </div>
    </section>
  );
}

function StepsCard({
  number,
  icon,
  title,
  subtitle,
}: {
  number: number;
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={`${number === 3 ? "border-r-0" : "border-r"} border-[#C4C7C7] p-8`}
    >
      <div className="flex justify-between items-center">
        <p className={`${jetbrainsMono.className} text-[#C4C7C7] text-3xl`}>
          {number.toString().padStart(2, "0")}
        </p>
        {icon}
      </div>

      <p className="mt-6 text-lg font-medium">{title}</p>
      <p className="mt-1.5 text-sm text-neutral-700">{subtitle}</p>
    </div>
  );
}
