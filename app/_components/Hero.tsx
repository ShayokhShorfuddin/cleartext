import { Editor } from "./Editor";
import { HeroCTAButton } from "./HeroCTAButtons";

export function Hero() {
  return (
    <section className="flex justify-between mx-10 mt-10">
      {/* Left side */}
      <div className="flex flex-col gap-y-5 w-full max-w-[27rem]">
        <h1 className="text-5xl font-medium leading-tight">
          The precision <span className="bg-light-green px-1">llms.txt</span>{" "}
          platform for developers.
        </h1>

        <p className="text-neutral-700">
          Ensure LLMs and agents crawl your documentation effortlessly. Build,
          validate, and deploy high-density manifest files with clinical
          precision.
        </p>

        <HeroCTAButton />
      </div>

      <Editor />
    </section>
  );
}
