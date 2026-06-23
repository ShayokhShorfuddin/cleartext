import type { RootContent } from "mdast";

type TypeParse =
  | {
      isValid: true;
    }
  | {
      isValid: false;
      errors: string[];
    };

export class Parser {
  child_number: number;

  children: RootContent[];
  current_child: RootContent | "EOF";
  future_child: RootContent | "EOF";

  public constructor(children: RootContent[]) {
    this.children = children;
    this.child_number = 1;
    this.current_child = this.children[0];

    if (children.length >= 2) {
      this.future_child = children[1];
    } else {
      this.future_child = "EOF";
    }
  }

  public nextChild() {
    this.current_child = this.future_child;
    this.child_number++;
    this.future_child = this.peekFutureChild();
  }

  public peekFutureChild() {
    if (this.child_number >= this.children.length) {
      return "EOF";
    }

    return this.children[this.child_number];
  }

  public parse(): TypeParse {
    // Rules:
    // (Required) An H1 with the name of the project or site. This is the only required section
    // (Optional) A blockquote with a short summary of the project, containing key information necessary for understanding the rest of the file
    // Zero or more markdown sections (e.g. paragraphs, lists, etc) of any type except headings, containing more detailed information about the project and how to interpret the provided files
    // Zero or more markdown sections delimited by H2 headers, containing “file lists” of URLs where further detail is available
    // Each “file list” is a markdown list, containing a required markdown hyperlink [name](url), then optionally a : and notes about the file.

    const errors: string[] = [];

    while (this.current_child !== "EOF") {
      // The top child must be an H1
      if (this.child_number === 1) {
        if (
          this.current_child.type === "heading" &&
          this.current_child.depth === 1
        ) {
          // Top H1 is present. Check if it's empty or not.
          if (this.current_child.children.length === 0) {
            errors.push("Top H1 is empty");
          }
        } else {
          errors.push("Top H1 is missing");
        }
      }

      // If we encounter another H1, located somewhere in the content
      if (
        this.current_child.type === "heading" &&
        this.current_child.depth === 1 &&
        this.child_number !== 1
      ) {
        errors.push("More than one H1");
      }

      // (Optional) A blockquote with a short summary of the project
      // If there is a blockquote, test whether it's empty or not
      if (this.current_child.type === "blockquote") {
        if (this.current_child.children.length === 0) {
          errors.push("Blockquote is empty");
        }
      }

      // Zero or more markdown sections (e.g. paragraphs, lists, etc) of any type except headings
      // We can safely ignore these and wait for the next child to be an H2

      // Zero or more markdown sections delimited by H2 headers

      // When we finally detect an H2, we will collect the URLs within the list of files that follows it, for later URL reachability testing feature.

      if (
        this.current_child.type === "heading" &&
        this.current_child.depth === 2
      ) {
        // H2 is present. Check if it's empty or not.
        if (this.current_child.children.length === 0) {
          errors.push("H2 is empty");
        }

        if (this.future_child !== "EOF" && this.future_child.type === "list") {
          // Doing nextChild() to move to the list of files
          this.nextChild();
        } else {
          errors.push("H2 is not followed by a list of files");
        }
      }

      this.nextChild();
    }

    if (errors.length > 0) {
      return {
        isValid: false,
        errors,
      };
    } else {
      return {
        isValid: true,
      };
    }
  }
}
