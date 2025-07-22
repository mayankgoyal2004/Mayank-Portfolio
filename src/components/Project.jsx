import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react"
const projects = [
  {
    title: "Task Assign System",
    description:
      "A collaborative task management tool using localStorage. Supports task creation, status updates, and simple user roles.",
    tags: ["React", "LocalStorage", "Tailwind CSS"],
    code: "https://github.com/mayankgoyal2004/react-TaskAssignSystem",
    demo: "https://react-task-management-system-hazel.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    showDemo: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Modern and responsive developer portfolio with animation, dark mode, and smooth scrolling.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    code: "https://github.com/mayankgoyal2004/Mayank-Portfolio",
    demo: "https://mayankportfolio-one.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    showDemo: true,
  },
  {
    title: "E-Commerce Website",
    description:
      "Fully functional e-commerce site with product listings, filtering, and API-based search.",
    tags: ["React", "API"],
    code: "https://github.com/mayankgoyal2004/Ecomerce-react",
    image:
      "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?w=600&auto=format&fit=crop&q=60",
    showDemo: false,
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-700 transition-all duration-300 overflow-hidden"
  >
    <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden">
      <img
      loading="lazy"
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300"
      />
    </motion.div>

    <div className="p-5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-800 dark:text-blue-300 text-blue-600 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-5">
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-4 py-2 text-sm border dark:border-slate-600 rounded hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200"
        >
          <Github size={16} /> Code
        </a>

        {project.showDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="px-4 pt-10 md:px-10  dark:bg-[#0f172a] scroll-mt-20">
      <div className="text-center mb-8 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white ">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Showcasing practical solutions I've built with clean code and great design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
