import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FaqPage from "@/components/FAQ";
import ContactPage from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 scroll-smooth">
        <Hero />
        <About />
        <Services />
        <FaqPage />
        <ContactPage />
      </main>
    </>
  );
}
