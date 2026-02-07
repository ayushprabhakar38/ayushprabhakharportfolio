import { motion } from 'motion/react';
import devopsImage from '../../assets/devops.png';

export function AboutSection() {
  const aboutPoints = [
    'Strong focus on DevOps practices & tools',
    'Interested in cloud infrastructure and automation',
    'Enjoy solving real-world problems using automation',
    'Continuously learning and improving'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            About Me
          </h2>

          <div className="neuro-section">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="neuro-text mb-6" style={{ fontSize: '1.1rem' }}>
                  Hi, I'm Ayush Prabhakar.
                </p>
                <p className="neuro-text mb-6" style={{ fontSize: '1.1rem' }}>
                  I'm a DevOps-focused professional passionate about building, automating, 
                  and scaling reliable systems. I enjoy working at the intersection of 
                  development and operations, where code meets infrastructure.
                </p>

                <div className="space-y-3 mt-8">
                  <h3 
                    className="neuro-heading mb-4"
                    style={{ fontSize: '1.5rem', fontWeight: 600 }}
                  >
                    More About Me:
                  </h3>
                  {aboutPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="neuro-icon w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                      <p className="neuro-text" style={{ fontSize: '1rem' }}>
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="neuro-card p-8"
                >
                  <img 
                    src={devopsImage} 
                    alt="DevOps Professional" 
                    className="w-full h-auto max-w-sm"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
