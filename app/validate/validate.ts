import remarkParse from "remark-parse";
import { unified } from "unified";
import { Parser } from "./parser";

export function validate(content: string) {
  const tree = unified().use(remarkParse).parse(content);

  console.log(tree);

  // Guard: Empty file
  if (tree.children.length === 0) {
    return {
      isValid: false,
      reason: "File is empty.",
    };
  }

  const parser = new Parser(tree.children);
  const result = parser.parse();

  console.log(result.isValid);

  if (!result.isValid) {
    console.log(result.errors);
  }
}
