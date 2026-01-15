import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href="https://github.com/Shu40"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">
              AWS Cloud Infrastructure
            </h3>

            <p className="text-gray-400 mt-2">
              Designed secure AWS infrastructure using VPC, EC2, S3 and IAM.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">AWS</span>
              <span className="px-2 py-1 bg-white/20 rounded">EC2</span>
              <span className="px-2 py-1 bg-white/20 rounded">VPC</span>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <a
                href="https://github.com/Shu40"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">
              DevOps CI/CD Pipeline
            </h3>

            <p className="text-gray-400 mt-2">
              Automated CI/CD pipeline using Docker and GitHub Actions.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">DevOps</span>
              <span className="px-2 py-1 bg-white/20 rounded">Docker</span>
              <span className="px-2 py-1 bg-white/20 rounded">CI/CD</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href="https://github.com/Shu40"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">
              Cloud Infra Scanner
            </h3>

            <p className="text-gray-400 mt-2">
              Scanning the cloud infrastructure for security misconfigurations and unused resources for auto deletion.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">AWS</span>
              <span className="px-2 py-1 bg-white/20 rounded">Python</span>
              <span className="px-2 py-1 bg-white/20 rounded">Mern</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href="https://github.com/Shu40"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">
                Infrastructure as Code with Terraform
            </h3>

            <p className="text-gray-400 mt-2">
                Managing and provisioning cloud resources using Infrastructure as Code with Terraform.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">AWS</span>
              <span className="px-2 py-1 bg-white/20 rounded">Terraform</span>
              <span className="px-2 py-1 bg-white/20 rounded">VPC</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href="https://github.com/Shu40"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">
               CloudSecX
            </h3>

            <p className="text-gray-400 mt-2">
                A comprehensive cloud security platform to monitor and enhance cloud security posture.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">MERN</span>
              <span className="px-2 py-1 bg-white/20 rounded">Cloud</span>
              <span className="px-2 py-1 bg-white/20 rounded">git</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href="https://github.com/Shu40"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">
              Virtual Assistant
            </h3>

            <p className="text-gray-400 mt-2">
               Design and implement a virtual assistant leveraging cloud services for scalability and reliability and collaborate with three team members
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">AWS</span>
              <span className="px-2 py-1 bg-white/20 rounded">UIX</span>
              <span className="px-2 py-1 bg-white/20 rounded">MERN</span>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <a
                href="https://github.com/Shu40"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">
              Static Website Hosting
            </h3>

            <p className="text-gray-400 mt-2">
                Hosted static websites on AWS S3 with custom domain and SSL using Terraform.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">AWS</span>
              <span className="px-2 py-1 bg-white/20 rounded">EC2</span>
              <span className="px-2 py-1 bg-white/20 rounded">HCL</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
