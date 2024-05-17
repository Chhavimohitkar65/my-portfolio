import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Achievement from "@/components/main/Achievement";
import Certifications from "@/components/main/Certifications";

import Extracurricular from "@/components/main/Extracurricular";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Extracurricular />
        <Certifications />
        <Projects />
        <Achievement />
      </div>
    </main>
  );
}
5;
