import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Mohamed Hersi | Software Developer",
  description:
    "Software Developer portfolio showcasing projects and skills in React, Next.js, and modern web development.",
  keywords: [
    "Software Developer",
    "React",
    "Next.js",
    "Web Development",
    "Portfolio",
    "Mohamed Hersi",
  ],
  authors: [{ name: "Mohamed Hersi" }],
  robots: "index, follow",
  icon: null,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          as="style"
        />

        {/* Load fonts after preload */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="overflow-x-hidden">
        <ModalProvider>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
