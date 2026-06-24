import { Editor } from "./Editor";
import { HeroCTAButton } from "./HeroCTAButtons";

export function Hero() {
  return (
    <section className="flex items-center">
      {/* Left side */}
      <div className="flex flex-col">
        <h1>
          The precision <span className="bg-light-green">llms.txt</span> builder
          for developers.
        </h1>

        <p>
          Standardize how LLMs and agents crawl your documentation. Build,
          validate, and deploy high- density manifest files with clinical
          precision.
        </p>

        <HeroCTAButton />
      </div>

      <Editor />
    </section>
  );
}
