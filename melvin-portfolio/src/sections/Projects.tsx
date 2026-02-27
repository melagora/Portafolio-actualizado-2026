const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-12 bg-white dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
          Proyectos
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-semibold">Proyecto 1</h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              Descripción breve del proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
