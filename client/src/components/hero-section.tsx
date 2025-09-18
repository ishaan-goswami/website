import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

export default function HeroSection() {
  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-24 pb-24 px-6"
      data-testid="hero-section"
    >
      {/* Animated gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center gap-10 text-center max-w-3xl">
        {/* Headshot with glowing ring */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-pink-400 shadow-2xl">
            <img
              src="/website/Headshot.jpg"
              alt="My headshot"
              className="w-full h-full rounded-full object-cover border-4 border-black"
            />
          </div>
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">{personalInfo.title}</p>
          <p className="text-lg opacity-80 mb-8">{personalInfo.biography}</p>

          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
