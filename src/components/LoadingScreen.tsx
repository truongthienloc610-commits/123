import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#121212] transition-colors duration-300"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="flex flex-col items-center"
      >
        <svg width="100" height="60" viewBox="0 0 100 60" className="text-[#00979C] mb-6 drop-shadow-lg">
          <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="8" />
          <circle cx="70" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="8" />
          <rect x="18" y="27" width="24" height="6" fill="currentColor" />
          <rect x="58" y="27" width="24" height="6" fill="currentColor" />
          <rect x="67" y="18" width="6" height="24" fill="currentColor" />
        </svg>
        
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-[#00979C]"
              animate={{
                y: ["0%", "-50%", "0%"],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
