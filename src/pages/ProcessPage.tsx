import React, { Fragment } from 'react';
import {
  Search,
  PenTool,
  Code,
  Rocket,
  ArrowRight,
  Check,
  Terminal,
  FileText,
  GitBranch,
  Shield,
  Zap,
  Users,
  BarChart3,
  Settings,
  Monitor } from
'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
const phases = [
{
  id: 1,
  command: 'phase-1: discovery',
  title: 'Discovery & Analysis',
  path: '~/process/discovery',
  icon: Search,
  duration: '1-2 Weeks',
  description:
  'Every successful project begins with deep understanding. We immerse ourselves in your business context, analyze existing systems, interview stakeholders, and map out the technical landscape to build a rock-solid foundation for what comes next.',
  activities: [
  'Stakeholder interviews & requirement gathering',
  'Existing system audit & technical debt analysis',
  'Competitive landscape & market research',
  'User journey mapping & persona development',
  'Risk assessment & feasibility study'],

  deliverables: [
  'Project Brief',
  'Technical Audit Report',
  'Requirements Spec',
  'Risk Matrix'],

  tools: ['Jira', 'Confluence', 'Miro', 'Figma'],
  icon2: Users
},
{
  id: 2,
  command: 'phase-2: architecture',
  title: 'Architecture & Design',
  path: '~/process/architecture',
  icon: PenTool,
  duration: '2-3 Weeks',
  description:
  'With requirements locked, we architect systems built to last. Our engineers design scalable data models, define API contracts, plan infrastructure topology, and create detailed technical blueprints that guide every line of code.',
  activities: [
  'System architecture & infrastructure design',
  'Database schema & data flow modeling',
  'API contract definition & documentation',
  'Security architecture & compliance planning',
  'UI/UX wireframes & interactive prototypes'],

  deliverables: [
  'Architecture Diagram',
  'API Documentation',
  'DB Schema',
  'UI Prototypes'],

  tools: ['Draw.io', 'Swagger', 'Figma', 'Terraform'],
  icon2: BarChart3
},
{
  id: 3,
  command: 'phase-3: development',
  title: 'Development & Testing',
  path: '~/process/development',
  icon: Code,
  duration: '4-12 Weeks',
  description:
  'This is where blueprints become reality. We work in agile sprints with continuous integration, automated testing, and regular demos. Every feature is code-reviewed, tested at multiple levels, and validated against acceptance criteria before merging.',
  activities: [
  'Agile sprint planning & execution',
  'Feature development with CI/CD pipelines',
  'Unit, integration & end-to-end testing',
  'Code reviews & pair programming sessions',
  'Performance profiling & optimization'],

  deliverables: [
  'Working Software',
  'Test Reports',
  'Sprint Reviews',
  'Release Notes'],

  tools: ['GitHub', 'Docker', 'Jest', 'Cypress', 'Jenkins'],
  icon2: GitBranch
},
{
  id: 4,
  command: 'phase-4: deployment',
  title: 'Deployment & Support',
  path: '~/process/deployment',
  icon: Rocket,
  duration: 'Ongoing',
  description:
  'Launch day is just the beginning. We handle zero-downtime deployments, configure monitoring and alerting, establish incident response procedures, and provide ongoing support to ensure your system performs flawlessly at scale.',
  activities: [
  'Zero-downtime deployment & rollback strategy',
  'Infrastructure monitoring & alerting setup',
  'Performance benchmarking & load testing',
  'Documentation & knowledge transfer',
  'Ongoing maintenance & feature iteration'],

  deliverables: [
  'Production Deploy',
  'Monitoring Dashboard',
  'Runbook',
  'SLA Agreement'],

  tools: ['AWS', 'Kubernetes', 'Datadog', 'PagerDuty'],
  icon2: Monitor
}];

export function ProcessPage() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-20 mt-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded border border-[#00FF88]/40 bg-[#00FF88]/10 text-[#00FF88] text-xs font-mono mb-6 backdrop-blur-sm">
              <span className="mr-2 font-bold">&gt;</span>
              Process Pipeline Initialized
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
              <span className="text-[#00FF88] mr-3">$</span>
              ./execute-roadmap.sh --detail
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto font-mono text-sm md:text-base leading-relaxed">
              A battle-tested methodology refined across hundreds of projects.
              <br className="hidden md:block" />
              Loading execution pipeline... 4 phases detected.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress Bar */}
        <ScrollReveal>
          <div className="mb-20 hidden md:block">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {phases.map((phase, index) =>
              <Fragment key={phase.id}>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00FF88]/15 border border-[#00FF88]/40 flex items-center justify-center mb-2">
                      <phase.icon className="w-5 h-5 text-[#00FF88]" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {phase.title.split(' ')[0]}
                    </span>
                  </div>
                  {index < phases.length - 1 &&
                <div className="flex-1 h-px bg-gradient-to-r from-[#00FF88]/40 to-[#00FF88]/40 mx-4 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00FF88] text-xs font-mono">
                        →
                      </div>
                    </div>
                }
                </Fragment>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Phase Cards */}
        <div className="space-y-10 mb-24">
          {phases.map((phase, index) =>
          <ScrollReveal
            key={phase.id}
            delay={index * 120}
            direction="up"
            distance={30}>

              <div className="group">
                {/* Terminal Header */}
                <div className="bg-[#1a1a1a] h-9 rounded-t-lg flex items-center px-4 border-x border-t border-slate-600">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono truncate flex-1 text-center pr-12">
                    {phase.path}
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="bg-[#0a0a0a] border-x border-b border-slate-700 rounded-b-lg p-8 md:p-10 relative overflow-hidden group-hover:border-[#00FF88]/60 transition-colors duration-300">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[#00FF88]/15 rounded-lg flex items-center justify-center border border-[#00FF88]/30 shrink-0 group-hover:bg-[#00FF88]/25 transition-colors">
                        <phase.icon className="w-7 h-7 text-[#00FF88]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white font-mono group-hover:text-[#00FF88] transition-colors">
                          <span className="text-[#00FF88] mr-2">$</span>
                          {phase.command}
                        </h3>
                        <p className="text-slate-400 text-sm font-mono mt-1">
                          {phase.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded bg-[#007BFF]/15 border border-[#007BFF]/30 text-xs font-mono text-[#007BFF]">
                        <Zap className="w-3 h-3 inline mr-1" />
                        {phase.duration}
                      </div>
                      <div className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                        Phase {phase.id}/4
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-sm font-mono mb-8 border-l-2 border-slate-700 pl-4">
                    {phase.description}
                  </p>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Activities */}
                    <div>
                      <h4 className="text-sm font-bold text-white mb-4 font-mono flex items-center">
                        <Terminal className="w-4 h-4 mr-2 text-[#007BFF]" />
                        Key Activities:
                      </h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity) =>
                      <li
                        key={activity}
                        className="flex items-start text-sm text-slate-400 font-mono">

                            <Check className="w-4 h-4 mr-2 text-[#00FF88] mt-0.5 shrink-0" />
                            {activity}
                          </li>
                      )}
                      </ul>
                    </div>

                    {/* Deliverables & Tools */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-4 font-mono flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-[#007BFF]" />
                          Deliverables:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((item) =>
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-[#111] border border-slate-700 rounded text-xs font-mono text-slate-300 group-hover:border-[#00FF88]/30 transition-colors">

                              {item}
                            </span>
                        )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-4 font-mono flex items-center">
                          <Settings className="w-4 h-4 mr-2 text-[#007BFF]" />
                          Tools & Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((tool) =>
                        <span
                          key={tool}
                          className="px-2 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded text-xs font-mono text-[#00FF88]">

                              {tool}
                            </span>
                        )}
                        </div>
                      </div>
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
                Ready to start the pipeline?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-mono text-sm">
                Let's kick off the discovery phase and build something
                remarkable together.
              </p>
              <button className="px-8 py-4 bg-[#007BFF] hover:bg-blue-500 text-white rounded font-semibold transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,123,255,0.5)] hover:translate-y-[-2px] inline-flex items-center font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">
                Initialize Discovery
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>);

}