import { motion } from "framer-motion";


export const AnimatedBanner = () => {
    return (
        <motion.div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(234,179,8,0.5), rgba(34,197,94,0.5), rgba(59,130,246,0.5), rgba(168,85,247,0.5))' }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.2
        }}
      />
    );
  };