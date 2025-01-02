"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Palette, Lightbulb, Coffee } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Development',
    description: 'Expertise in full-stack development with modern frameworks and technologies.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating stunning visuals and user experiences that captivate and engage.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries with creative solutions and cutting-edge technologies.',
  },
  {
    icon: Coffee,
    title: 'Dedication',
    description: 'Committed to delivering exceptional quality and meeting project goals.',
  },
];

export function AboutFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all duration-300 border-primary/10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}