import { motion } from 'motion/react';
import { Github, Gamepad2, Heart, Wallet, HelpCircle, ListTodo, Key, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projectImageGlob = import.meta.glob<string>('/src/assets/projects/*', {
  query: '?url',
  import: 'default',
  eager: true
}) as Record<string, string>;

function normalizeForMatch(s: string): string {
  return s
    .toLowerCase()
    .replace(/[\s\-_()]/g, '')
    .replace(/gui/g, '')
    .replace(/todo/g, '')
    .replace(/todos/g, '');
}

function getProjectImage(title: string): string | undefined {
  const normalizedTitle = normalizeForMatch(title);
  if (normalizedTitle.length === 0) return undefined;

  const entries = Object.entries(projectImageGlob);
  for (const [path, url] of entries) {
    const filename = path.replace(/^.*[/\\]/, '').replace(/\.[^.]+$/, '');
    const normalizedFile = normalizeForMatch(filename);
    if (normalizedFile.length === 0) continue;
    if (
      normalizedTitle.includes(normalizedFile) ||
      normalizedFile.includes(normalizedTitle) ||
      normalizedTitle === normalizedFile
    ) {
      return url;
    }
  }
  if (entries.length > 0) {
    console.warn(`Project image missing for: "${title}"`);
  }
  return undefined;
}

export function ProjectsSection() {
  const projects = [
    {
      icon: Gamepad2,
      title: 'Flappy Bird Game',
      description:
        'A recreation of the classic Flappy Bird game built entirely in pure Python. Features include smooth gameplay mechanics, collision detection, and score tracking.',
      tech: 'Python',
      github: 'https://github.com/ayushprabhakar38/flappybirdgame',
      image: getProjectImage('Flappy Bird Game')
    },
    {
      icon: Heart,
      title: 'Love Calculator',
      description:
        'A fun interactive love calculator application built with pure Python. Enter two names and get a compatibility score with engaging visual feedback.',
      tech: 'Python',
      github: 'https://github.com/ayushprabhakar38/lovecalculator',
      image: getProjectImage('Love Calculator')
    },
    {
      icon: Wallet,
      title: 'Personal Expense Manager (GUI)',
      description:
        'A professional desktop expense tracking application built with Python and Tkinter. It allows users to manage spending, organize categories, and search records instantly. Includes automatic JSON storage and visual analytics charts for smarter financial tracking.',
      tech: 'Python, Tkinter, JSON, Matplotlib',
      github: 'https://github.com/ayushprabhakar38/Python-Personal-Expense-Manager-GUI-',
      image: getProjectImage('Personal Expense Manager (GUI)')
    },
    {
      icon: HelpCircle,
      title: 'Quiz Game (GUI)',
      description:
        'An interactive quiz application featuring a clean GUI, countdown timer, and randomized questions. Tracks scores in real time and highlights correct and wrong answers automatically. Questions are stored in JSON and generated safely even if the file is missing.',
      tech: 'Python, Tkinter, JSON',
      github: 'https://github.com/ayushprabhakar38/Python-Quiz-Game-GUI-',
      image: getProjectImage('Quiz Game (GUI)')
    },
    {
      icon: ListTodo,
      title: 'Productivity Manager (To-Do GUI)',
      description:
        'A structured desktop productivity manager designed for organizing daily tasks efficiently. Users can set priorities, due dates, timestamps, and instantly search through tasks. All data is permanently stored in JSON and loads automatically at startup.',
      tech: 'Python, Tkinter, JSON',
      github: 'https://github.com/ayushprabhakar38/Python-Productivity-Manager-Tkinter-GUI-',
      image: getProjectImage('Productivity Manager (To-Do GUI)')
    },
    {
      icon: Key,
      title: 'Smart CLI Password Generator',
      description:
        'A command-line password generator that creates strong yet memorable passwords. Transforms user-provided words using smart substitutions, random capitalization, and symbols. Built fully with Python standard libraries and includes input validation for secure generation.',
      tech: 'Python (Standard Library)',
      github: 'https://github.com/ayushprabhakar38/passwordgenerator',
      image: getProjectImage('Smart CLI Password Generator')
    },
    {
      icon: Globe,
      title: 'This Portfolio',
      description:
        'A modern personal portfolio website showcasing projects, skills, and contact information. Built with React, TypeScript, and Vite for a fast and responsive experience.',
      tech: 'React, TypeScript, Vite',
      github: 'https://github.com/ayushprabhakar38/ayushprabhakharportfolio',
      image: getProjectImage('This Portfolio')
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
                  className="neuro-card overflow-hidden flex flex-col h-full p-0"
                >
                  <div className="w-full aspect-video min-h-[180px] flex-shrink-0 overflow-hidden bg-[var(--neuro-bg)]">
                    {project.image ? (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full neuro-icon flex items-center justify-center">
                        <Icon className="w-16 h-16" style={{ color: 'var(--neuro-accent)' }} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3
                      className="neuro-heading mb-2"
                      style={{ fontSize: '1.3rem', fontWeight: 600 }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="neuro-inset px-3 py-1 inline-block text-xs mb-4 w-fit"
                      style={{ color: 'var(--neuro-text)' }}
                    >
                      {project.tech}
                    </span>
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
