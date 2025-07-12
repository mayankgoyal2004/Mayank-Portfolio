import { useState } from "react";
import { motion } from "motion/react"

const Skill = () => {
  const [active, setActive] = useState("all");

  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/html5/html5-original.svg",
      category: "frontend",
    },
    {
      name: "CSS",
      level: 90,
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/css3/css3-original.svg",
      category: "frontend",
    },
    {
      name: "JavaScript",
      level: 90,
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/javascript/javascript-original.svg",
      category: "frontend",
    },
    {
      name: "TypeScript",
      level: 80,
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/typescript/typescript-original.svg",
      category: "library",
    },
    {
      name: "React",
      level: 92,
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/react/react-original.svg",
      category: "frontend",
    },
    {
      name: "TailwindCSS",
      level: 92,
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
      category: "library",
    },
    {
      name: "Redux",
      level: 92,
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/redux/redux-original.svg",
      category: "library",
    },
    {
      name: "Git",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "tools",
    },
  ];

  const categories = ["all", "frontend", "library", "tools"];
  const filteredSkills =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className=" px-4 transition-colors duration-300  bg-white dark:bg-[#0f172a] scroll-mt-32 lg:pt-10 ">
      {/* Title */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Skills
          </span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          I’ve worked with various technologies. Here's what I know best:
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-white dark:bg-slate-800 p-1 rounded-lg shadow-sm dark:shadow dark:border dark:border-slate-600 transition-all">
          {categories.map((item, index) => (
            <button
              onClick={() => setActive(item)}
              key={index}
              className={`px-4 py-2 rounded font-medium capitalize text-sm transition-all duration-300 ${
                active === item
                  ? "bg-blue-500 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                <img
                
                loading="lazy"
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-medium mb-2 text-gray-800 dark:text-white">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {skill.level}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
