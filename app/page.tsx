import { BentoGrid } from "./_components/BentoGrid";
import { CTA } from "./_components/CTA";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { PreciseControl } from "./_components/PreciseControl";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <hr className="mx-10 mt-30 border border-[#efefef]" />

        <PreciseControl />
        <BentoGrid />
        <CTA />

        {/* TODO: Add mobile screen breakpoint */}
      </main>

      <Footer />
    </>
  );
}
