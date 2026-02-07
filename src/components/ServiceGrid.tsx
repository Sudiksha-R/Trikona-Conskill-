import React from 'react';
import { Bot, Layers, Server, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
const services = [
{
  title: 'AI & Automation',
  path: '~/services/ai-automation',
  description:
  'Harness the power of large language models, intelligent automation, and data-driven insights to transform your operations.',
  icon: Bot
},
{
  title: 'Framework Excellence',
  path: '~/services/framework-excellence',
  description:
  'Enterprise-grade applications built on Laravel and CodeIgniter. Secure, scalable, and engineered for performance.',
  icon: Layers
},
{
  title: 'Scalable CMS',
  path: '~/services/scalable-cms',
  description:
  'High-performance WordPress solutions optimized for speed, security, and seamless content management at scale.',
  icon: Server
}];

export function ServiceGrid() {
  return (
    <section id="services" className="py-24 relative bg-black">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-slate-500 mr-2"> //</span>Our Expertise
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-mono text-sm">
              Executing comprehensive technology solutions...
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <ScrollReveal key={index} delay={index * 150} distance={40}>
              <div className="group flex flex-col h-full">
                {/* Terminal Header */}
                <div className="bg-[#1a1a1a] h-9 rounded-t-lg flex items-center px-4 border-x border-t border-slate-600">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono truncate flex-1 text-center pr-12">
                    {service.path}
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="bg-[#0a0a0a] border-x border-b border-slate-700 rounded-b-lg p-8 flex-1 flex flex-col relative overflow-hidden group-hover:border-[#00FF88]/60 transition-colors duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-[#007BFF]" />
                  </div>

                  <div className="w-12 h-12 bg-[#00FF88]/15 rounded flex items-center justify-center mb-6 group-hover:bg-[#00FF88]/25 transition-colors duration-300 border border-[#00FF88]/30">
                    <service.icon className="w-6 h-6 text-[#00FF88]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-mono">
                    <span className="text-[#00FF88] mr-2">$</span>
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm font-mono mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-700 flex items-center text-sm font-medium text-[#007BFF] hover:text-blue-300 transition-colors cursor-pointer font-mono underline underline-offset-4 decoration-[#007BFF]/40 hover:decoration-blue-300">
                    read_more() <span className="animate-pulse ml-1">_</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}