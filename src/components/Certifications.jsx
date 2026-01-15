import { useState } from "react";
import { motion } from "framer-motion";
import { FaAws, FaCertificate, FaCloud } from "react-icons/fa";
import CertificateModal from "./CertificateModal";

const certifications = [
  {
    title: "AWS Cloud Practitioner (Preparing)",
    org: "Amazon Web Services",
    year: "2025",
    icon: <FaAws />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  
  {
    title: "Cybersecurity fundamentals",
    org: "Hacktify and Quick-heal",
    year: "2025",
    icon: <FaCertificate />,
    file: "/cert-hacktify.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "AWS Certified",
    org: "Quick-Heal & AWS Educate",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "AWS Administrator",
    org: "LinkedIn Learning",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Linux Certified",
    org: "Linux Foundation and Quick-Heal",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Site Reliability Engineering",
    org: "DataDog",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Security Awareness Training",
    org: "ISEA",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Continuous Delivery and GitOps",
    org: "Harness",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Scurity Analyst Programme",
    org: "Reliance foundation",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Verizon Communication Cloud Plateform Job Simulation",
    org: "Forage",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Computer Networking and Security",
    org: "Quick-Heal & Saylor Academy",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "Java Programming",
    org: "Hcaker Rank",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
  {
    title: "IOT Fundamentals",
    org: "Cisco Networking Academy",
    year: "2024-25",
    icon: <FaCloud />,
    file: "/cert-aws.pdf",
    verify: "https://www.linkedin.com/in/shubham-kumar-746455339",
  },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const openCert = (cert) => {
    setCurrent(cert);
    setOpen(true);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl"
            >
              <div className="text-4xl text-accent mb-4">
                {cert.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-400">
                {cert.org}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {cert.year}
              </p>

              <div className="flex gap-4 mt-4 text-sm">
                <button
                  onClick={() => openCert(cert)}
                  className="text-accent hover:underline"
                >
                  View
                </button>

                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {current && (
        <CertificateModal
          open={open}
          onClose={() => setOpen(false)}
          src={current.file}
          title={current.title}
        />
      )}
    </section>
  );
};

export default Certifications;
