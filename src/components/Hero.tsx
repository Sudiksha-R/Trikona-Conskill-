import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid pattern - blue, more visible */}
        <div className="absolute inset-0 grid-pattern"></div>

        {/* Orbs - more visible for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.035)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#007BFF]/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FF88]/8 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-[0.05] font-mono text-xs md:text-sm leading-relaxed text-[#00FF88] select-none overflow-hidden h-full flex items-center justify-center">
          <pre className="text-left">
            {`class TrikonaConsulting extends Enterprise {
  constructor() {
    super();
    this.capabilities = [
      'AI_INTEGRATION',
      'FULL_STACK_DEV', 
      'CLOUD_ARCHITECTURE'
    ];
    this.status = 'READY_TO_SCALE';
  }

  async transform(client) {
    const strategy = await this.analyze(client.needs);
    const solution = new Architecture(strategy);
    
    while (solution.optimizing) {
      await solution.refine();
    }
    
    return solution.deploy();
  }
}`}
          </pre>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal delay={0} duration={700}>
          <div className="inline-flex items-center px-4 py-1.5 rounded border border-[#00FF88]/40 bg-[#00FF88]/10 text-[#00FF88] text-xs font-mono mb-8 backdrop-blur-sm">
            <span className="mr-2 font-bold">&gt;</span>
            Next-Gen Software Consultancy
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} duration={800}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight font-mono">
            Merging <span className="text-[#00FF88]">AI Intelligence</span>
            <br />
            with <span className="text-white">Full Stack Reliability</span>
            <span className="inline-block w-3 h-12 md:h-16 bg-[#00FF88] ml-2 align-middle animate-cursor"></span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300} duration={800}>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans border-l-2 border-[#00FF88]/40 pl-6 text-left md:text-center md:border-none md:pl-0">
            We architect intelligent solutions that scale. From cutting-edge AI
            systems to robust full-stack applications, we deliver technology
            that drives real business outcomes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={450} duration={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#007BFF] hover:bg-blue-500 text-white rounded font-semibold transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,123,255,0.5)] hover:translate-y-[-2px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Consult Our Experts
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#00FF88]/15 hover:bg-[#00FF88]/25 border-2 border-[#00FF88]/60 hover:border-[#00FF88] text-[#00FF88] rounded font-semibold transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              View Our Work
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}