import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </>
  );

  // TODO: Build the homepage
}
