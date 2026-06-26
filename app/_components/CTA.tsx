import { HeroCTAButton } from "./HeroCTAButtons";

export function CTA() {
  return (
    <div className="flex flex-col items-center border border-dark-green mt-30 mx-10 py-10">
      <p className="text-3xl font-medium">
        Your site deserves better{" "}
        <span className="bg-light-green px-1">AI</span> visibility.
      </p>

      <p className="text-sm text-neutral-700 max-w-[20rem] text-center mt-4 mb-8">
        Join thousands of developers and webmasters ensuring their site is
        LLM-ready
      </p>

      <HeroCTAButton />
    </div>
  );
}
