"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-rose-50 via-sky-50 to-indigo-50">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full border border-sky-400/30 bg-sky-50/30 backdrop-blur-sm"
            >
              <span className="text-sky-800 text-sm">Available for Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-800"
            >
              Frontend Developer
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500"
              >
                Building Digital Experiences
              </motion.span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            I craft responsive websites where technology meets creativity. Let's
            bring your vision to life with clean code and modern design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 transition-all duration-300"
            >
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-white font-medium">View My Work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="relative px-6 py-3 rounded-lg overflow-hidden border border-sky-500/30 hover:border-sky-500/50 bg-sky-50/30 backdrop-blur-sm transition-all duration-300"
            >
              <span className="text-sky-700 font-medium">Contact Me</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Image/Animation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-indigo-400/30 rounded-full opacity-70 blur-3xl animate-pulse"></div>
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
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-sky-400/20 backdrop-blur-sm bg-white/30">
              <div className="w-full h-full flex items-center justify-center text-sky-700">
                Your Image
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-r from-sky-400/20 to-indigo-400/20 rounded-lg backdrop-blur-lg"
      />
    </section>
  );
};

export default Hero;
