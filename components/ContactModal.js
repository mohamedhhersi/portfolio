"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_p7ddlq8",
        "template_3dqrteo",
        event.target,
        "IW_1uBzWKdHTvmtMg"
      );
      setIsSuccess(true);
      event.target.reset(); // Clear the form
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000); // Hide success message after 5 seconds
    } catch (error) {
      alert(
        "The email service is temporarily unavailable. Please contact me directly at mohamedhersidev@gmail.com"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden relative"
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
          </div>
        )}

        {/* Success Overlay */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-green-500/95 backdrop-blur-sm flex items-center justify-center z-10 text-white flex-col gap-4"
          >
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-xl font-medium">Message sent successfully!</p>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row min-h-[600px] md:min-h-[600px]">
          {/* Left Side - About (hidden on mobile) */}
          <div className="hidden md:block p-8 md:p-12 bg-gradient-to-br from-sky-50 to-indigo-50 md:w-5/12 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                About Me
              </h3>
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate web developer with a keen eye for creating
                  elegant solutions and memorable user experiences. My journey
                  in web development started with a curiosity for building
                  things that live on the internet.
                </p>
                <p>
                  With expertise in modern web technologies like React, Next.js,
                  and Tailwind CSS, I focus on building responsive and
                  user-friendly applications that solve real-world problems. I
                  believe in writing clean, maintainable code and staying
                  up-to-date with the latest industry trends.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-sky-100/50"></div>
          </div>

          {/* Right Side - Contact Form (full width on mobile) */}
          <div className="p-8 md:p-12 md:w-7/12 w-full">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Let's have a chat
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" // Updated to match EmailJS template
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to" // Updated to match EmailJS template
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Updated to match EmailJS template
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
