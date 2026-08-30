import Navbar from '../sections/Navbar.js';
import Hero from '../sections/Hero.js';
import About from '../sections/About.js';
import Projects from '../sections/Projects.js';
import WorkExperience from '../sections/Experince.js';
import Contact from '../sections/Contact.js';
import Footer from '../sections/Footer.js';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}
