import { motion } from "framer-motion"

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen relative overflow-hidden">

      {/* Background Glow Effects */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">

        <h1 className="text-2xl font-bold text-cyan-400">
          Arjun Kacha
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-6"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-cyan-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Arjun
              <span className="text-cyan-400"> Kacha</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-6 font-semibold">
              IT Student | Flutter Developer
            </h2>

            <p className="text-slate-400 mt-6 leading-7 text-lg">
              Passionate about AI, Cybersecurity, Cloud Computing,
              and building real-world software solutions.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 flex-wrap">

              <a
                href="#projects"
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="https://github.com/arjunkacha"
                target="_blank"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="border border-slate-600 px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Resume
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

              {/* Card */}
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl w-[320px]">

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <pre className="text-sm text-cyan-300 overflow-x-auto">
                  {`const developer = {
  name: "Arjun Kacha",
  skills: [
    "Flutter",
    "AI/ML",
    "Cybersecurity",
    "Cloud"
  ],
  passion: "Building Projects"
}`}
                </pre>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="max-w-6xl mx-auto px-6 py-28"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          About Me
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 leading-8 text-slate-300 text-lg">

          <p>
            I am an IT student passionate about building real-world
            software solutions in AI, Cybersecurity, Flutter
            Development, and Cloud Computing.
          </p>

          <p className="mt-6">
            I enjoy creating modern applications, exploring emerging
            technologies, and continuously improving my technical
            skills through projects and hands-on learning.
          </p>

        </div>

      </motion.section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Languages */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-semibold mb-6">
              Languages
            </h3>

            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "JavaScript", "Dart"].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 px-4 py-2 rounded-xl text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Technologies */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-semibold mb-6">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {["Flutter", "Firebase", "AWS", "Git"].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 px-4 py-2 rounded-xl text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Domains */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-semibold mb-6">
              Domains
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "AI/ML",
                "Cybersecurity",
                "Cloud",
                "Web Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 px-4 py-2 rounded-xl text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400"
          >

            <h3 className="text-2xl font-semibold mb-4">
              SentinelX
            </h3>

            <p className="text-slate-400 leading-7">
              AI-powered threat monitoring system focused on detecting
              suspicious activities and monitoring system security.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "AI", "Cybersecurity"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/arjunkacha"
              target="_blank"
              className="inline-block mt-6 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              View Project
            </a>

          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400"
          >

            <h3 className="text-2xl font-semibold mb-4">
              Intrusion Detection System
            </h3>

            <p className="text-slate-400 leading-7">
              Machine learning-based intrusion detection system for
              identifying and classifying suspicious network traffic.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Machine Learning", "Python", "Security"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/arjunkacha"
              target="_blank"
              className="inline-block mt-6 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              View Project
            </a>

          </motion.div>

          {/* Project 3 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400"
          >

            <h3 className="text-2xl font-semibold mb-4">
              Study Planner App
            </h3>

            <p className="text-slate-400 leading-7">
              Flutter productivity application designed for task
              management, progress tracking, and smart study planning.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Flutter", "Firebase", "Dart"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/arjunkacha"
              target="_blank"
              className="inline-block mt-6 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              View Project
            </a>

          </motion.div>

        </div>

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Contact Me
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

          <p className="text-slate-300 text-lg leading-8">
            I’m always open to discussing projects, internships,
            collaborations, and learning opportunities.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://github.com/arjunkacha"
              target="_blank"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-kacha/"
              target="_blank"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Arjun Kacha. All Rights Reserved.
      </footer>

    </div>
  )
}

export default App