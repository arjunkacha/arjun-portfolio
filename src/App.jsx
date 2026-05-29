import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "4", label: "Internships Completed" },
    { value: "10+", label: "Certifications" },
    { value: "2027", label: "B.Tech IT Graduate" },
  ];

  const skillsData = [
    {
      category: "Programming",
      description: "Clean, performant, and object-oriented development.",
      items: ["Python", "Java", "JavaScript", "Dart"],
    },
    {
      category: "AI & Machine Learning",
      description: "Building models that recognize patterns and predict outcomes.",
      items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"],
    },
    {
      category: "Data Analytics",
      description: "Extracting insights and telling stories with data.",
      items: ["Pandas", "NumPy", "Matplotlib", "Excel", "Power BI (Learning)"],
    },
    {
      category: "Cybersecurity",
      description: "Securing systems, analyzing threats, and enforcing integrity.",
      items: ["Network Security", "Threat Detection", "Intrusion Detection"],
    },
    {
      category: "Cloud & Tools",
      description: "Modern environments and industry-standard workflows.",
      items: ["AWS", "Git", "GitHub", "VS Code"],
    },
  ];

  const catalogProjects = [
    {
      title: "ML-Based Intrusion Detection System",
      description: "Advanced machine learning system designed to analyze live network packages, classify traffic, and flag suspicious intrusion activities in real-time.",
      tech: ["Python", "TensorFlow", "Machine Learning", "Network Security"],
      github: "https://github.com/arjunkacha/ML-Based-IDS.git",
    },
    {
      title: "AI-Powered Resume Screening System",
      description: "An automated intelligent parser that scans candidate resumes, extracts core capabilities, and ranks them against job requirements using natural language processing (NLP).",
      tech: ["Python", "NLP", "Flask", "Text Analytics"],
      github: "https://github.com/arjunkacha/AI-Powered-Resume-Screening-System.git",
    },
    {
      title: "Smart Study Planner & Exam Preparation Tracker",
      description: "An adaptive scheduler and student assistance platform that personalizes revision guides and monitors exam readiness based on previous mock performances.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/arjunkacha/Smart-Study-Planner-Exam-Preparation-Tracker-App.git",
    },
    {
      title: "Image Generation using cGAN",
      description: "An intelligent generative deep learning system using Conditional Generative Adversarial Networks (cGAN) to synthesize rich images based on specified attributes.",
      tech: ["PyTorch", "GAN", "Python", "Computer Vision"],
      github: "https://github.com/arjunkacha/image-to-image-generation-with-cGAN.git",
    },
    {
      title: "TravelVista",
      description: "A premium mobile travel planner featuring intuitive UI components, real-time travel alerts, custom itinerary routing, and seamless secure cloud synchronization.",
      tech: ["Flutter", "Dart", "Firebase", "State Management"],
      github: "https://github.com/arjunkacha/TravelVista.git",
    },
  ];

  const certifications = [
    "AWS Cloud Practitioner Essentials",
    "AWS Academy Graduate – Cloud Developing",
    "Flutter & Dart Mobile App Development",
    "Blockchain Foundation Program",
  ];

  const currentFocus = [
    { title: "Artificial Intelligence", desc: "Developing intelligent agents and generative frameworks." },
    { title: "Data Analytics", desc: "Synthesizing complex data streams into clean actionable narratives." },
    { title: "Cybersecurity", desc: "Automating security intelligence, intrusion scanning, and defensive systems." },
    { title: "Cloud Computing", desc: "Architecting serverless, highly-available cloud infrastructures." },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  return (
    <div className="bg-white text-[#0F172A] font-sans antialiased selection:bg-[#0EA5E9]/10 selection:text-[#0EA5E9] min-h-screen">
      
      {/* 1. Header / Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/85 backdrop-blur-md border-b border-[#F1F5F9]/80 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.01)]" 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group font-semibold text-lg tracking-tight text-[#0F172A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9] transition-transform duration-300 group-hover:scale-125"></span>
            <span>Arjun Kacha</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-[#0F172A] rounded-full hover:bg-slate-800 transition-all duration-200"
            >
              Connect
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#475569] hover:text-[#0F172A] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#E2E8F0] shadow-xl px-6 py-8 space-y-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-5">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#475569] hover:text-[#0EA5E9]"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-[#0F172A] rounded-full hover:bg-slate-800"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center space-y-6"
          >
            {/* Profile Photo - Large (160px–220px), Circular, subtle shadow, clean border */}
            <motion.div 
              variants={fadeIn}
              className="w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border border-[#E2E8F0] shadow-[0_8px_30px_rgba(15,23,42,0.03)] bg-white relative group shrink-0"
            >
              <img
                src="/profile.png"
                alt="Arjun Kacha"
                className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A]"
            >
              Arjun Kacha
            </motion.h1>

            {/* Headline */}
            <motion.p 
              variants={fadeIn}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0ea5e9] tracking-tight max-w-2xl"
            >
              Aspiring AI & Data Analytics Professional
            </motion.p>

            {/* Tagline / Subtitle */}
            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E2E8F0] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-xs font-bold text-[#475569] tracking-wide uppercase"
            >
              AI • Data Analytics • Cybersecurity
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={fadeIn}
              className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal"
            >
              Building intelligent systems, extracting insights from data, and solving real-world problems through technology.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0F172A] text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-all duration-200 shadow-sm text-center"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-full font-semibold text-sm transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.01)] inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-[#475569]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span>Download Resume</span>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. Stats Dashboard Section */}
      <section className="py-12 bg-white border-y border-[#F1F5F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center md:text-left space-y-1.5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#0F172A]">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-24 md:py-36 px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-12"
          >
            <div className="space-y-3">
              <motion.span variants={fadeIn} className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">
                Overview
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                About Arjun Kacha
              </motion.h2>
            </div>

            {/* Apple style full-width presentation card */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-[32px] p-8 md:p-14 border border-[#E2E8F0] shadow-[0_10px_35px_rgba(0,0,0,0.015)] space-y-8"
            >
              <p className="text-lg md:text-[21px] text-[#475569] leading-relaxed font-light">
                An <strong className="font-semibold text-[#0F172A]">Information Technology</strong> student at <strong className="font-semibold text-[#0F172A]">CHARUSAT</strong> with deep-rooted interests in Artificial Intelligence, Data Analytics, Cybersecurity, and Cloud Computing.
              </p>
              
              <div className="h-[1px] bg-[#F1F5F9]"></div>

              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                Passionate about building practical software solutions and leveraging data-driven technologies to solve real-world challenges. Whether architecting security intrusion neural engines or optimizing pipeline parameters, my goal is to deliver clean, secure, and state-of-the-art products.
              </p>

              {/* Minimal specs block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-[#F8FAFC] rounded-2xl p-4 border border-[#F1F5F9]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]"></span>
                  <span className="text-sm font-semibold text-[#0F172A]">B.Tech IT Candidate (2027)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] rounded-2xl p-4 border border-[#F1F5F9]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]"></span>
                  <span className="text-sm font-semibold text-[#0F172A]">Charotar University (CHARUSAT)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Featured Project Spotlight (ML-IDS) */}
      <section className="py-24 md:py-36 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-16"
          >
            <div className="text-center space-y-3">
              <motion.span variants={fadeIn} className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">
                Flagship System
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Featured Release
              </motion.h2>
            </div>

            {/* Apple Product Card Layout */}
            <motion.div 
              variants={fadeIn}
              className="bg-[#F8FAFC] rounded-[36px] border border-[#E2E8F0] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-300"
            >
              <div className="grid md:grid-cols-12 items-center">
                {/* Product Text */}
                <div className="p-8 sm:p-12 md:p-16 md:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E2E8F0] rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span>
                    <span className="text-[10px] font-bold text-[#475569] uppercase tracking-widest">Intrusion Engine</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    ML-Based Intrusion Detection System
                  </h3>

                  <p className="text-base text-[#475569] leading-relaxed">
                    A machine learning-based system designed for detecting and classifying suspicious network activities. By scanning massive dataset packets, it targets vulnerabilities, discovers anomalies, and triggers automatic intrusion classification models.
                  </p>

                  {/* Core specs list */}
                  <div className="space-y-3 pt-2">
                    {[
                      "Designed for real-time traffic scanning and packet categorization.",
                      "Powered by deep models for multi-class attack classification.",
                      "Stops suspicious requests dynamically at boundary layers."
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-[#475569]">
                        <svg className="w-5 h-5 text-[#0ea5e9] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Python", "TensorFlow", "Machine Learning", "Network Security"].map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-[#E2E8F0] text-xs font-semibold rounded-lg text-[#475569]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub CTA Button Only */}
                  <div className="pt-4">
                    <a
                      href="https://github.com/arjunkacha/ML-Based-IDS.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#475569] hover:text-[#0F172A] rounded-full text-xs font-bold transition-all duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>Repository on GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Aesthetic Visual specifications sidebar */}
                <div className="bg-[#0F172A] md:col-span-5 h-full min-h-[300px] flex flex-col justify-center p-8 sm:p-12 text-white border-t md:border-t-0 md:border-l border-slate-800">
                  <div className="space-y-6">
                    <div className="text-[#0ea5e9] text-xs font-extrabold uppercase tracking-widest">
                      Specifications
                    </div>
                    
                    <div className="space-y-4">
                      <div className="pb-4 border-b border-slate-800">
                        <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Classification</div>
                        <div className="text-lg font-semibold text-slate-100">Intrusion Anomalies</div>
                      </div>
                      <div className="pb-4 border-b border-slate-800">
                        <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Neural Platform</div>
                        <div className="text-lg font-semibold text-slate-100">TensorFlow Ecosystem</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Implementation</div>
                        <div className="text-lg font-semibold text-slate-100">Python Neural Pipelines</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Refined Skills Grid Section */}
      <section id="skills" className="py-24 md:py-36 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-16"
          >
            <div className="text-center space-y-3">
              <motion.span variants={fadeIn} className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">
                Capabilities
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Technical Skills
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-[24px] p-7 border border-[#E2E8F0] shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between"
                  variants={fadeIn}
                  whileHover={{ y: -3 }}
                >
                  <div className="space-y-4">
                    <div className="h-2 w-8 bg-[#0EA5E9] rounded-full"></div>
                    <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight">{skillGroup.category}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed font-normal">{skillGroup.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#F8FAFC] text-[#475569] text-xs font-semibold rounded-lg border border-[#E2E8F0] transition-colors"
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

      {/* 7. General Projects Catalog */}
      <section id="projects" className="py-24 md:py-36 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-16"
          >
            <div className="text-center space-y-3">
              <motion.span variants={fadeIn} className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">
                Works Portfolio
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Engineering Projects
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {catalogProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-[28px] p-7 md:p-9 border border-[#E2E8F0] shadow-[0_5px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.025)] transition-all duration-300 flex flex-col justify-between"
                  variants={fadeIn}
                  whileHover={{ y: -4 }}
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-wider">Project 0{idx + 1}</span>
                    <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight">{project.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed font-normal">{project.description}</p>
                  </div>

                  <div className="space-y-6 pt-6">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#F8FAFC] text-[#475569] text-[11px] font-semibold rounded-md border border-[#E2E8F0]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="h-[1px] bg-[#F1F5F9]"></div>

                    {/* GitHub Button Only */}
                    <div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#475569] hover:text-[#0F172A] rounded-full text-xs font-bold transition-all duration-200"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>GitHub Repository</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Certifications & Current Focus Dashboard */}
      <section className="py-24 md:py-36 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Certifications Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">Credentials</span>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0F172A]">
                  Certifications
                </h2>
              </div>

              <div className="bg-white rounded-[28px] p-6 md:p-8 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-3.5 items-start py-3 border-b border-[#F1F5F9] last:border-b-0"
                    variants={fadeIn}
                  >
                    <svg className="w-5.5 h-5.5 text-[#0EA5E9] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <div className="text-sm font-semibold text-[#0F172A] leading-snug">{cert}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Current Focus Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">Radar</span>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0F172A]">
                  Currently Exploring
                </h2>
              </div>

              <div className="bg-white rounded-[28px] p-6 md:p-8 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4">
                {currentFocus.map((focus, i) => (
                  <motion.div 
                    key={i} 
                    className="py-3.5 border-b border-[#F1F5F9] last:border-b-0 space-y-1"
                    variants={fadeIn}
                  >
                    <div className="text-sm font-extrabold text-[#0F172A] tracking-tight">{focus.title}</div>
                    <div className="text-xs text-[#475569] leading-relaxed font-normal">{focus.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 9. Contact / Support Section */}
      <section id="contact" className="py-24 md:py-36 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-12"
          >
            <div className="space-y-4">
              <motion.span variants={fadeIn} className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest">
                Support & Inquiries
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                Let's Build Something Together
              </motion.h2>
              <motion.p variants={fadeIn} className="text-base text-[#475569] max-w-xl mx-auto font-normal">
                I am actively seeking internship opportunities, development roles, and academic collaborations. Reach out to discuss artificial intelligence solutions, network defense reviews, or mobile frameworks.
              </motion.p>
            </div>

            {/* Apple style minimal contact hub */}
            <motion.div 
              variants={fadeIn}
              className="bg-[#F8FAFC] rounded-[32px] p-8 md:p-12 border border-[#E2E8F0] shadow-[0_5px_25px_rgba(0,0,0,0.01)] flex flex-col md:flex-row justify-center items-center gap-6"
            >
              {/* Email */}
              <a
                href="mailto:arjunkacha@gmail.com"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0F172A] text-white rounded-full font-bold text-xs hover:bg-slate-800 transition-all duration-200 shadow-xs"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>arjunkacha@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arjun-kacha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-full font-bold text-xs transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/arjunkacha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-full font-bold text-xs transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub Profile</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. Stark Premium Footer */}
      <footer className="bg-white border-t border-[#F1F5F9] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-sm font-bold text-[#0F172A]">Arjun Kacha</h4>
            <p className="text-xs text-[#475569] font-medium">AI • Data Analytics • Cybersecurity</p>
          </div>

          <div className="text-center md:text-right space-y-1 text-xs text-[#475569]">
            <p>Built with React & Tailwind CSS</p>
            <p className="font-semibold text-[10px] uppercase tracking-wider text-[#94A3B8]">
              © 2026 Arjun Kacha. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
