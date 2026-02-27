import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-white dark:bg-neutral-950 overflow-hidden"
    >
      {/* Grid Background (igual que Hero pero más sutil) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Technical Label */}
        <div className="mb-6 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          // About me
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Frontend-Focused Full Stack Developer
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Desarrollador Full Stack con enfoque principal en frontend,
              especializado en React y TypeScript para la construcción de
              interfaces modernas, mantenibles y centradas en experiencia de
              usuario.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Trabajo con arquitecturas limpias e integración de APIs REST
              utilizando Laravel en el backend cuando el proyecto lo requiere.
              Me enfoco en rendimiento, escalabilidad y buenas prácticas, con
              mentalidad orientada a entornos colaborativos y trabajo remoto.
            </p>

            <div className="pt-4">
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                Disponible para oportunidades remotas
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-6">
            {[
              "Arquitectura frontend escalable",
              "Integración y consumo de APIs REST",
              "Componentización y manejo de estado en React",
              "Desarrollo backend estructurado con Laravel",
              "Enfoque en rendimiento y mantenibilidad",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  p-5 rounded-xl
                  border border-neutral-200 dark:border-neutral-800
                  bg-neutral-50 dark:bg-neutral-900
                  text-neutral-700 dark:text-neutral-300
                  text-sm
                "
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Minimal Divider */}
        <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800" />
      </div>
    </section>
  );
};

export default About;
