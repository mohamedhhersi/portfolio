"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of your first project. What it does, what technologies you used, and what you learned.",
    image: "/project1.jpg", // Add your project image path
    tech: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Two",
    description:
      "Description of your second project. Highlight the key features and your role in development.",
    image: "/project2.jpg", // Add your project image path
    tech: ["TypeScript", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Three",
    description:
      "Overview of your third project. What problems did it solve? What was your approach?",
    image: "/project3.jpg", // Add your project image path
    tech: ["React", "AWS", "Python"],
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen pt-28 pb-20 flex items-center"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 mb-4 rounded-full border border-sky-400/30 bg-sky-50/30 backdrop-blur-sm"
          >
            <span className="text-sky-800 text-sm">My Work</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.2 },
                    }
                  : { opacity: 0, y: 20 }
              }
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-sky-100/30 hover:border-sky-200/50 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                {/* Replace with your image component */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-sky-700 bg-sky-50/50 rounded-full border border-sky-100/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium hover:from-sky-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg border border-sky-500/30 hover:border-sky-500/50 bg-sky-50/30 backdrop-blur-sm text-sky-700 font-medium transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
