import React from 'react';
import { ScrollReveal } from './ScrollReveal';
const steps = [
{
  id: 1,
  command: 'step-1: discovery',
  description:
  'Analyzing requirements and business goals to chart the perfect course.'
},
{
  id: 2,
  command: 'step-2: architecture',
  description:
  'Designing scalable systems and selecting the right tech stack.'
},
{
  id: 3,
  command: 'step-3: development',
  description:
  'Agile coding with rigorous testing for clean, efficient code.'
},
{
  id: 4,
  command: 'step-4: deployment',
  description: 'Seamless launch with continuous monitoring and support.'
}];

export function ProcessRoadmap() {
  return (
    <section
      id="process"
      className="py-24 bg-[#060606] relative overflow-hidden border-b border-slate-800">

      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FF88] mr-2">&gt;</span>
              ./execute-roadmap.sh
            </h2>
            <p className="text-slate-400 font-mono text-sm">
              Initializing process sequence...
            </p>
          </div>
        </ScrollReveal>

        <div className="relative border-l-2 border-dashed border-[#00FF88]/40 ml-4 md:ml-0 pl-8 md:pl-12 space-y-12">
          {steps.map((step, index) =>
          <ScrollReveal
            key={step.id}
            delay={index * 120}
            direction="left"
            distance={25}>

              <div className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 bg-black border-2 border-[#00FF88] rounded-full group-hover:bg-[#00FF88] transition-colors duration-300 shadow-[0_0_8px_rgba(0,255,136,0.3)]"></div>

                <div className="flex flex-col items-start">
                  <div className="font-mono text-lg md:text-xl text-white mb-2 group-hover:text-[#00FF88] transition-colors">
                    <span className="text-[#00FF88] mr-2">$</span>
                    {step.command}
                  </div>
                  <div className="bg-[#111] border border-slate-600 p-4 rounded w-full md:w-auto md:min-w-[500px] text-slate-300 font-sans text-sm leading-relaxed group-hover:border-[#00FF88]/40 transition-colors">
                    <span className="text-slate-400 font-mono block mb-1 text-xs">
                      // Output:
                    </span>
                    {step.description}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* End of process indicator */}
          <ScrollReveal delay={500}>
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 bg-[#00FF88] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
              <div className="font-mono text-[#00FF88] animate-pulse">
                _ Awaiting next command...
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}