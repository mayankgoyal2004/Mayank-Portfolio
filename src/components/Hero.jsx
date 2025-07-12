import { Download, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react"
const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center w-full overflow-hidden min-h-screen px-6 py-16 bg-white dark:bg-[#0f172a] transition-colors duration-300 scroll-mt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 dark:bg-pink-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-17 max-w-7xl">
        <div className="flex-1 text-center lg:text-left space-y-4">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">Hi I'm</h1>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Mayank Goyal
          </h2>

          <h2 className="text-2xl text-gray-700 dark:text-gray-300">
            <span>I am a </span>
            <TypeAnimation
              sequence={["Web Developer", 1000, "Coder", 1000]}
              wrapper="span"
              speed={50}
              className="text-4xl md:text-5xl text-purple-600 font-semibold block"
              repeat={Infinity}
            />
          </h2>

          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
            I create exceptional digital experiences through innovative web
            development, combining cutting-edge technology with elegant design
            to bring ideas to life.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <motion.a 
            whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              
            href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-100">
            <motion.button
              
            
            >
              Hire Me
            </motion.button>
</motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Download size={20} className="mr-2 inline" />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-start items-center">
            {[
              { icon: Github, href: "https://github.com/mayankgoyal2004" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mayank-goyal-634a662a1/" },
              { icon: Mail, href: "mailto:2004mayankgoyal@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-black dark:text-white rounded-full p-3 transition-all duration-300"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/30 dark:border-blue-300/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-purple-500/30 dark:border-purple-300/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-pink-500/30 dark:border-pink-300/20 rounded-full"
              />

              <div className="absolute inset-12 rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                  MG
                </div>
              </div>

              <motion.div className="floating-animation absolute top-4 right-4" style={{ animationDelay: "0s" }}>
                <div className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white dark:bg-slate-800">
                  <span className="text-blue-500 font-bold">JS</span>
                </div>
              </motion.div>

              <motion.div className="floating-animation absolute bottom-4 left-4" style={{ animationDelay: "2s" }}>
                <div className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white dark:bg-slate-800">
                  <span className="text-purple-500 font-bold">TS</span>
                </div>
              </motion.div>

              <motion.div className="floating-animation absolute top-1/2 left-0" style={{ animationDelay: "4s" }}>
                <div className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-white dark:bg-slate-800">
                  <span className="text-green-500 font-bold">Node</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
