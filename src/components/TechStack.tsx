import React from 'react';
import {
  Code,
  Database,
  Globe,
  Layout,
  Smartphone,
  Terminal } from
'lucide-react';
import { ScrollReveal } from './ScrollReveal';
const technologies = [
{
  name: 'PHP',
  icon: Terminal
},
{
  name: 'Laravel',
  icon: Layout
},
{
  name: 'WordPress',
  icon: Globe
},
{
  name: 'Python',
  icon: Code
},
{
  name: 'React',
  icon: Smartphone
},
{
  name: 'SQL',
  icon: Database
}];

function MarqueeItem({ tech }: {tech: (typeof technologies)[number];}) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-6 mx-3 rounded-lg bg-[#0d0d0d] border border-slate-700 min-w-[140px] shrink-0">
      <tech.icon className="w-8 h-8 text-slate-300 mb-3" />
      <span className="text-sm font-mono text-slate-300">{tech.name}</span>
    </div>);

}
export function TechStack() {
  // Triple the list for seamless looping
  const marqueeItems = [...technologies, ...technologies, ...technologies];
  return (
    <section
      id="tech-stack"
      className="py-20 border-y border-slate-800 bg-[#060606] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-2xl font-bold text-white mb-4 md:mb-0 font-mono">
              <span className="text-[#00FF88] mr-2">$</span>cat tech-stack.json
            </h3>
            <p className="text-slate-400 text-sm font-mono">
              --status=active --mode=production
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060606] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060606] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {marqueeItems.map((tech, index) =>
          <MarqueeItem key={`${tech.name}-${index}`} tech={tech} />
          )}
        </div>
      </div>
    </section>);

}