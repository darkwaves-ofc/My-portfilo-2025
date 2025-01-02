"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Awards Won', value: '10+' },
];

export function AboutStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 text-center backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all duration-300 border-primary/10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}