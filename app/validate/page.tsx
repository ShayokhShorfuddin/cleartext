"use client";

import { useRef } from "react";
import { validate } from "./validate";

export default function Page() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function checkIfItsParsingOrNot() {
    if (!textareaRef.current) {
      return;
    }

    const content = textareaRef.current.value;

    validate(content);
  }

  return (
    <main className="flex flex-col items-center">
      <textarea
        name="content"
        id="paste-content"
        ref={textareaRef}
        placeholder={"Paste your llms.txt content"}
        className="border border-neutral-300 w-1/2 h-50 mt-10"
      />

      <button
        type="button"
        onClick={checkIfItsParsingOrNot}
        className="p-2 border border-neutral-200 mt-2 cursor-pointer"
      >
        Validate
      </button>
    </main>
  );
}
