"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

interface SkillCardProps {
  name: string;
  level: number;
  icon?: string;
  delay?: number;
}

export function SkillCard({ name, level, icon, delay = 0 }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card 
        className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all duration-300 border-primary/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {name}
            </h3>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
              {level}%
            </span>
          </div>
          <Progress 
            value={level} 
            className="h-2 bg-primary/10"
          />
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-4"
          />
        </motion.div>
      </Card>
    </motion.div>
  );
}