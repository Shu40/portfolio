import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]" />

      {/* Floating blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ x: [0, 200, 0], y: [0, 150, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        style={{ top: "10%", left: "5%" }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -200, 0], y: [0, -150, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
        style={{ bottom: "10%", right: "5%" }}
      />
    </div>
  );
};

export default AnimatedBackground;
