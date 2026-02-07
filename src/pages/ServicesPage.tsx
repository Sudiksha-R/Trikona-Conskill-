import React from 'react';
import {
  Bot,
  Layers,
  Globe,
  Cloud,
  Code,
  Database,
  ArrowRight,
  Check,
  Terminal } from
'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
const detailedServices = [
{
  id: 'ai-automation',
  title: 'AI & Automation',
  path: '~/services/ai-automation',
  description:
  'Leverage the cutting edge of artificial intelligence. We build custom LLM solutions, intelligent chatbots, and predictive analytics pipelines that transform raw data into actionable business intelligence.',
  features: [
  'Custom LLM Integration',
  'Automated Workflows',
  'Predictive Analytics',
  'NLP Solutions'],

  tech: ['Python', 'TensorFlow', 'OpenAI', 'LangChain'],
  icon: Bot
},
{
  id: 'framework-excellence',
  title: 'Framework Excellence',
  path: '~/services/framework-excellence',
  description:
  'Robust, scalable enterprise applications built on battle-tested frameworks. We specialize in complex backend architectures using Laravel and CodeIgniter to deliver secure, high-performance systems.',
  features: [
  'Custom API Development',
  'Database Architecture',
  'Authentication Systems',
  'Performance Optimization'],

  tech: ['Laravel', 'CodeIgniter', 'PHP', 'MySQL', 'Redis'],
  icon: Layers
},
{
  id: 'scalable-cms',
  title: 'Scalable CMS',
  path: '~/services/scalable-cms',
  description:
  'High-performance content management solutions designed for scale. From headless WordPress architectures to complex WooCommerce platforms, we engineer CMS solutions that are fast, secure, and easy to manage.',
  features: [
  'Custom Theme Development',
  'Plugin Engineering',
  'WooCommerce Solutions',
  'Headless WordPress'],

  tech: ['WordPress', 'WooCommerce', 'GraphQL', 'REST API'],
  icon: Globe
},
{
  id: 'cloud-devops',
  title: 'Cloud & DevOps',
  path: '~/services/cloud-devops',
  description:
  'Modernize your infrastructure with cloud-native solutions. We design resilient cloud architectures, implement CI/CD pipelines, and ensure your applications scale effortlessly with demand.',
  features: [
  'AWS/GCP Deployment',
  'Docker & Kubernetes',
  'CI/CD Pipelines',
  'Infrastructure as Code'],

  tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  icon: Cloud
},
{
  id: 'custom-software',
  title: 'Custom Software',
  path: '~/services/custom-software',
  description:
  "Tailor-made software solutions for unique business challenges. We build full-stack SaaS platforms, real-time web applications, and complex integrations that off-the-shelf software can't handle.",
  features: [
  'SaaS Platforms',
  'Real-time Applications',
  'Third-party Integrations',
  'Scalable Architecture'],

  tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  icon: Code
},
{
  id: 'data-engineering',
  title: 'Data Engineering',
  path: '~/services/data-engineering',
  description:
  'Turn data into your most valuable asset. We design robust ETL pipelines, data warehouses, and business intelligence dashboards that provide real-time visibility into your operations.',
  features: [
  'ETL Pipeline Design',
  'Data Warehousing',
  'Business Intelligence',
  'Real-time Analytics'],

  tech: ['Python', 'Apache Spark', 'Snowflake', 'Tableau'],
  icon: Database
}];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none fixed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-20 mt-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded border border-[#00FF88]/40 bg-[#00FF88]/10 text-[#00FF88] text-xs font-mono mb-6 backdrop-blur-sm">
              <span className="mr-2 font-bold">&gt;</span>
              Services Module Loaded
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
              <span className="text-[#00FF88] mr-3">$</span>
              cat services --verbose
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto font-mono text-sm md:text-base leading-relaxed">
              Comprehensive technical capabilities designed for enterprise
              scale.
              <br className="hidden md:block" />
              Analyzing requirements... Loading service modules...
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {detailedServices.map((service, index) =>
          <ScrollReveal key={service.id} delay={index * 100} distance={30}>
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
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-[#00FF88]/15 rounded-lg flex items-center justify-center border border-[#00FF88]/30 group-hover:bg-[#00FF88]/25 transition-colors">
                      <service.icon className="w-7 h-7 text-[#00FF88]" />
                    </div>
                    <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                      v2.4.0
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-mono group-hover:text-[#00FF88] transition-colors">
                    <span className="text-[#00FF88] mr-2">$</span>
                    {service.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-sm font-mono mb-8 border-l-2 border-slate-700 pl-4">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-white mb-4 font-mono flex items-center">
                      <Terminal className="w-4 h-4 mr-2 text-[#007BFF]" />
                      Capabilities:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) =>
                    <li
                      key={feature}
                      className="flex items-start text-sm text-slate-400 font-mono">

                          <Check className="w-4 h-4 mr-2 text-[#00FF88] mt-0.5 shrink-0" />
                          {feature}
                        </li>
                    )}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech) =>
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#111] border border-slate-700 rounded text-xs font-mono text-slate-400 group-hover:border-[#00FF88]/30 transition-colors">

                          {tech}
                        </span>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="bg-[#0a0a0a] border border-slate-700 rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6 font-mono">
                Ready to build something extraordinary?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-mono text-sm">
                Our team of experts is ready to architect the perfect solution
                for your business needs.
              </p>
              <button className="px-8 py-4 bg-[#007BFF] hover:bg-blue-500 text-white rounded font-semibold transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,123,255,0.5)] hover:translate-y-[-2px] inline-flex items-center font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">
                Consult Our Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>);

}