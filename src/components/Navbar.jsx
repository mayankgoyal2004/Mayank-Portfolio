import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { useActiveSection } from "./scroll";
import MGLogo from "../assets/mgLogo";
import { toogleTheme } from "./sotre/themeslice";

const Navbar = () => {
  const activeSection = useActiveSection([
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]);
  const { isDark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [ismenuopen, setismenuopen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="w-full shadow-sm sticky top-0 z-50 bg-white  dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center dark:bg-[#1e293b]">
        {/* Logo */}
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            <MGLogo />
          </h1>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            portfolio
          </h1>
        </div>

        <ul className="hidden md:flex gap-10 items-center font-medium text-[16px]">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                const section = document.getElementById(item.id);
                if (section) {
                  const yOffset = -80; // Adjust to your navbar height
                  const y =
                    section.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`cursor-pointer transition-all duration-200 ease-in ${
                activeSection === item.id
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200"
              } hover:text-blue-500 dark:hover:text-blue-300`}
            >
              <div className="flex flex-col items-center">
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="h-[2px] w-10 bg-blue-600 mt-[2px]"></span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toogleTheme())}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setismenuopen(!ismenuopen)}
          >
            {ismenuopen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {ismenuopen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setismenuopen(false);
                  setTimeout(() => {
                    const section = document.getElementById(item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 200);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
