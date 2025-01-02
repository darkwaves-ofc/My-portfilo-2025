"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Interested in working together? Let's connect and discuss your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[150px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-5 w-5" />
                    <span>github.com/rishmika</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/rishmika</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span>twitter.com/rishmika</span>
                  </a>
                  <a href="mailto:contact@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>contact@example.com</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}