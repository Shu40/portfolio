import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerrank,
  SiTryhackme,
} from "react-icons/si";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-accent">Shubham kumar</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#skills" className="hover:text-accent transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-accent transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>

          {/* Resume – PDF OPEN */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline"
          >
            Resume
          </a>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <a
            href="https://github.com/Shu40"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/shubham-kumar-746455339"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/shubhamray_2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.hackerrank.com/jin342183"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <SiHackerrank />
          </a>

          <a
            href="https://tryhackme.com/p/shubham.kumarray"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            <SiTryhackme />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-6 space-y-4">
          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="block"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block"
          >
            Contact
          </a>

          {/* Resume Mobile */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-accent font-semibold"
          >
            Resume
          </a>

          {/* Mobile Socials */}
          <div className="flex gap-4 text-xl pt-4">
            <a href="https://github.com/Shu40" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/shubham-kumar-746455339" target="_blank"><FaLinkedin /></a>
            <a href="https://leetcode.com/u/shubhamray_2004/" target="_blank"><SiLeetcode /></a>
            <a href="https://www.hackerrank.com/jin342183" target="_blank"><SiHackerrank /></a>
            <a href="https://tryhackme.com/p/shubham.kumarray" target="_blank"><SiTryhackme /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
