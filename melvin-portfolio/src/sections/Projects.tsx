import { motion } from "framer-motion";

const projects = [
  {
    title: "Mejora de Carrito de Compras",
    description:
      "Evaluar la capacidad de análisis, creatividad y desarrollo web a través de una propuesta de mejora de cierto carrito de compras.",
    problem:
      "El cliente necesitaba un rediseño de su carrito de compras para mejorar la experiencia del usuario, pero carecía de una visión clara sobre cómo estructurar la interfaz y qué tecnologías utilizar.",
    solution:
      "Se creó un diseño visual basado en las mejores prácticas de UX/UI, utilizando React y TailwindCSS para estructurar la interfaz y aplicar los estilos",
    stack: ["React", "TypeScript", "next.js", "Figma"],
    demo: "https://www.figma.com/design/gaU8XekbU2vQ13bUMonSsQ/Carrito-de-compras-LOLO?node-id=0-1&t=pwOgVEZjtTa8Pu2p-1",
    repo: "https://github.com/melagora/carritodecompraslolo?tab=readme-ov-file",
  },
  {
    title: "Single Page Application implementando API con Firebase",
    description:
      "Single Page Application desarrollada con React y Firebase que implementa autenticación de usuarios y gestión CRUD de productos. Solo usuarios autenticados pueden visualizar y administrar la información.",
    problem:
      "El proyecto original era un CRUD básico sin autenticación ni control de acceso, lo que permitía modificaciones sin restricción y carecía de estructura visual profesional.",
    solution:
      "Se integró autenticación con Firebase, protección de rutas y rediseño de interfaces con CSS puro, logrando una SPA estructurada, segura y con mejor experiencia de usuario.",
    stack: [
      "React",
      "React-router",
      "react-hook-form",
      "Firebase",
      "Firebase Authentication",
      "Firebase database",
    ],
    demo: "https://mini-manejo-de-inventario-con-firebase-autenticacion.vercel.app/",
    repo: "https://github.com/melagora/Mini-Manejo-de-inventario-con-firebase---autenticaci-n/tree/main",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Technical Label */}
        <div className="mb-6 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          // Projects
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-16"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                p-8 rounded-2xl
                border border-neutral-200 dark:border-neutral-800
                bg-neutral-50 dark:bg-neutral-900
              "
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                {project.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {project.description}
              </p>

              <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                <p>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    Problema:
                  </span>{" "}
                  {project.problem}
                </p>

                <p>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    Solución:
                  </span>{" "}
                  {project.solution}
                </p>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 text-xs rounded-md
                      bg-neutral-200 dark:bg-neutral-800
                      text-neutral-700 dark:text-neutral-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-8">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4 py-2 rounded-lg
                    bg-neutral-900 text-white
                    dark:bg-white dark:text-black
                    text-sm font-medium
                    hover:opacity-90 transition
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    px-4 py-2 rounded-lg
    border border-neutral-300 dark:border-neutral-700
    text-neutral-900 dark:text-white
    hover:bg-neutral-100 dark:hover:bg-neutral-800
    transition
  "
                >
                  Revisar Código
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800" />
      </div>
    </section>
  );
};

export default Projects;
