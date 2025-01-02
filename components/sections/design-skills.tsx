"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { designSkills } from '@/lib/data/design-skills';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Palette, Film, Layers, Sparkles } from 'lucide-react';

const categoryIcons = {
  design: Palette,
  motion: Film,
  other: Layers,
};

export function DesignSkillsSection() {
  const [activeCategory, setActiveCategory] = useState<'design' | 'motion' | 'other'>('design');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="design-skills" className="py-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background to-primary/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
              Design Expertise
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(designSkills) as Array<keyof typeof designSkills>).map((category) => {
              const Icon = categoryIcons[category];
              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className={`capitalize gap-2 transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground scale-105'
                      : 'hover:scale-105'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
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
              {designSkills[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  custom={index}
                  className="group"
                >
                  <Card className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all duration-300 border-primary/10 group-hover:shadow-lg group-hover:shadow-primary/5">
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                          {skill.name}
                        </h3>
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-primary/10"
                      />
                      <motion.div
                        initial={{ width: '0%' }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-transparent"
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}