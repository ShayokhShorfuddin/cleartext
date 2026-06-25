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

        {/* TODO: Add mobile screen breakpoint */}

        {/* TODO: Remove me later */}
        <div className="h-screen"></div>
      </main>

      <Footer />
    </>
  );
}
