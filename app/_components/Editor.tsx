import { FileText } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const FULL_TEXT = `# Cleartext

> The precision llms.txt builder for developers. Standardize how LLMs and agents crawl your documentation. Build, validate, and deploy high- density manifest files with clinical precision.

## Get started

- [Builder](https://cleartext-dev.vercel.app/build): Build a new llms.txt file
- [Validate](https://cleartext-dev.vercel.app/validate): Validate an existing file
- [Spec Guide](https://cleartext-dev.vercel.app/spec-guide): Learn about the specifications of llms.txt`;

export function Editor() {
  return (
    <div className={`${jetbrainsMono.className} w-full max-w-[45rem]`}>
      {/* TODO: No need to generate the characters one by one. Keep the entire text as they are. Only the blinking cursor needs to be implemented */}
      <EditorHeader />
      <EditorBody />
    </div>
  );
}

function EditorBody() {
  return (
    <div className="flex">
      {/* Line numbers */}
      {/* TODO: Continue work here*/}
      <div className="bg-[#F1F4F8] border-r border-l border-[#C4C7C7] pr-3 pl-5 pt-3 text-sm text-[#444748]/40">
        <p>1</p>
      </div>
      {/* File content */}
      <p>{FULL_TEXT}</p>
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
