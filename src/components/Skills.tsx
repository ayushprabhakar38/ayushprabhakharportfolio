import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: "☁️ Cloud & Infrastructure",
    items: ["AWS"]
  },
  {
    category: "🐳 Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Helm", "Argo CD"]
  },
  {
    category: "🔁 CI/CD & Automation",
    items: ["GitHub Actions", "Jenkins", "GitLab CI", "GitHub"]
  },
  {
    category: "📊 Observability & Monitoring",
    items: ["Prometheus", "Grafana", "Elasticsearch", "Fluentd"]
  },
  {
    category: "🔐 Security & DevSecOps",
    items: ["Trivy", "SonarQube", "HashiCorp Vault"]
  },
  {
    category: "🗄️ Version Control & Collaboration",
    items: ["Git", "GitHub", "GitLab"]
  },
  {
    category: "🖥️ Scripting & OS",
    items: ["Python", "Bash", "Linux"]
  }
];

const FOCUS_AREAS = [
  {
    title: "CI/CD Pipeline Design & Optimization",
    desc: "Building and optimizing continuous integration and deployment pipelines for efficient software delivery."
  },
  {
    title: "Infrastructure Automation & Scripting",
    desc: "Automating infrastructure provisioning and management using modern tools and scripting languages."
  },
  {
    title: "Cloud Resource Management",
    desc: "Managing and optimizing cloud resources for scalability, reliability, and cost-efficiency."
  },
  {
    title: "Version Control & Team Collaboration",
    desc: "Implementing best practices for version control and fostering effective team collaboration."
  },
  {
    title: "Monitoring, Reliability & Continuous Improvement",
    desc: "Ensuring system reliability through monitoring, observability, and continuous improvement practices."
  }
];

export const Skills = () => {
  return (
    <section className="py-16 md:py-24 border-t border-stroke/50 relative z-10 bg-bg/30 backdrop-blur-md" id="skills">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        
        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium bg-bg/50 px-4 py-1 rounded-full backdrop-blur-md">Skills / DevOps Toolchain</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bg/40 backdrop-blur-md border border-stroke rounded-3xl p-6 hover:bg-bg/60 transition-colors shadow-lg"
              >
                <h3 className="text-text-primary text-lg font-medium mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span key={item} className="text-sm text-text-primary/90 bg-surface/80 border border-stroke rounded-full px-4 py-1.5 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Focus Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium bg-bg/50 px-4 py-1 rounded-full backdrop-blur-md">DevOps Focus Areas</span>
          </div>

          <div className="flex flex-col gap-6">
            {FOCUS_AREAS.map((area, index) => (
              <motion.div 
                key={area.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 rounded-[32px] bg-bg/40 backdrop-blur-md hover:bg-bg/60 border border-stroke transition-all duration-300 shadow-lg"
              >
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-xl text-text-primary group-hover:text-accent transition-colors font-medium">
                    {area.title}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-base text-text-primary/80 font-light leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
