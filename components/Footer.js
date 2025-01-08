"use client";
import { useModal } from "@/context/ModalContext";
import ContactModal from "./ContactModal";

const Footer = () => {
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <>
      <footer className="w-full py-5 mt-20 bg-gradient-to-b from-transparent to-white/90 backdrop-blur-sm border-t border-sky-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-lg font-medium px-4 py-2 rounded-lg hover:bg-sky-50/50 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-lg font-medium px-4 py-2 rounded-lg hover:bg-sky-50/50 transition-all duration-300"
              >
                LinkedIn
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-lg font-medium px-4 py-2 rounded-lg hover:bg-sky-50/50 transition-all duration-300"
              >
                Contact
              </button>
            </div>

            <div className="text-gray-500 text-base">© 2025 Mohamed Hersi</div>
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
