import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";

const skills = [
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="text-4xl text-accent">
                {skill.icon}
              </div>
              <p className="text-sm font-semibold">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
