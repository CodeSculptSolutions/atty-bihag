import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { Approach } from "@/components/sections/approach";
import { Credentials } from "@/components/sections/credentials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PracticeAreas />
      <Approach />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
