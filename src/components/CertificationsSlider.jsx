import { motion } from "framer-motion";
import { FaAws, FaCertificate } from "react-icons/fa";

const certs = [
  { title: "AWS Cloud Practitioner", icon: <FaAws /> },
  { title: "Cybersecurity Internship", icon: <FaCertificate /> },
  { title: "Cloud Fundamentals", icon: <FaAws /> },
];

const CertificationsSlider = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-8">
          Certifications Highlights
        </h2>

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...certs, ...certs].map((cert, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-white/10 border border-white/10 backdrop-blur rounded-xl p-6 flex items-center gap-4"
            >
              <div className="text-3xl text-accent">{cert.icon}</div>
              <p className="font-semibold">{cert.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSlider;
