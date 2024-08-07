import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import CVS from './components/CVS';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="cvs">
          <CVS />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
