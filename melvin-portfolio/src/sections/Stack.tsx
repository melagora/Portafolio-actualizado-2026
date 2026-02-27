const Stack = () => {
  const technologies = [
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "MySQL",
    "Tailwind CSS",
  ];

  return (
    <section
      id="stack"
      className="min-h-screen flex items-center px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
          Stack Tecnológico
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-center"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
