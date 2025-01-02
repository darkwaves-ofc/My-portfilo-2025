"use client";

import { motion } from 'framer-motion';
import { AboutHero } from './about-hero';
import { AboutStats } from './about-stats';
import { AboutFeatures } from './about-features';
import { AboutTimeline } from './about-timeline';

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Dynamic background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.2),transparent_50%)]"
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <AboutHero />
        <AboutStats />
        <AboutFeatures />
        <AboutTimeline />
      </div>
    </section>
  );
}