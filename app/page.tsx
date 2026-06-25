import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* TODO: Remove me later */}
        <div className="h-screen"></div>
      </main>

      <Footer />
    </>
  );

  // TODO: Build the homepage
}
