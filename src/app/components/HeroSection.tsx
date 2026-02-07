import { motion } from 'motion/react';
import profileImage from '../../assets/profilepic.png'; 

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="neuro-card p-12 md:p-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="neuro-card w-64 h-80 md:w-72 md:h-96 overflow-hidden p-1">
              <img 
                src={profileImage} 
                alt="Ayush Prabhakar" 
                className="w-full h-full object-cover object-top rounded-3xl"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="neuro-heading mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, lineHeight: 1.2 }}
          >
            Ayush Prabhakar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="neuro-text mb-8"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}
          >
            DevOps Professional
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="neuro-text max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}
          >
            Building, automating, and scaling reliable systems at the intersection of development and operations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
