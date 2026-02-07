import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { FocusAreasSection } from './components/FocusAreasSection';
import { ProjectsSection } from './components/ProjectsSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--neuro-bg)' }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <FocusAreasSection />
      <ProjectsSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}