"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    category: "Technical Skills",
    items: [
      {
        name: "React",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      {
        name: "Next.js",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      {
        name: "HTML/CSS",
        icon: (
          <div className="flex gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              style={{ width: "2rem", height: "2rem" }}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3"
              style={{ width: "2rem", height: "2rem" }}
            />
          </div>
        ),
      },
      {
        name: "Node.js",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node.js"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      {
        name: "Python",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      {
        name: "Git",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
      { name: "REST APIs", icon: "🔌" },
      {
        name: "Framer Motion",
        icon: (
          <i className="devicon-framermotion-original colored text-4xl"></i>
        ),
      },
      {
        name: "Figma",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            alt="Figma"
            style={{ width: "2rem", height: "2rem" }}
          />
        ),
      },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 rounded-full border border-sky-400/30 bg-sky-50/30 backdrop-blur-sm"
          >
            <span className="text-sky-800 text-sm">My Expertise</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical expertise and the tools I use to build
            amazing web experiences
          </p>
        </motion.div>

        <div className="space-y-20">
          {skills.map((category, categoryIdx) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 * categoryIdx }}
                className="text-2xl font-semibold text-gray-800 mb-8"
              >
                {category.category}
              </motion.h3>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                  hidden: {
                    opacity: 0,
                  },
                }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-sky-100/30 hover:border-sky-200/50 transition-all duration-300">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <h3 className="font-medium text-gray-800">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
