import { UsersRound, CodeIcon, MonitorIcon, UsersIcon } from "lucide-react";
import { motion } from "motion/react"

const Abouts = () => {
  const features = [
    {
      icon: <CodeIcon size={24} className="text-blue-600" />,
      title: "Clean Code",
      description:
        "I write clean, maintainable, and efficient code following best practices and modern standards.",
    },
    {
      icon: <MonitorIcon size={24} className="text-blue-600" />,
      title: "Responsive Design",
      description:
        "My applications look and work perfectly on all devices, from mobile phones to large desktop screens.",
    },
    {
      icon: <UsersIcon size={24} className="text-blue-600" />,
      title: "User Experience",
      description:
        "I focus on creating intuitive and delightful user experiences that solve real problems.",
    },
    {
      icon: <UsersRound className="text-blue-600" />,
      title: "Performance",
      description:
        "Optimizing applications for 90+ Lighthouse scores and sub-second load times.",
    },
  ];

  return (
    <section id="about" className="py-16 scroll-mt-28  bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Me
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto my-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            I'm a passionate web developer who loves building responsive and interactive websites. I enjoy turning creative ideas into real-world digital solutions.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000&auto=format&fit=crop"
              alt="Developer working on code"
              className="rounded-lg shadow-lg w-full h-auto ml-4"
            />
          </div>

          {/* Feature Cards */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 ml-5 text-gray-800 dark:text-white">
              Passionate Frontend Developer
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mr-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
