import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "ML-Based Intrusion Detection System",
      description: "Advanced machine learning system for detecting network intrusions with high accuracy.",
      tech: ["Python", "TensorFlow", "Machine Learning"],
      github: "https://github.com/arjunkacha",
    },
    {
      title: "AI-Powered Resume Screening System",
      description: "Intelligent system that automatically screens and ranks resumes using NLP.",
      tech: ["Python", "NLP", "Flask"],
      github: "https://github.com/arjunkacha",
    },
    {
      title: "Smart Study Planner & Exam Preparation Tracker",
      description: "Adaptive study planning tool with AI-driven exam preparation recommendations.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/arjunkacha",
    },
    {
      title: "Image Generation using cGAN",
      description: "Conditional Generative Adversarial Network for intelligent image synthesis.",
      tech: ["PyTorch", "GAN", "Python"],
      github: "https://github.com/arjunkacha",
    },
    {
      title: "TravelVista",
      description: "Modern travel planning application with real-time recommendations and booking.",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/arjunkacha",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "Dart", "C++", "SQL"],
    },
    {
      category: "AI/ML",
      items: ["TensorFlow", "PyTorch", "NLP", "Machine Learning", "Deep Learning"],
    },
    {
      category: "Mobile Development",
      items: ["Flutter", "React Native", "Dart", "Firebase"],
    },
    {
      category: "Cybersecurity",
      items: ["Network Security", "Cryptography", "Penetration Testing", "SSL/TLS"],
    },
    {
      category: "Cloud & Tools",
      items: ["AWS", "Firebase", "Docker", "Git", "Linux"],
    },
  ];

  // Framer Motion animation configuration
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-[#ffffff] text-[#0f172a] min-h-screen font-sans antialiased selection:bg-[#0ea5e9]/10 selection:text-[#0ea5e9]">
      
      {/* Sticky Premium Navbar */}
      <nav className="fixed top-0 w-full bg-[#ffffff]/80 backdrop-blur-md z-50 border-b border-[#e2e8f0]/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-lg font-bold tracking-tight text-[#0f172a] flex items-center gap-2"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]"></span>
            Arjun Kacha
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#475569]">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#0ea5e9] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold text-white bg-[#0f172a] rounded-full hover:bg-slate-800 shadow-sm transition-all duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#475569] hover:text-[#0f172a] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-b border-[#e2e8f0] px-6 py-6 space-y-4 shadow-lg absolute w-full left-0 top-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#475569] hover:text-[#0ea5e9] transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-[#0f172a] rounded-full hover:bg-slate-800 shadow-sm transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f8fafc]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Tag / Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0ea5e9]/5 rounded-full text-xs font-semibold text-[#0ea5e9] tracking-wide uppercase">
              Portfolio
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0f172a]"
            >
              Arjun Kacha
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-[#0ea5e9] font-semibold tracking-wider uppercase"
            >
              AI • Flutter • Cybersecurity
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto"
            >
              Building intelligent software solutions with AI, mobile development, and cloud technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0f172a] text-white rounded-full font-medium text-sm hover:bg-[#1e293b] shadow-sm hover:shadow-md transition-all duration-200 text-center"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-3.5 border border-[#e2e8f0] bg-white text-[#475569] rounded-full font-medium text-sm hover:text-[#0f172a] hover:bg-[#f8fafc] shadow-xs hover:shadow-sm transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <svg className="w-4 h-4 text-[#475569]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Minimal scroll down indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-[11px] font-medium tracking-widest text-[#475569] uppercase">Scroll</span>
              <svg className="w-4 h-4 text-[#475569]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-5 gap-12 md:gap-16 items-start"
          >
            {/* Header info */}
            <div className="md:col-span-2 space-y-4">
              <motion.div variants={fadeInUp} className="text-xs font-bold tracking-wider uppercase text-[#0ea5e9]">
                About Me
              </motion.div>
              <motion.h2 
                variants={fadeInUp} 
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]"
              >
                IT Student & Software Builder
              </motion.h2>
            </div>

            {/* Description list */}
            <div className="md:col-span-3 space-y-6 text-[#475569] text-base md:text-lg leading-relaxed font-normal">
              <motion.p variants={fadeInUp}>
                I'm an IT student with a strong passion for building intelligent, secure, and user-centric solutions. My focus areas lie at the cross-section of <strong className="font-semibold text-[#0f172a]">Artificial Intelligence</strong>, <strong className="font-semibold text-[#0f172a]">Mobile Development</strong>, and <strong className="font-semibold text-[#0f172a]">Cybersecurity</strong>.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Using Flutter for building fast cross-platform applications and advanced frameworks for AI, I build complete systems that combine sleek design with secure foundations. I love diving deep into cloud architectures and studying robust systems, aiming to deliver software that is highly functional, responsive, and secure.
              </motion.p>

              {/* Minimalist Bento-style Highlights */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-2xs">
                  <span className="block text-2xl font-bold text-[#0f172a]">AI/ML</span>
                  <span className="text-xs text-[#475569] font-medium uppercase tracking-wide">Intelligent Systems</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-2xs">
                  <span className="block text-2xl font-bold text-[#0f172a]">Flutter</span>
                  <span className="text-xs text-[#475569] font-medium uppercase tracking-wide">Mobile Expert</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-2xs">
                  <span className="block text-2xl font-bold text-[#0f172a]">Sec</span>
                  <span className="text-xs text-[#475569] font-medium uppercase tracking-wide">Cybersecurity Focus</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-2xs">
                  <span className="block text-2xl font-bold text-[#0f172a]">Cloud</span>
                  <span className="text-xs text-[#475569] font-medium uppercase tracking-wide">Modern Tools</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-[#f8fafc] border-y border-[#e2e8f0]/60">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <motion.div variants={fadeInUp} className="text-xs font-bold tracking-wider uppercase text-[#0ea5e9]">
                Expertise
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]"
              >
                Skills & Technologies
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-sm md:text-base text-[#475569]"
              >
                Curated technical skillset grouped by core capabilities, reflecting clean implementation methodologies.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-xs hover:shadow-sm transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-base font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[#0ea5e9] rounded-full"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#f8fafc] text-[#475569] text-xs font-medium rounded-lg border border-[#e2e8f0] hover:bg-[#0ea5e9]/5 hover:text-[#0ea5e9] hover:border-[#0ea5e9]/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <motion.div variants={fadeInUp} className="text-xs font-bold tracking-wider uppercase text-[#0ea5e9]">
                Featured Works
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]"
              >
                Projects
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-sm md:text-base text-[#475569]"
              >
                A selective collection of projects demonstrating clean architecture, performance, and security principles.
              </motion.p>
            </div>

            <div className="space-y-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-[#0ea5e9] tracking-wider uppercase">Project 0{idx + 1}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0f172a]">{project.title}</h3>
                      </div>
                      
                      <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-2.5 py-1 bg-[#f8fafc] text-[#475569] text-xs font-medium rounded-md border border-[#e2e8f0]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 md:pt-0 self-start md:self-center">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569] hover:text-[#0f172a] rounded-full text-xs font-semibold shadow-2xs transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#f8fafc] border-t border-[#e2e8f0]/60">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <div className="space-y-4">
              <motion.div variants={fadeInUp} className="text-xs font-bold tracking-wider uppercase text-[#0ea5e9]">
                Get in Touch
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a]"
              >
                Let's Build Something Together
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-sm md:text-base text-[#475569] max-w-xl mx-auto"
              >
                I'm always open to discussing new software development initiatives, AI applications, cybersecurity reviews, or Flutter projects.
              </motion.p>
            </div>

            {/* Elegant Premium Contact Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
            >
              <motion.a
                href="mailto:arjunkacha@example.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0f172a] text-white rounded-full font-semibold text-sm hover:bg-slate-800 shadow-sm transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Me
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/arjun-kacha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569] hover:text-[#0f172a] rounded-full font-semibold text-sm shadow-2xs transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </motion.a>

              <motion.a
                href="https://github.com/arjunkacha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569] hover:text-[#0f172a] rounded-full font-semibold text-sm shadow-2xs transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e2e8f0] px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-[#475569] text-sm">Built with React & Tailwind CSS</p>
          <p className="text-[#475569] text-xs font-medium">© 2026 Arjun Kacha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
