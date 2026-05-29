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
    { value: "15+", label: "Projects Built", desc: "Machine Learning, AI, & Analytics platforms" },
    { value: "4", label: "Internships Completed", desc: "Hands-on engineering experience" },
    { value: "5", label: "Top Certifications Earned", desc: "AWS, IBM, & DataCamp validations" },
    { value: "2027", label: "Expected Graduation", desc: "B.Tech IT Candidate at CHARUSAT" },
  ];

  const skillsData = [
    {
      category: "Programming",
      items: ["Python", "Java", "JavaScript", "Dart"],
    },
    {
      category: "Artificial Intelligence",
      items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"],
    },
    {
      category: "Data Analytics",
      items: ["Pandas", "NumPy", "Matplotlib", "Data Visualization", "Excel", "Power BI"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "OpenShift"],
    },
    {
      category: "Cybersecurity",
      items: ["Network Security", "Threat Detection", "Intrusion Detection"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  const catalogProjects = [
    {
      title: "AI-Powered Resume Screening System",
      category: "AI Project",
      description: "An automated intelligent parser that scans candidate resumes, extracts core capabilities, and ranks them against job requirements using NLP models.",
      tech: ["Python", "NLP", "Flask", "Text Analysis"],
      github: "https://github.com/arjunkacha/AI-Powered-Resume-Screening-System.git",
    },
    {
      title: "Smart Study Planner & Exam Preparation Tracker",
      category: "AI Project",
      description: "An adaptive student scheduler and learning tracker that personalizes study guides and reviews exam readiness based on performance diagnostics.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/arjunkacha/Smart-Study-Planner-Exam-Preparation-Tracker-App.git",
    },
    {
      title: "Image Generation using cGAN",
      category: "Machine Learning Project",
      description: "A generative deep learning system using Conditional Generative Adversarial Networks (cGAN) to synthesize rich images based on specified semantic vectors.",
      tech: ["PyTorch", "GAN", "Python", "Computer Vision"],
      github: "https://github.com/arjunkacha/image-to-image-generation-with-cGAN.git",
    },
    {
      title: "TravelVista",
      category: "Data Analytics Project",
      description: "A premium travel planning platform featuring rich data recommendation components, dynamic routing, itinerary synthesis, and real-time database synchronization.",
      tech: ["Flutter", "Dart", "Firebase", "State Management"],
      github: "https://github.com/arjunkacha/TravelVista.git",
    },
  ];

  const certifications = [
    {
      name: "Machine Learning Scientist in Python",
      authority: "DataCamp",
      hours: "85-hour career track",
      skillArea: "Machine Learning & AI"
    },
    {
      name: "AWS Academy Graduate – Cloud Developing",
      authority: "AWS Academy",
      hours: "40-hour program",
      skillArea: "Cloud Computing"
    },
    {
      name: "Machine Learning with Python",
      authority: "IBM Coursera",
      skillArea: "Machine Learning"
    },
    {
      name: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
      authority: "IBM",
      skillArea: "Mobile Development"
    },
    {
      name: "Introduction to Containers with Docker, Kubernetes & OpenShift",
      authority: "IBM",
      skillArea: "Cloud & DevOps"
    }
  ];

  const currentFocus = [
    { title: "Artificial Intelligence", subtitle: "Deep Models", desc: "Developing generative models and predictive architectures." },
    { title: "Data Analytics", subtitle: "Insight Mining", desc: "Synthesizing unstructured complex data into actionable logic." },
    { title: "Cybersecurity", subtitle: "SecOps Intelligence", desc: "Automating security compliance and machine-learned log scanning." },
    { title: "Cloud Computing", subtitle: "Infrastructure", desc: "Architecting serverless, highly-resilient distributed architectures." },
    { title: "Generative AI", subtitle: "Next-Gen LLMs", desc: "Fine-tuning weights, prompt orchestration, and vector data models." },
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
      
      {/* 1. Sticky Glassmorphism Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.015)]" 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group font-semibold text-lg tracking-tight text-[#0F172A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9] transition-transform duration-300 group-hover:scale-125"></span>
            <span>Arjun Kacha</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-[#0F172A] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-full hover:bg-slate-50 transition-all duration-200"
            >
              Download Resume
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
              {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#475569] hover:text-[#0ea5e9]"
                >
                  {item}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-[#0F172A] border border-[#E2E8F0] rounded-full hover:bg-slate-50"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center space-y-6"
          >
            {/* Premium Circular Profile Photo Container */}
            <motion.div 
              variants={fadeIn}
              className="w-44 h-44 md:w-60 md:h-60 rounded-full bg-white border border-[#E2E8F0] shadow-[0_12px_35px_rgba(15,23,42,0.06)] p-2 shrink-0 relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 relative">
                <img
                  src="/profile.png"
                  alt="Arjun Kacha"
                  className="w-full h-full object-cover object-[center_15%] scale-[2.1] origin-[center_15%] transition-transform duration-500 group-hover:scale-[2.2]"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight"
            >
              Arjun Kacha
            </motion.h1>

            {/* Headline */}
            <motion.p 
              variants={fadeIn}
              className="text-xl sm:text-2xl font-semibold text-[#0ea5e9] tracking-tight max-w-2xl"
            >
              Aspiring AI & Data Analytics Professional
            </motion.p>

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

      {/* 3. Apple Bento-style Stats Dashboard Section */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-[24px] p-6 border border-[#E2E8F0] shadow-[0_2px_15px_rgba(0,0,0,0.01)] flex flex-col justify-between space-y-4 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#0F172A]">
                  {stat.value}
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-[#0F172A]">{stat.label}</div>
                  <div className="text-xs text-[#475569] font-normal leading-normal">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-white">
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
                Background
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                About Me
              </motion.h2>
            </div>

            {/* Apple style full-width overview card */}
            <motion.div 
              variants={fadeIn}
              className="bg-[#F8FAFC] rounded-[32px] p-8 md:p-14 border border-[#E2E8F0] shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-8"
            >
              <p className="text-lg md:text-[21px] text-[#475569] leading-relaxed font-light">
                I'm an <strong className="font-semibold text-[#0F172A]">Information Technology</strong> student at <strong className="font-semibold text-[#0F172A]">CHARUSAT</strong> with solid training in Artificial Intelligence, Data Analytics, Cloud Development, and secure mobile application design.
              </p>
              
              <div className="h-[1px] bg-[#E2E8F0]/60"></div>

              <p className="text-base md:text-lg text-[#475569] leading-relaxed font-normal">
                Combining a rigorous IT academic foundation with extensive professional certifications—including <strong className="font-semibold text-[#0F172A]">DataCamp Machine Learning Science</strong> and <strong className="font-semibold text-[#0F172A]">AWS Cloud Developing</strong> pipelines—I specialize in translating predictive algorithms into robust cloud setups. With expertise in containerized services via <strong className="font-semibold text-[#0F172A]">Docker & Kubernetes</strong>, secure native <strong className="font-semibold text-[#0F172A]">Flutter Mobile</strong> engineering, and structural log threat diagnostics, I engineer solutions designed to scale, solve real-world problems, and perform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E2E8F0]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]"></span>
                  <span className="text-sm font-semibold text-[#0F172A]">B.Tech IT Candidate (2027)</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E2E8F0]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]"></span>
                  <span className="text-sm font-semibold text-[#0F172A]">Charotar University (CHARUSAT)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Skills Section */}
      <section id="skills" className="py-24 md:py-32 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]/80">
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
                  className="bg-white rounded-[24px] p-7 border border-[#E2E8F0] shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col justify-between"
                  variants={fadeIn}
                  whileHover={{ y: -3 }}
                >
                  <div className="space-y-4">
                    <div className="h-1.5 w-8 bg-[#0EA5E9] rounded-full"></div>
                    <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F8FAFC] text-[#475569] text-xs font-bold rounded-lg border border-[#E2E8F0]"
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

      {/* 6. Featured Project Spotlight (ML-IDS) */}
      <section className="py-24 md:py-32 px-6 bg-white">
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
                Flagship Project
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Featured Release
              </motion.h2>
            </div>

            {/* Apple Product Card Layout */}
            <motion.div 
              variants={fadeIn}
              className="bg-[#F8FAFC] rounded-[36px] border border-[#E2E8F0] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.015)]"
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
                    Machine learning-based system for identifying and classifying suspicious network activities. Automatically inspects incoming network streams, detects anomalies, and classifies them into structured threat definitions with high precision.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Python", "Machine Learning", "Cybersecurity"].map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-[#E2E8F0] text-xs font-bold rounded-lg text-[#475569]">
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
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0F172A] text-white hover:bg-slate-800 rounded-full text-xs font-bold transition-all duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>

                {/* Specs sidebar */}
                <div className="bg-[#0F172A] md:col-span-5 h-full min-h-[300px] flex flex-col justify-center p-8 sm:p-12 text-white border-t md:border-t-0 md:border-l border-slate-800">
                  <div className="space-y-6">
                    <div className="text-[#0ea5e9] text-xs font-extrabold uppercase tracking-widest">
                      Specifications
                    </div>
                    
                    <div className="space-y-4">
                      <div className="pb-4 border-b border-slate-800">
                        <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Focus Area</div>
                        <div className="text-lg font-semibold text-slate-100">Cybersecurity</div>
                      </div>
                      <div className="pb-4 border-b border-slate-800">
                        <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Classification</div>
                        <div className="text-lg font-semibold text-slate-100">Intrusion Anomaly Models</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Language</div>
                        <div className="text-lg font-semibold text-slate-100">Python Integration</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. General Projects Grid Section */}
      <section id="projects" className="py-24 md:py-32 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]/85">
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
                Works
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Engineering Projects
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {catalogProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-[28px] p-8 md:p-9 border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_45px_rgba(0,0,0,0.025)] transition-all duration-300 flex flex-col justify-between"
                  variants={fadeIn}
                  whileHover={{ y: -4 }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-wider">Project 0{idx + 1}</span>
                      <span className="px-2.5 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-bold text-[#475569] rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight">{project.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed font-normal">{project.description}</p>
                  </div>

                  <div className="space-y-6 pt-8">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 bg-[#F8FAFC] text-[#475569] text-[11px] font-bold rounded-md border border-[#E2E8F0]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="h-[1px] bg-[#E2E8F0]/60"></div>

                    {/* GitHub Button Only */}
                    <div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#475569] hover:text-[#0F172A] rounded-full text-xs font-bold transition-all duration-200"
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

      {/* 8. Certifications Section */}
      <section id="certifications" className="py-24 md:py-32 px-6 bg-white">
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
                Credentials
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Certifications
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i} 
                  className="bg-[#F8FAFC] rounded-[24px] p-6 border border-[#E2E8F0] shadow-[0_2px_15px_rgba(0,0,0,0.005)] flex items-start gap-4 hover:shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-shadow duration-300"
                  variants={fadeIn}
                >
                  <div className="p-2.5 bg-white border border-[#E2E8F0] rounded-xl shrink-0">
                    <svg className="w-5.5 h-5.5 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="space-y-1">
                      <h3 className="text-base font-extrabold text-[#0F172A] tracking-tight leading-snug">{cert.name}</h3>
                      <p className="text-xs text-[#475569] font-semibold">{cert.authority} {cert.hours ? `• ${cert.hours}` : ""}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-white border border-[#E2E8F0] text-[#0EA5E9] uppercase tracking-wider">
                      {cert.skillArea}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Current Focus Section */}
      <section className="py-24 md:py-32 px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]/85">
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
                Radar
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Currently Exploring
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentFocus.map((focus, i) => (
                <motion.div 
                  key={i} 
                  className="bg-white rounded-[24px] p-6 border border-[#E2E8F0] shadow-[0_2px_15px_rgba(0,0,0,0.008)] flex flex-col justify-between space-y-4 hover:shadow-[0_5px_20px_rgba(0,0,0,0.015)] transition-shadow duration-300"
                  variants={fadeIn}
                  whileHover={{ y: -2 }}
                >
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-widest">{focus.subtitle}</div>
                    <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight">{focus.title}</h3>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal">{focus.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Contact Section */}
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
                Inquiries
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                Let's Connect
              </motion.h2>
              <motion.p variants={fadeIn} className="text-base text-[#475569] max-w-xl mx-auto font-normal leading-relaxed">
                I am actively seeking internships, research roles, and collaborative projects. Let's talk about machine learning models, database architecture, or security compliance.
              </motion.p>
            </div>

            {/* Tagline / Subtitle */}
            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E2E8F0] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-xs font-bold text-[#0EA5E9] tracking-wide uppercase"
            >
              AI • Machine Learning • Data Analytics • Cloud
            </motion.div>

            {/* Apple style support hub */}
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

      {/* 11. Stark Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] py-16 px-6">
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
