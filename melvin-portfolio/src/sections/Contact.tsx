import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const email = "mgonzalezramos21@" + "gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Technical Label */}
        <div className="mb-6 font-mono text-sm text-neutral-500 dark:text-neutral-400">
          // Contact
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
              ¡Hablemos!
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Estoy disponible para oportunidades remotas o híbridas en El
              Salvador como Frontend o Full Stack Developer. Si estás buscando a
              alguien con enfoque técnico, atención al detalle y mentalidad
              colaborativa, podemos conversar.
            </p>

            <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
              Disponible para trabajo remoto internacional o híbrido local ES.
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Email
              </p>
              <p className="text-neutral-900 dark:text-white font-medium">
                <a
                  href={`mailto:${email}?subject=Remote%20Opportunity`}
                  className="hover:underline"
                >
                  {email}
                </a>
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href={`mailto:${email}?subject=Remote%20Opportunity&body=Hi%20Melvin,%0A%0AI%20would%20like%20to%20talk%20about...`}
                  className="
    px-4 py-2 rounded-lg
    bg-neutral-900 text-white
    dark:bg-white dark:text-black
    text-sm font-medium
    hover:opacity-90
    transition
  "
                >
                  Enviar correo
                </a>

                <button
                  onClick={handleCopy}
                  className={`
    px-4 py-2 rounded-lg
    border text-sm font-medium transition
    ${
      copied
        ? "bg-emerald-600 text-white border-emerald-600"
        : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    }
  `}
                >
                  {copied ? "Email Copiado ✓" : "Copiar email"}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/melagora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/melagora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Signature */}
        <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800 pt-10 text-center font-mono text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} Melvin — Built with React & TypeScript
        </div>
      </div>
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="
        fixed bottom-8 left-1/2 -translate-x-1/2
        px-6 py-3
        rounded-lg
        bg-neutral-900 text-white
        dark:bg-white dark:text-black
        text-sm font-medium
        shadow-lg
        z-50
      "
          >
            Email copiado ✓
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
