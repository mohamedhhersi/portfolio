"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", action: () => setIsModalOpen(true) },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3 },
      }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg h-20"
          : "bg-transparent h-24"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className={`flex items-center justify-between h-full py-4`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`font-bold text-gray-800 transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Mohamed Hersi
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={
                    item.action || (() => (window.location.href = item.href))
                  }
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {/* Add mobile menu implementation here */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
