import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';

export function EducationSection() {
  const education = [
    { 
      period: '2023 – 2026',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'GNIOT, Greater Noida',
      icon: GraduationCap
    },
    {
      period: '2022',
      degree: '12th Grade – Completed',
      institution: 'Strong foundation in Computer Science & Mathematics',
      icon: BookOpen
    },
    {
      period: '2020',
      degree: '10th Grade – Completed',
      institution: '',
      icon: BookOpen
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
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
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="neuro-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="neuro-icon w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" style={{ color: 'var(--neuro-accent)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 
                          className="neuro-heading"
                          style={{ fontSize: '1.3rem', fontWeight: 600 }}
                        >
                          {edu.degree}
                        </h3>
                        <span 
                          className="neuro-inset px-4 py-1 inline-block"
                          style={{ fontSize: '0.9rem', color: 'var(--neuro-text)' }}
                        >
                          {edu.period}
                        </span>
                      </div>
                      {edu.institution && (
                        <p className="neuro-text" style={{ fontSize: '1rem' }}>
                          {edu.institution}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
