import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
