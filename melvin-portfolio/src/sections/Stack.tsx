import { motion } from "framer-motion";

const stackData = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Laravel", "PHP", "REST APIs", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "Postman", "VS Code"],
  },
];

const Stack = () => {
  return (
    <section
      id="stack"
      className="relative py-28 px-6 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Technical Label */}
        <div className="mb-6 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          // Tech Stack
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-16"
        >
          Technologies I Work With
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {stackData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                p-6 rounded-xl
                border border-neutral-200 dark:border-neutral-800
                bg-neutral-50 dark:bg-neutral-900
              "
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.items.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800" />
      </div>
    </section>
  );
};

export default Stack;
