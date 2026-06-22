"use client";

import { useRef } from "react";
import remarkParse from "remark-parse";
import { unified } from "unified";

export default function Page() {
  // TODO: Implement validator on this page

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function checkIfItsParsingOrNot() {
    console.log("Fired");

    if (!textareaRef.current) {
      return;
    }

    const content = textareaRef.current.value;

    const tree = unified().use(remarkParse).parse(content);

    console.log(tree);
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

// Great!
// For this:

// # Title

// > Optional description goes here

// We are getting something like this:

// {type: 'root', children: Array(2), position: {…}}
// children
// :
// Array(2)
// 0
// :
// {type: 'heading', depth: 1, children: Array(1), position: {…}}
// 1
// :
// {type: 'blockquote', children: Array(1), position: {…}}
// length
// :
// 2
// [[Prototype]]
// :
// Array(0)
// position
// :
// {start: {…}, end: {…}}
// type
// :
// "root"
