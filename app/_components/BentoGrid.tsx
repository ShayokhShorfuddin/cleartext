// TODO: Work here. Remove root level hosting and semantic mapping. Add Spec Guide, Privacy, Community Gallery

export function BentoGrid() {
  return (
    <section className="flex flex-col items-center mt-30 mx-10">
      <h2 className="text-xl font-medium">Features</h2>

      <div className="grid grid-cols-3 gap-5 mt-15">
        <GridItem
          title="Raw Markdown Control"
          subtitle="Directly edit your llms.txt source. The two-way sync ensures your form data and markdown stay spec compliant."
        />
        {/* TODO: Need to implement this */}
        <GridItem
          title="Compliance Scoring"
          subtitle="Test your own or other website's llms.txt content and compute overall compliance with the official spec."
        />
        <GridItem
          title="1-Click Export"
          subtitle="Download your freshly generated file in plain text (.txt) and markdown (.md) format."
        />
        <GridItem
          title="Spec Guide"
          subtitle="An overview of the llms.txt specification. Gain a complete understanding of each part of the file."
        />
        <GridItem
          title="Adoption Gallery"
          subtitle="See verified adoptions of llms.txt files by brands and organizations all over the world."
        />
        <GridItem
          title="Complete Privacy"
          subtitle="Your content remains yours. Your form data and generated files never leave your browser."
        />
      </div>
    </section>
  );
}

function GridItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border border-[#C4C7C7] hover:border-dark-green p-8">
      <p className="text-lg font-medium">{title}</p>
      <p className="mt-2 text-sm text-neutral-700">{subtitle}</p>
    </div>
  );
}
