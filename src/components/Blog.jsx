import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const blogs = [
  {
    title: "How I Built Secure AWS Infrastructure",
    desc: "Hands-on experience designing VPC, EC2, IAM and monitoring.",
    link: "https://yourname.hashnode.dev/aws-cloud-infra",
  },
  {
    title: "DevOps CI/CD Pipeline – Real World",
    desc: "Docker + GitHub Actions pipeline with deployment strategy.",
    link: "https://yourname.hashnode.dev/devops-cicd",
  },
  {
    title: "Web Application VAPT – Practical Findings",
    desc: "SQL Injection, XSS and insecure authentication vulnerabilities.",
    link: "https://yourname.hashnode.dev/vapt-findings",
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">
          Blogs & Write-Ups
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/10 border border-white/10 backdrop-blur rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold">
                {blog.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {blog.desc}
              </p>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent text-sm mt-4 hover:underline"
              >
                Read on Blog <FaExternalLinkAlt />
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="https://yourname.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
