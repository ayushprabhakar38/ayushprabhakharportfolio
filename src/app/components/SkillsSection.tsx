import { motion } from 'motion/react';

interface SkillCategory {
  title: string;
  icon: string;
  skills: Array<{
    name: string;
    url: string;
  }>;
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: '☁️ Cloud & Infrastructure',
      icon: '☁️',
      skills: [
        { name: 'AWS', url: 'https://skillicons.dev/icons?i=aws' }
      ]
    },
    {
      title: '🐳 Containers & Orchestration',
      icon: '🐳',
      skills: [
        { name: 'Docker', url: 'https://skillicons.dev/icons?i=docker' },
        { name: 'Kubernetes', url: 'https://skillicons.dev/icons?i=kubernetes' },
        { name: 'Helm', url: 'https://icon.icepanel.io/Technology/png-shadow-512/Helm.png' },
        { name: 'Argo CD', url: 'https://icon.icepanel.io/Technology/svg/Argo-CD.svg' }
      ]
    },
    {
      title: '🔁 CI/CD & Automation',
      icon: '🔁',
      skills: [
        { name: 'GitHub Actions', url: 'https://skillicons.dev/icons?i=githubactions' },
        { name: 'Jenkins', url: 'https://skillicons.dev/icons?i=jenkins' },
        { name: 'GitLab CI', url: 'https://skillicons.dev/icons?i=gitlab' },
        { name: 'GitHub', url: 'https://skillicons.dev/icons?i=github' }
      ]
    },
    {
      title: '📊 Observability & Monitoring',
      icon: '📊',
      skills: [
        { name: 'Prometheus', url: 'https://skillicons.dev/icons?i=prometheus' },
        { name: 'Grafana', url: 'https://skillicons.dev/icons?i=grafana' },
        { name: 'Elasticsearch', url: 'https://skillicons.dev/icons?i=elasticsearch' },
        { name: 'Fluentd', url: 'https://cdn.simpleicons.org/fluentd/0B5FFF' }
      ]
    },
    {
      title: '🔐 Security & DevSecOps',
      icon: '🔐',
      skills: [
        { name: 'Trivy', url: 'https://avatars.githubusercontent.com/u/49598846?s=200&v=4' },
        { name: 'SonarQube', url: 'https://icon.icepanel.io/Technology/svg/SonarQube.svg' },
        { name: 'HashiCorp Vault', url: 'https://icon.icepanel.io/Technology/svg/HashiCorp-Vault.svg' }
      ]
    },
    {
      title: '🗄️ Version Control & Collaboration',
      icon: '🗄️',
      skills: [
        { name: 'Git', url: 'https://skillicons.dev/icons?i=git' },
        { name: 'GitHub', url: 'https://skillicons.dev/icons?i=github' },
        { name: 'GitLab', url: 'https://skillicons.dev/icons?i=gitlab' }
      ]
    },
    {
      title: '🖥️ Scripting & OS',
      icon: '🖥️',
      skills: [
        { name: 'Python', url: 'https://skillicons.dev/icons?i=python' },
        { name: 'Bash', url: 'https://skillicons.dev/icons?i=bash' },
        { name: 'Linux', url: 'https://skillicons.dev/icons?i=linux' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
            DevOps Toolchain
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="neuro-section"
              >
                <h3 
                  className="neuro-heading mb-6"
                  style={{ fontSize: '1.5rem', fontWeight: 600 }}
                >
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                      className="neuro-skill-card flex flex-col items-center justify-center gap-3"
                    >
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={skill.url}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p 
                        className="neuro-text text-center"
                        style={{ fontSize: '0.9rem' }}
                      >
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}