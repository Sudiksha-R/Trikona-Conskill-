import React from 'react';
import {
  Linkedin,
  Github,
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Coffee } from
'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
const teamMembers = [
{
  name: 'Arjun Mehta',
  role: 'Founder & CEO',
  path: '~/team/arjun-mehta',
  bio: '15+ years building enterprise systems. Bridging AI research with real-world business impact.',
  skills: ['Strategy', 'Architecture', 'AI/ML'],
  photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  status: 'online'
},
{
  name: 'Priya Sharma',
  role: 'Chief Technology Officer',
  path: '~/team/priya-sharma',
  bio: 'Full-stack polyglot and distributed systems expert. Led engineering at two successful startups.',
  skills: ['System Design', 'Cloud', 'Leadership'],
  photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  status: 'online'
},
{
  name: 'Vikram Patel',
  role: 'Head of AI & ML',
  path: '~/team/vikram-patel',
  bio: 'PhD in CS, NLP focus. Turns cutting-edge ML papers into production-grade solutions.',
  skills: ['LLMs', 'NLP', 'PyTorch'],
  photo: 'https://randomuser.me/api/portraits/men/52.jpg',
  status: 'online'
},
{
  name: 'Sneha Reddy',
  role: 'Lead Full-Stack Dev',
  path: '~/team/sneha-reddy',
  bio: 'React & Laravel specialist. 8 years shipping products users love with clean architecture.',
  skills: ['React', 'Laravel', 'TypeScript'],
  photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  status: 'away'
},
{
  name: 'Rahul Desai',
  role: 'Head of Cloud & DevOps',
  path: '~/team/rahul-desai',
  bio: 'AWS certified architect. Built infrastructure handling millions of requests daily.',
  skills: ['AWS', 'Kubernetes', 'Terraform'],
  photo: 'https://randomuser.me/api/portraits/men/75.jpg',
  status: 'online'
},
{
  name: 'Ananya Iyer',
  role: 'UX/UI Design Lead',
  path: '~/team/ananya-iyer',
  bio: 'Design thinker who codes. Advocates for accessibility-first design in every project.',
  skills: ['Figma', 'Design Systems', 'A11y'],
  photo: 'https://randomuser.me/api/portraits/women/33.jpg',
  status: 'online'
},
{
  name: 'Karthik Nair',
  role: 'Senior Laravel Engineer',
  path: '~/team/karthik-nair',
  bio: 'Laravel contributor and PHP veteran. Complex e-commerce and high-traffic WordPress expert.',
  skills: ['Laravel', 'PHP', 'WordPress'],
  photo: 'https://randomuser.me/api/portraits/men/22.jpg',
  status: 'away'
},
{
  name: 'Meera Joshi',
  role: 'Data Engineering Lead',
  path: '~/team/meera-joshi',
  bio: 'Turns messy data into clean pipelines. Builds real-time analytics platforms that execs actually use.',
  skills: ['Python', 'Spark', 'Snowflake'],
  photo: 'https://randomuser.me/api/portraits/women/17.jpg',
  status: 'online'
},
{
  name: 'Rohan Kapoor',
  role: 'Mobile & React Native Lead',
  path: '~/team/rohan-kapoor',
  bio: 'Cross-platform mobile specialist. Ships pixel-perfect apps on iOS and Android from a single codebase.',
  skills: ['React Native', 'iOS', 'Android'],
  photo: 'https://randomuser.me/api/portraits/men/46.jpg',
  status: 'online'
}];

const cultureValues = [
{
  title: 'Ship with Craft',
  description:
  "We don't just deliver code – we deliver solutions engineered with care. Every pull request is reviewed, every deployment is monitored, every pixel is intentional.",
  icon: Zap
},
{
  title: 'Radical Transparency',
  description:
  'No black boxes. Clients see our progress in real-time through shared dashboards, weekly demos, and open communication channels.',
  icon: Shield
},
{
  title: 'Continuous Learning',
  description:
  'Weekly tech talks, conference budgets, and 20% time for exploration. We stay sharp because the landscape never stops evolving.',
  icon: Coffee
},
{
  title: 'People Over Process',
  description:
  'Flexible hours, async-first communication, and trust by default. We hire great people and give them the space to do their best work.',
  icon: Heart
}];

export function TeamPage() {
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
              Team Module Loaded — 9 Engineers Active
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
              <span className="text-[#00FF88] mr-3">$</span>
              cat team --all
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto font-mono text-sm md:text-base leading-relaxed">
              The humans behind the code. A tight-knit crew of engineers,
              designers, and strategists who genuinely love what they build.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {teamMembers.map((member, index) =>
          <ScrollReveal key={member.name} delay={index * 80} distance={25}>
              <div className="group flex flex-col h-full">
                {/* Terminal Header */}
                <div className="bg-[#1a1a1a] h-9 rounded-t-lg flex items-center px-4 border-x border-t border-slate-600">
                  <div className="flex space-x-2 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono truncate flex-1 text-center pr-8">
                    {member.path}
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="bg-[#0a0a0a] border-x border-b border-slate-700 rounded-b-lg p-6 flex-1 flex flex-col relative overflow-hidden group-hover:border-[#00FF88]/60 transition-colors duration-300">
                  {/* Photo + Status */}
                  <div className="flex flex-col items-center mb-5">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-[#00FF88]/50 transition-colors">
                        <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover" />

                      </div>
                      <div
                      className={`absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-[#0a0a0a] ${member.status === 'online' ? 'bg-[#00FF88] shadow-[0_0_8px_rgba(0,255,136,0.6)]' : 'bg-yellow-500'}`}>
                    </div>
                    </div>

                    <h3 className="text-lg font-bold text-white font-mono group-hover:text-[#00FF88] transition-colors text-center">
                      {member.name}
                    </h3>
                    <p className="text-[#007BFF] text-sm font-mono text-center">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-300 leading-relaxed text-sm font-mono mb-5 text-center flex-1">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                    {member.skills.map((skill) =>
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-[#111] border border-slate-600 rounded text-xs font-mono text-slate-300 group-hover:border-[#00FF88]/30 transition-colors">

                        {skill}
                      </span>
                  )}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-2 mt-auto">
                    <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-8 h-8 rounded border border-slate-600 flex items-center justify-center text-slate-400 hover:text-#00FF88 hover:border-#00FF88 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-#00FF88">

                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                    href="#"
                    aria-label={`${member.name} GitHub`}
                    className="w-8 h-8 rounded border border-slate-600 flex items-center justify-center text-slate-400 hover:text-#00FF88 hover:border-#00FF88 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-#00FF88">

                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Culture Section */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                <span className="text-slate-500 mr-2"> //</span>How We Work
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto font-mono text-sm">
                Our culture isn't a slide deck — it's how we actually operate,
                every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cultureValues.map((value, index) =>
              <ScrollReveal
                key={value.title}
                delay={index * 100}
                distance={20}>

                  <div className="bg-[#0a0a0a] border border-slate-700 rounded-lg p-6 relative overflow-hidden group hover:border-[#00FF88]/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#007BFF]/15 rounded flex items-center justify-center border border-[#007BFF]/30 shrink-0">
                        <value.icon className="w-5 h-5 text-[#007BFF]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-mono mb-2">
                          {value.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-sans">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {[
            {
              label: 'Team Members',
              value: '24+'
            },
            {
              label: 'Projects Shipped',
              value: '150+'
            },
            {
              label: 'Countries',
              value: '8'
            },
            {
              label: 'Avg. Tenure',
              value: '3.5yr'
            }].
            map((stat) =>
            <div
              key={stat.label}
              className="bg-[#0a0a0a] border border-slate-700 rounded-lg p-5 text-center">

                <div className="text-2xl md:text-3xl font-bold text-[#00FF88] font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="bg-[#0a0a0a] border border-slate-700 rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6 font-mono">
                Want to join the crew?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-mono text-sm">
                We're always looking for talented engineers and designers who
                want to build things that matter.
              </p>
              <button className="px-8 py-4 bg-#007BFF hover:bg-blue-500 text-white rounded font-semibold transition-all shadow-0_0_20px_rgba(0,123,255,0.3) hover:shadow-0_0_30px_rgba(0,123,255,0.5) hover:translate-y-[-2px] inline-flex items-center font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-#00FF88 focus-visible:ring-offset-2 focus-visible:ring-offset-#0a0a0a">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>);

}