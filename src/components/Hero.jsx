import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import profile from "../assets/profile.jpeg";

const roles = [
  "Cloud Engineer",
  "DevOps Engineer",
  "Python Developer",
  "Cybersecurity Enthusiast",
];

// smooth scroll helper
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // typing animation
  useEffect(() => {
    const current = roles[roleIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setText((p) => p + current[charIndex]);
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [charIndex, roleIndex]);

  /* 🔥 SCROLL FADE-OUT */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const photoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Cloud & <span className="text-accent">DevOps</span><br />
            Engineer
          </h1>

          <p className="mt-5 text-gray-400 max-w-xl">
            I build secure, scalable and automated cloud infrastructure using
            AWS, Docker, Kubernetes and modern DevOps tools.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              View Resume
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        {/* RIGHT PHOTO + EFFECTS */}
        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">

            {/* FLOAT + FADE WRAPPER */}
            <motion.div
              style={{ opacity: photoOpacity, scale: photoScale }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-80 h-80 flex items-center justify-center"
            >
              {/* 🔥 RADIAL GRADIENT BURST */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_65%)] blur-2xl" />

              {/* ROTATING GRADIENT RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-purple-500 to-cyan-400 p-[3px]"
              >
                <div className="w-full h-full rounded-full bg-[#020617]" />
              </motion.div>

              {/* PROFILE IMAGE */}
              <motion.img
                src={profile}
                alt="profile"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-64 h-64 object-cover rounded-full border-4 border-accent z-10"
              />
            </motion.div>

            {/* NAME + DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center"
            >
              <h3 className="text-xl font-bold">Shubham Kumar</h3>

              <p className="mt-1 text-sm text-accent h-5">
                {text}<span className="animate-pulse">|</span>
              </p>

              <p className="text-xs text-gray-500 mt-1">
                B.Tech CSE • Session 2023 – 2027
              </p>

              {/* BADGES */}
              <div className="flex gap-2 justify-center mt-3 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/40">
                  Cloud
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400 border border-purple-400/40">
                  DevOps
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/40">
                  Cybersecurity
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
