import remarkParse from "remark-parse";
import { unified } from "unified";
import { expect, test } from "vitest";
import { Parser } from "@/app/validate/parser";

// Tests for the Parser class
// The parser validates:
// 1. Top H1 exists and is not empty
// 2. Only one H1 total
// 3. Blockquote are not empty (if present)
// 4. H2 headings are not empty (if present)
// 5. H2 headings are followed by a list

// A barely valid llms.txt
test("should pass with just a valid H1", () => {
  const content = "# Project Name";
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({ isValid: true });
});

// Valid with blockquote
test("should pass with H1 and non-empty blockquote", () => {
  const content = `
# Project Name
> This is a summary
`;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({ isValid: true });
});

// Valid with H2 and list
test("should pass with H1, blockquote, and H2 followed by list", () => {
  const content = `
# Project Name
> Summary here
## File List
- [file.md](https://example.com/file.md)
`;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({ isValid: true });
});

// Missing H1
test("should fail if H1 is missing", () => {
  const content = "Some text";
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: ["Top H1 is missing"],
  });
});

// Empty H1
test("should fail if H1 is empty", () => {
  const content = "#";
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: ["Top H1 is empty"],
  });
});

// Multiple H1s
test("should fail with more than one H1", () => {
  const content = `
# Project Name
# Another H1
`;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: ["More than one H1"],
  });
});

// Empty blockquote
test("should fail if blockquote is empty", () => {
  const content = `
# Project Name
>
`;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: ["Blockquote is empty"],
  });
});

// Empty H2
test("should fail if H2 is empty", () => {
  const content = `
# Project Name
##
`;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: ["H2 is empty", "H2 is not followed by a list of files"],
  });
});

// H2 not followed by a list
test("should fail if H2 is not followed by a list", () => {
  const content = `
# Project Name
## Files
Some text here
`;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: ["H2 is not followed by a list of files"],
  });
});

// Multiple errors: empty H1 and missing H1
test("should fail with empty H1", () => {
  const content = `# `;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: ["Top H1 is empty"],
  });
});

// Multiple errors: H1, blockquote empty, H2 not followed by list
test("should accumulate multiple validation errors", () => {
  const content = `
# Project Name
>
## Files
Some text
# Another H1
`;
  const tree = unified().use(remarkParse).parse(content);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({
    isValid: false,
    errors: [
      "Blockquote is empty",
      "H2 is not followed by a list of files",
      "More than one H1",
    ],
  });
});

// Valid the entire FastHTML llms.txt
test("should valid the entire FastHTML llms.txt", async () => {
  const response = await fetch("https://www.fastht.ml/docs/llms.txt");
  const fastHtmlDocs: string = await response.text();

  const tree = unified().use(remarkParse).parse(fastHtmlDocs);
  const parser = new Parser(tree.children);
  expect(parser.parse()).toEqual({ isValid: true });
});
