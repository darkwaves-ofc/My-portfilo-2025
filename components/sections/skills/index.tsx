"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/lib/data/skills';
import { Button } from '@/components/ui/button';
import { SkillCard } from './skill-card';
import { Code, Server, Wrench, Sparkles } from 'lucide-react'; // Changed Tool to Wrench

export function SkillsSection() {
  const categoryIcons = {
    frontend: Code,
    backend: Server,
    tools: Wrench, // Changed Tool to Wrench
  };
    
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'tools'>('frontend');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Technical Skills
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => {
              const Icon = categoryIcons[category];
              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`capitalize gap-2 transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-primary text-primary-foreground scale-105'
                      : 'hover:scale-105'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category}
                </Button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills[activeCategory].map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}