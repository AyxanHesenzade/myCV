import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor/CustomCursor';
import BackgroundDecor from './components/BackgroundDecor/BackgroundDecor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#0d1117] min-h-screen selection:bg-accent/30 selection:text-white">
      <CustomCursor />
      <BackgroundDecor />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[9999] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
