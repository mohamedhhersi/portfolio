"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    title: "Flourish",
    description:
      "A habit tracking application that helps users monitor their wellness and achieve their goals with comprehensive tracking features.",
    image: "/flourish.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Library Platform",
    description:
      "An online library platform built with modern web technologies, featuring a clean and accessible interface for browsing and managing books.",
    image: "/library.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "https://ecommlibraryapp.netlify.app/",
    githubLink: "#",
  },
  {
    title: "YouTube Clone",
    description:
      "A fully responsive YouTube clone focused on educational content, featuring video categorization and a dark theme interface.",
    image: "/youtubeclone.png",
    tech: ["React", "Node.js", "Tailwind CSS"],
    liveLink: "https://yt-cloneapp.netlify.app/",
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
      id="projects"
      ref={ref}
      className="min-h-screen pt-5 pb-20 flex items-center"
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
              <div className="aspect-video w-full relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
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
