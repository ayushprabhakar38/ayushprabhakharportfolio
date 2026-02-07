import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Languages } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    { 
      icon: Mail,
      label: 'Email',
      value: 'ayushprabhakar38@gmail.com',
      link: 'mailto:ayushprabhakar38@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ayushprabhakar38',
      link: 'https://github.com/ayushprabhakar38'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ayushprabhakar38',
      link: 'https://linkedin.com/in/ayushprabhakar38'
    }
  ];

  const additionalInfo = [
    {
      icon: Languages,
      label: 'Languages',
      value: 'English, Hindi'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Shahpur Baghoni, Tajpur, Samastipur, Bihar — 848101'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
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
            Get In Touch
          </h2>

          <div className="neuro-section">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 
                  className="neuro-heading mb-6"
                  style={{ fontSize: '1.5rem', fontWeight: 600 }}
                >
                  Contact
                </h3>

                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="neuro-link w-full justify-start"
                    >
                      <div className="neuro-icon w-10 h-10 flex items-center justify-center">
                        <Icon className="w-5 h-5" style={{ color: 'var(--neuro-accent)' }} />
                      </div>
                      <div className="flex-1">
                        <p 
                          className="neuro-text"
                          style={{ fontSize: '0.85rem', opacity: 0.7 }}
                        >
                          {contact.label}
                        </p>
                        <p 
                          className="neuro-heading"
                          style={{ fontSize: '1rem', fontWeight: 500 }}
                        >
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="space-y-6">
                <h3 
                  className="neuro-heading mb-6"
                  style={{ fontSize: '1.5rem', fontWeight: 600 }}
                >
                  Additional Info
                </h3>

                {additionalInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="neuro-card p-4 flex items-start gap-4"
                    >
                      <div className="neuro-icon w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" style={{ color: 'var(--neuro-accent)' }} />
                      </div>
                      <div className="flex-1">
                        <p 
                          className="neuro-text mb-1"
                          style={{ fontSize: '0.85rem', opacity: 0.7 }}
                        >
                          {info.label}
                        </p>
                        <p 
                          className="neuro-heading"
                          style={{ fontSize: '1rem', fontWeight: 500 }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
