"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const timeline = [
  {
    year: "2020",
    title: "Started Professional Journey",
    description: "Began my career as a full-stack developer, working on innovative web applications."
  },
  {
    year: "2021",
    title: "Lead Designer",
    description: "Took on the role of lead designer, managing creative projects and brand identities."
  },
  {
    year: "2022",
    title: "Freelance Success",
    description: "Successfully delivered multiple high-impact projects for international clients."
  },
  {
    year: "2023",
    title: "Tech Innovation",
    description: "Led development of cutting-edge web applications using latest technologies."
  }
];

export function AboutTimeline() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        My Journey
      </h3>
      {timeline.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-8 md:pl-0"
        >
          <div className="hidden md:block absolute top-5 left-[calc(50%-0.5px)] w-[1px] h-full bg-gradient-to-b from-primary/50 to-transparent" />
          <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="flex-1 md:text-right">
              <Card className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all duration-300 border-primary/10">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </Card>
            </div>
            <div className="hidden md:flex items-center justify-center w-16">
              <div className="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
            </div>
            <div className="flex-1" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}