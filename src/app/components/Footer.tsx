import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neuro-inset p-6 text-center"
        >
          <p className="neuro-text" style={{ fontSize: '0.95rem' }}>
            © 2026 Ayush Prabhakar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
