import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 10 },
  { label: "Certifications", value: 20 },
  { label: "Hands-on Labs", value: 100 },
  { label: "Tools Used", value: 15 },
];

const Achievements = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/10 border border-white/10 backdrop-blur rounded-xl p-8"
          >
            <h3 className="text-4xl font-extrabold text-accent">
              {stat.value}+
            </h3>
            <p className="text-gray-400 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
