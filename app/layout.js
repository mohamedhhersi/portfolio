import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Your Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <ModalProvider>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
