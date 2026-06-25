import { FileText } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const FULL_TEXT = `# Cleartext

> The precision llms.txt platform for developers. Ensure LLMs and agents crawl your site content effortlessly. Build, validate, and deploy high-density manifest files with clinical precision.

## Get started

- [Builder](https://cleartext-dev.vercel.app/build): Build a new llms.txt file
- [Validator](https://cleartext-dev.vercel.app/validate): Validate an existing file
- [Spec Guide](https://cleartext-dev.vercel.app/spec-guide): Learn about the specifications of llms.txt`;

export function Editor() {
  return (
    <div className={`${jetbrainsMono.className} w-full max-w-[47rem]`}>
      <EditorHeader />
      <EditorBody />
      <EditorFooter />
    </div>
  );
}

function EditorBody() {
  const lines = FULL_TEXT.split("\n");
  const lastLineIndex = lines.length - 1;

  return (
    <div className="flex border border-t-0 border-[#C4C7C7]">
      <div className="text-sm p-5">
        {lines.map((line, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <We won't reorder it>
          <p key={index} className={index === 0 ? "bg-green-100/60" : ""}>
            {line === "" ? "\u00A0" : line}
            {index === lastLineIndex && (
              <span className="animate-blink inline-block w-[7px] h-[1em] bg-black ml-1.5" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

function EditorFooter() {
  return (
    <div className="flex justify-between px-3 bg-[#F1F4F8] border border-t-0 border-[#C4C7C7] rounded-b-sm py-1">
      <div className="flex items-center gap-x-1">
        <VoltIcon />
        <small className="text-[12px] italic">Ready</small>
      </div>
      <small className="text-[12px]">Ln 9, Col 104</small>
    </div>
  );
}

function EditorHeader() {
  return (
    <div className="flex items-center justify-between bg-[#F1F4F8] border border-[#C4C7C7] rounded-t-sm py-3 px-5">
      <div className="flex items-center justify-between gap-x-6">
        {/* Three dots */}
        <div className="flex items-center gap-x-2">
          <div className="size-2.5 rounded-full bg-[#C4C7C7]" />
          <div className="size-2.5 rounded-full bg-[#C4C7C7]" />
          <div className="size-2.5 rounded-full bg-[#C4C7C7]" />
        </div>

        {/* Filename */}
        <div className="flex items-center border border-[#C4C7C7] px-3.5 py-1 gap-x-2.5 rounded bg-white">
          <FileText size={16} />
          <p className="text-[13px] text-neutral-700 select-none">llms.txt</p>
        </div>
      </div>

      {/* Spec valid */}
      <div className="flex items-center gap-x-1.5 bg-[#007526]/10 px-3 py-[1px] rounded border border-[#007526]/20">
        <CheckIcon />
        <p className="text-[12px] text-dark-green font-medium select-none">
          Spec Valid
        </p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-2.5 fill-dark-green"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );
}

function VoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-3"
    >
      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
    </svg>
  );
}
