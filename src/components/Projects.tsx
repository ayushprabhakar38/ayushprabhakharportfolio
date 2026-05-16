import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: "Personal Expense Manager (GUI)",
    tech: "Python, Tkinter, JSON, Matplotlib",
    desc: "A professional desktop expense tracking application built with Python and Tkinter. It allows users to manage spending, organize categories, and search records instantly. Includes automatic JSON storage and visual analytics charts for smarter financial tracking.",
    github: "https://github.com/ayushprabhakar38/Python-Personal-Expense-Manager-GUI-",
    image: "/expense.png",
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[4/3] md:aspect-[16/9]"
  },
  {
    title: "Quiz Game (GUI)",
    tech: "Python, Tkinter, JSON",
    desc: "An interactive quiz application featuring a clean GUI, countdown timer, and randomized questions. Tracks scores in real time and highlights correct and wrong answers automatically. Questions are stored in JSON and generated safely even if the file is missing.",
    github: "https://github.com/ayushprabhakar38/Python-Quiz-Game-GUI-",
    image: "/quiz.png",
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[4/3] md:aspect-[4/5]"
  },
  {
    title: "Productivity Manager (To-Do GUI)",
    tech: "Python, Tkinter, JSON",
    desc: "A structured desktop productivity manager designed for organizing daily tasks efficiently. Users can set priorities, due dates, timestamps, and instantly search through tasks. All data is permanently stored in JSON and loads automatically at startup.",
    github: "https://github.com/ayushprabhakar38/Python-Productivity-Manager-Tkinter-GUI-",
    image: "/to-do.png",
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[4/3] md:aspect-[4/5]"
  },
  {
    title: "Smart CLI Password Generator",
    tech: "Python (Standard Library)",
    desc: "A command-line password generator that creates strong yet memorable passwords. Transforms user-provided words using smart substitutions, random capitalization, and symbols. Built fully with Python standard libraries and includes input validation for secure generation.",
    github: "https://github.com/ayushprabhakar38/passwordgenerator",
    image: "/password-gen.png",
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[4/3] md:aspect-[16/9]"
  }
];

export const Projects = () => {
  return (
    <section className="py-16 md:py-24 border-t border-stroke/50 relative z-10 bg-bg/30 backdrop-blur-md" id="projects">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium bg-bg/50 px-4 py-1 rounded-full backdrop-blur-md">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Featured <span className="font-display italic text-accent">work</span>
            </h2>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`${project.colSpan} ${project.aspectRatio} group relative rounded-3xl overflow-hidden bg-bg/20 backdrop-blur-sm border border-stroke flex flex-col justify-end shadow-xl`}
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-50"
              />

              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 transform transition-transform duration-500 ease-out translate-y-12 group-hover:translate-y-0">
                <h3 className="text-2xl md:text-3xl font-medium text-text-primary mb-2 drop-shadow-md">{project.title}</h3>
                <div className="text-sm text-accent mb-4 font-medium">Tech: {project.tech}</div>
                
                <p className="text-sm text-text-primary/90 mb-6 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm">
                  {project.desc}
                </p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface/80 hover:bg-surface border border-stroke rounded-full text-sm font-medium text-text-primary transition-all hover:scale-105 hover:border-transparent group/btn relative overflow-hidden"
                  >
                    <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-shift z-[-1]" />
                    <div className="absolute inset-[1px] bg-bg rounded-full z-[-1]" />
                    <svg xmlns="http://www.w3.org/-2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
