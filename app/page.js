import Hero from './_components/Hero';
import About from './_components/About';
import Education from './_components/Education';
import Skills from './_components/Skills';
import Projects from './_components/Projects';
import Contact from './_components/Contact';
import Footer from './_components/Footer';

export const metadata = {
  title: 'Karnati Ashwin',
  description: 'Explore the portfolio of Karnati Ashwin, a Full Stack Developer & AI Enthusiast.',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section id="hero" className="w-full">
        <Hero />
      </section>
      <section id="about" className="w-full my-16">
        <About />
      </section>
      <section id="education" className="w-full my-16">
        <Education />
      </section>
      <section id="skills" className="w-full my-16">
        <Skills />
      </section>
      <section id="projects" className="w-full my-16">
        <Projects />
      </section>
      <section id="contact" className="w-full my-16">
        <Contact />
      </section>
    </main>
  );
}
