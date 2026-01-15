import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shubham.dev — Cloud & DevOps Engineer
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Shu40"
            target="_blank"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/shubham-kumar-746455339"
            target="_blank"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
