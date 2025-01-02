import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about/index';
import { SkillsSection } from '@/components/sections/skills';
import { DesignSkillsSection } from '@/components/sections/design-skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <DesignSkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}