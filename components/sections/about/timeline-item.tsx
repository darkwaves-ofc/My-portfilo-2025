"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-0"
    >
      <div className="hidden md:block absolute top-5 left-[calc(50%-0.5px)] w-[1px] h-full bg-gradient-to-b from-primary/50 to-transparent" />
      <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
        <div className="flex-1 md:text-right">
          <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
              {year}
            </span>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </Card>
        </div>
        <div className="hidden md:flex items-center justify-center w-16">
          <div className="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
        </div>
        <div className="flex-1" />
      </div>
    </motion.div>
  );
}