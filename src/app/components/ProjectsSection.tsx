import { motion } from 'motion/react';
import { Github, Gamepad2, Heart } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      icon: Gamepad2,
      title: 'Flappy Bird Game',
      description: 'A recreation of the classic Flappy Bird game built entirely in pure Python. Features include smooth gameplay mechanics, collision detection, and score tracking.',
      tech: 'Python',
      github: 'https://github.com/ayushprabhakar38/flappybirdgame'
    },
    {
      icon: Heart,
      title: 'Love Calculator',
      description: 'A fun interactive love calculator application built with pure Python. Enter two names and get a compatibility score with engaging visual feedback.',
      tech: 'Python',
      github: 'https://github.com/ayushprabhakar38/lovecalculator'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
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
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="neuro-card p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="neuro-icon w-14 h-14 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7" style={{ color: 'var(--neuro-accent)' }} />
                      </div>
                      <div className="flex-1">
                        <h3 
                          className="neuro-heading mb-2"
                          style={{ fontSize: '1.3rem', fontWeight: 600 }}
                        >
                          {project.title}
                        </h3>
                        <span 
                          className="neuro-inset px-3 py-1 inline-block text-xs"
                          style={{ color: 'var(--neuro-text)' }}
                        >
                          {project.tech}
                        </span>
                      </div>
                    </div>
                    
                    <p className="neuro-text mb-4 flex-1" style={{ fontSize: '0.95rem' }}>
                      {project.description}
                    </p>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neuro-button inline-flex items-center gap-2 justify-center px-6 py-3 transition-all hover:scale-[1.02]"
                      style={{ fontSize: '0.95rem' }}
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
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
