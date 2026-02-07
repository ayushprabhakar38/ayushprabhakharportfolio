import { motion } from 'motion/react';

export function QuoteSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="neuro-heading text-center mb-12"
            style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 600 }}
          >
            Developer Quote
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neuro-card p-8 flex justify-center items-center"
          >
            <img
              src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical"
              alt="Developer Quote"
              className="w-full max-w-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}