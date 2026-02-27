import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar entre modo claro y oscuro"
      className="
        flex items-center gap-2
        px-4 py-2 rounded-full
        border border-neutral-300 dark:border-neutral-700
        bg-neutral-100 dark:bg-neutral-800
        text-neutral-900 dark:text-neutral-100
        hover:bg-neutral-200 dark:hover:bg-neutral-700
        transition-colors duration-300
        text-sm font-medium
        whitespace-nowrap
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "dark" : "light"}
          className="flex items-center gap-2"
        >
          {isDark ? (
            <>
              {/* Moon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12.79A9 9 0 0111.21 3c0 .34-.02.67-.05 1A7 7 0 1019 13.79c.33-.03.66-.05 1-.05z" />
              </svg>
              <span className="min-w-22.5 text-left">Dark Mode</span>
            </>
          ) : (
            <>
              {/* Sun */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m15.36 6.36l1.42 1.42M4.22 4.22l1.42 1.42m0 12.72l-1.42 1.42m15.56-15.56l-1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <span className="min-w-22.5 text-left">Light Mode</span>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
