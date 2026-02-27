const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 flex flex-col justify-center">
      {children}
    </section>
  );
};

export default SectionWrapper;
