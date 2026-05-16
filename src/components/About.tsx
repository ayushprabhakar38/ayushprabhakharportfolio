import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="py-16 md:py-24 relative z-10 bg-bg/30 backdrop-blur-md" id="about">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* About Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-bg/40 backdrop-blur-md p-8 md:p-10 rounded-[40px] border border-stroke shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">About Me</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-8 items-start sm:items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 border-2 border-stroke shadow-lg">
                <img src="/profilepic.png" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-2">
                  Hi, I'm <span className="font-display italic text-accent">Ayush Prabhakar.</span>
                </h2>
              </div>
            </div>
            
            <p className="text-base text-text-primary/90 font-light leading-relaxed mb-12">
              I'm a DevOps-focused professional passionate about building, automating, and scaling reliable systems. I enjoy working at the intersection of development and operations, where code meets infrastructure.
            </p>

            <h3 className="text-xl md:text-2xl text-text-primary mb-6">More About Me</h3>
            <ul className="flex flex-col gap-4 text-text-primary/80 font-light list-none">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Strong focus on DevOps practices & tools
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Interested in cloud infrastructure and automation
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Enjoy solving real-world problems using automation
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Continuously learning and improving
              </li>
            </ul>
          </motion.div>

          {/* Education Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-bg/40 backdrop-blur-md p-8 md:p-10 rounded-[40px] border border-stroke shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6 lg:mb-12">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">Education</span>
            </div>

            <div className="flex flex-col gap-10 relative border-l border-stroke/50 pl-6 md:pl-8 ml-2">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-accent border-4 border-bg rounded-full -left-[31px] md:-left-[39px] top-1.5 shadow-[0_0_10px_rgba(137,170,204,0.5)]" />
                <h4 className="text-xl text-text-primary mb-1">Bachelor of Computer Applications (BCA)</h4>
                <div className="text-sm text-accent mb-2 font-medium">2023 – 2026</div>
                <p className="text-text-primary/70 font-light">GNIOT, Greater Noida</p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-stroke border-4 border-bg rounded-full -left-[31px] md:-left-[39px] top-1.5" />
                <h4 className="text-xl text-text-primary mb-1">12th Grade – Completed</h4>
                <div className="text-sm text-accent mb-2 font-medium">2022</div>
                <p className="text-text-primary/70 font-light">Strong foundation in Computer Science & Mathematics</p>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute w-3 h-3 bg-stroke border-4 border-bg rounded-full -left-[31px] md:-left-[39px] top-1.5" />
                <h4 className="text-xl text-text-primary mb-1">10th Grade – Completed</h4>
                <div className="text-sm text-accent mb-2 font-medium">2020</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
