import { motion } from "framer-motion";

const CertificateModal = ({ open, onClose, src, title }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#020617] max-w-3xl w-full rounded-xl overflow-hidden border border-white/10"
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        <iframe
          src={src}
          title={title}
          className="w-full h-[70vh]"
        />
      </motion.div>
    </div>
  );
};

export default CertificateModal;
