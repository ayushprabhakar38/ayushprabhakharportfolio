import { motion } from 'motion/react';
import { GitBranch, Cog, Cloud, Users, TrendingUp } from 'lucide-react';

export function FocusAreasSection() {
  const focusAreas = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Design & Optimization',
      description: 'Building and optimizing continuous integration and deployment pipelines for efficient software delivery.'
    },
    {
      icon: Cog,
      title: 'Infrastructure Automation & Scripting',
      description: 'Automating infrastructure provisioning and management using modern tools and scripting languages.'
    },
    {
      icon: Cloud,
      title: 'Cloud Resource Management',
      description: 'Managing and optimizing cloud resources for scalability, reliability, and cost-efficiency.'
    },
    {
      icon: Users,
      title: 'Version Control & Team Collaboration',
      description: 'Implementing best practices for version control and fostering effective team collaboration.'
    },
    {
      icon: TrendingUp,
      title: 'Monitoring, Reliability & Continuous Improvement',
      description: 'Ensuring system reliability through monitoring, observability, and continuous improvement practices.'
    }
  ];

  return (
    <section id="focus" className="py-20 px-4">
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
            DevOps Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="neuro-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="neuro-icon w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7" style={{ color: 'var(--neuro-accent)' }} />
                    </div>
                    <div>
                      <h3 
                        className="neuro-heading mb-2"
                        style={{ fontSize: '1.2rem', fontWeight: 600 }}
                      >
                        {area.title}
                      </h3>
                      <p className="neuro-text" style={{ fontSize: '1rem' }}>
                        {area.description}
                      </p>
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