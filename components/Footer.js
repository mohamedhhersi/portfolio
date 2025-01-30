"use client";
import { useModal } from "@/context/ModalContext";
import ContactModal from "./ContactModal";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <>
      <footer className="w-full py-12 mt-16 bg-gradient-to-b from-transparent to-white/90 backdrop-blur-sm border-t border-sky-100/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6">
              <a
                href="https://github.com/mohamedhhersi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 hover:bg-sky-50 border border-sky-100/30 hover:border-sky-200/50 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 text-gray-600 group-hover:text-sky-600 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-hersi-786a31268/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 hover:bg-sky-50 border border-sky-100/30 hover:border-sky-200/50 transition-all duration-300"
              >
                <FaLinkedinIn className="w-5 h-5 text-gray-600 group-hover:text-sky-600 transition-colors duration-300" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-10 text-sm">
              <a
                href="#home"
                className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
              >
                Skills
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 pb-4">
              <div className="text-gray-500 text-sm">
                {new Date().getFullYear()} Mohamed Hersi. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Footer;
