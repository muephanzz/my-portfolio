"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const projects = [
  { title: "E-commerce Website", description: "A modern online store with payment integration.", link: "#" },
  { title: "Portfolio Website", description: "A fully responsive personal portfolio.", link: "#" },
  { title: "Data Visualization App", description: "An interactive dashboard for data analysis.", link: "#" },
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTypingComplete(true);
    }, 2000); // Match the typing animation duration

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 relative">
      
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 bg-gray-900 z-50 p-5 flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">My Portfolio</h1>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 text-3xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-10 text-lg">
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -200 }}
        transition={{ duration: 0.3 }}
        className={`fixed mt-8 left-0 w-64 h-full bg-gray-800 z-40 p-5 space-y-4 md:hidden ${menuOpen ? 'block' : 'hidden'}`}
      >
        <a href="#about" className="text-gray-300 text-xl hover:text-white block" onClick={closeMenu}>About</a>
        <a href="#projects" className="text-gray-300 text-xl hover:text-white block" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="text-gray-300 text-xl hover:text-white block" onClick={closeMenu}>Contact</a>
      </motion.div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={closeMenu}
          className="absolute top-0 left-0 right-0 bottom-0 bg-black z-30"
        />
      )}

      {/* Main Content */}
      <div className={`pt-20 ${menuOpen ? 'pointer-events-none' : ''}`}>
        
        {/* About Section with Background Image */}
        <div className="relative h-screen flex justify-center items-center text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/me.png")' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
          </div>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl mx-auto text-white px-6"
          >
            <h1 className="text-3xl font-bold mb-4 text-white">
            <div style={{height: 90, display:"grid",  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))"}} className={`typewriter-text ${isTypingComplete ? 'typing-finished' : ''}`}>
                Offering strong interpersonal skills andhhhhhhhhh hhhhhhhhhhhh hhhhhhhhh 
                hhhhhhhhhh hhhhhhhh ghhhh ggg iiiiiu
                gggg hhhh diii iiiif kkkfffh kkkk
              </div>
            </h1>
            <div className="flex justify-center">
              <a href="/resume.pdf" download>
                <button className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                  <FaDownload /> Download Resume
                </button>
              </a>
            </div>
          </motion.section>
        </div>

        {/* Typing Effect Styles */}
        <style jsx>{`
          .typewriter-text {
            display: inline-block;
            overflow: hidden;
            border-right: .15em solid #fff;
            margin: 0 auto;
            letter-spacing: .1em;
            animation: typing 2s steps(60) 1s 1 normal both, blinkCaret 0.75s step-end infinite;
          }

          .typing-finished {
            border-color: transparent; /* Remove the caret once typing is finished */
            animation: typing 6s steps(60) 1s 1 normal both;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blinkCaret {
            from, to {
              border-color: transparent;
              height: 30px;
            }
            0% {
              border-color: #fff;
            }
          }
        `}</style>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800 p-5 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-2 inline-block hover:underline">
                View Project →
              </a>
            </motion.div>
          ))}
        </motion.section>

        {/* Contact Section */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400">Connect with me:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="mailto:ephantus@example.com" className="text-gray-300 text-2xl hover:text-white">
              <FaEnvelope />
            </a>
            <a href="https://github.com/ephantus" className="text-gray-300 text-2xl hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ephantus" className="text-gray-300 text-2xl hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Portfolio;
