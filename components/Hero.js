"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const codeSnippet = `const developer = {
  name: "Mohamed",
  skills: [
    "React",
    "Next.js",
    "TypeScript"
  ],
  passion: "Building Web Apps"
};`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full border border-sky-400/30 bg-sky-50/30 backdrop-blur-sm">
              <span className="text-sky-800 text-sm">Available for Work</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
              Software Developer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                Building Digital Experiences
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            I craft responsive websites where technology meets creativity. Let's
            bring your vision to life with clean code and modern design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 transition-all duration-300"
            >
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-white font-medium">View My Work</span>
                {mounted && (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                )}
              </div>
            </a>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mohamed-hersi-786a31268/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 rounded-lg border border-sky-500/30 hover:border-sky-500/50 bg-sky-50/30 backdrop-blur-sm text-sky-700 transition-all duration-300"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://github.com/mohamedhhersi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 rounded-lg border border-sky-500/30 hover:border-sky-500/50 bg-sky-50/30 backdrop-blur-sm text-sky-700 transition-all duration-300"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Code Snippet Animation */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-indigo-400/30 rounded-full opacity-70 blur-3xl animate-pulse"></div>
            {mounted && (
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-4 border-2 border-sky-400/20 rounded-full"
              />
            )}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-400/20 backdrop-blur-sm bg-white/30">
              <div className="w-full h-full flex items-center justify-center p-4">
                <TypeAnimation
                  sequence={[codeSnippet]}
                  wrapper="pre"
                  cursor={true}
                  repeat={0}
                  speed={75}
                  className="text-left font-mono text-[10px] md:text-sm text-sky-700/70"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-8 h-14 border-2 border-sky-500/30 rounded-full hidden sm:flex items-start justify-center p-2"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-1 h-3 bg-sky-500/50 rounded-full"
        />
      </motion.button>
    </motion.section>
  );
};

export default Hero;
