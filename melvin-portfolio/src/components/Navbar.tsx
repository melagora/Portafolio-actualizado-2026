import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const sections = ["hero", "about", "stack", "projects", "contact"];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "#hero", id: "hero" },
    { name: "Sobre mí", href: "#about", id: "about" },
    { name: "Stack", href: "#stack", id: "stack" },
    { name: "Proyectos", href: "#projects", id: "projects" },
    { name: "Contacto", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 transition-all duration-300">
      <nav
        className={`
          max-w-6xl mx-auto px-6 py-3
          rounded-xl md:rounded-full
          transition-all duration-500
          ${
            scrolled
              ? "bg-white shadow-md border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800"
              : "bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md"
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-semibold text-neutral-900 dark:text-white">
            Melvin
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`
                  text-sm font-medium relative transition
                  ${
                    activeSection === link.id
                      ? "text-black dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400"
                  }
                `}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white rounded-full" />
                )}
              </a>
            ))}

            {/* Desktop Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Right Controls Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Theme Toggle (SIEMPRE visible) */}
            <ThemeToggle />

            {/* Hamburger */}
            <button
              type="button"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative w-8 h-8 flex items-center justify-center"
            >
              <span
                className={`
                  absolute h-0.5 w-6 bg-neutral-900 dark:bg-white
                  transition-all duration-300 ease-in-out
                  ${isOpen ? "rotate-45" : "-translate-y-2"}
                `}
              />
              <span
                className={`
                  absolute h-0.5 w-6 bg-neutral-900 dark:bg-white
                  transition-all duration-300 ease-in-out
                  ${isOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`
                  absolute h-0.5 w-6 bg-neutral-900 dark:bg-white
                  transition-all duration-300 ease-in-out
                  ${isOpen ? "-rotate-45" : "translate-y-2"}
                `}
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          id="mobile-menu"
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  text-sm font-medium transition
                  ${
                    activeSection === link.id
                      ? "text-black dark:text-white"
                      : "text-neutral-600 dark:text-neutral-400"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
