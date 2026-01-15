import { motion } from "framer-motion";

const experiences = [
    {
    role: "Python Intern",
    company: "YBI",
    time: "Jan 2025 – Mar 2025",
    desc: "Developed scripts to automate data extraction and processing tasks, improving efficiency by 30%."
  },
  {
    role: "Cybersecurity Intern",
    company: "Hacktify Cyber Security LLP",
    time: "Feb 2025 – Mar 2025",
    desc: "Performed Web Application VAPT on DVWA & OWASP Juice Shop. Identified SQLi, XSS and insecure authentication issues."
  },
  {
    role: "Cloud & DevOps Learner",
    company: "Self / Labs",
    time: "2024 – Present",
    desc: "Hands-on with AWS,Azure, Docker, Kubernetes, CI/CD pipelines, Linux and cloud security fundamentals."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">
          Experience
        </h2>

        <div className="border-l border-white/20 pl-6 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold">
                {exp.role}
              </h3>
              <p className="text-sm text-accent">
                {exp.company}
              </p>
              <p className="text-xs text-gray-400">
                {exp.time}
              </p>
              <p className="text-gray-400 mt-2 max-w-2xl">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
