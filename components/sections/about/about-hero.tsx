"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          About Me
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        I'm a passionate creator at the intersection of design and development, crafting digital experiences 
        that leave lasting impressions. With a focus on innovation and user experience, I bring ideas to life 
        through clean code and stunning visuals.
      </p>
    </motion.div>
  );
}