import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistema de Reservaciones",
    description:
      "Aplicación web para gestión de reservas con visualización en calendario.",
    problem:
      "El cliente necesitaba centralizar reservas y visualizar disponibilidad en tiempo real.",
    solution:
      "Implementé una interfaz en React con integración de API REST y renderizado dinámico de eventos en calendario.",
    stack: ["React", "TypeScript", "REST API", "React Big Calendar"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Carrito E-commerce",
    description:
      "Rediseño completo de experiencia de carrito para plataforma digital.",
    problem:
      "La versión anterior tenía fricción en el proceso de compra y bajo enfoque en claridad visual.",
    solution:
      "Diseñé y desarrollé una versión moderna con mejor estructura de componentes, tipado fuerte y optimización de estado.",
    stack: ["React", "TypeScript", "UI/UX", "Component Architecture"],
    demo: "#",
    repo: "#",
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
                    Problem:
                  </span>{" "}
                  {project.problem}
                </p>

                <p>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    Solution:
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
                  className="
                    px-4 py-2 rounded-lg
                    border border-neutral-300 dark:border-neutral-700
                    text-sm font-medium
                    hover:bg-neutral-100 dark:hover:bg-neutral-800
                    transition
                  "
                >
                  View Code
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
