"use client";

const FULL_TEXT = `# Cleartext

> The precision llms.txt builder for developers. Standardize how LLMs and agents crawl your documentation. Build, validate, and deploy high- density manifest files with clinical precision.

## Get started

- [Builder](https://cleartext-dev.vercel.app/build): Build a new llms.txt file
- [Validate](https://cleartext-dev.vercel.app/validate): Validate an existing file
- [Spec Guide](https://cleartext-dev.vercel.app/spec-guide): Learn about the specifications of llms.txt`;

export function Editor() {
  return (
    <div>
      <p>{FULL_TEXT}</p>
    </div>
  );
}
