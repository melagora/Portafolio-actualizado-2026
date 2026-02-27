import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden bg-white dark:bg-neutral-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40" />
      </div>

      {/* Floating Code Decoration */}
      <div className="absolute right-10 top-1/3 hidden lg:block text-sm font-mono text-neutral-500 dark:text-neutral-600 opacity-50 select-none">
        <pre>
          {`const developer = {
  name: "Melvin",
  stack: ["React", "TypeScript", "Laravel"],
  remote: true
}`}
        </pre>
      </div>

      <div className="max-w-5xl space-y-8">
        {/* Availability */}
        {/* <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          Disponible para trabajo remoto
        </p> */}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight"
        >
          Full Stack Developer
        </motion.h1>

        {/* Terminal Typing */}
        <div className="font-mono text-emerald-600 dark:text-emerald-400 text-lg">
          <TypeAnimation
            sequence={[
              "> Aplicaciones web modernas...",
              1500,
              "> Integración de APIs REST...",
              1500,
              "> Código limpio y mantenible...",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl"
        >
          Desarrollo aplicaciones web con arquitectura limpia, integración de
          APIs REST y enfoque en rendimiento, mantenibilidad y buenas prácticas.
        </motion.p>

        {/* Stack Tags */}
        {/* <div className="flex flex-wrap gap-3">
          {["React", "TypeScript", "Laravel", "Spring Boot", "MySQL"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium"
              >
                {tech}
              </span>
            ),
          )}
        </div> */}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition"
          >
            Ver proyectos
          </a>

          <a
            href="/cv/Melvin_Gonzalez_Desarrollador_Web_Full_Stack_React.pdf"
            download
            className="
    px-6 py-3 rounded-lg
    border border-neutral-300 dark:border-neutral-700
    text-neutral-900 dark:text-neutral-100
    bg-white dark:bg-transparent
    hover:bg-neutral-100 dark:hover:bg-neutral-800
    font-medium transition
  "
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
