import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element)
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element)
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return (
    <footer
      id="contact"
      className="bg-[#060606] border-t border-slate-800 pt-16 pb-8 font-mono">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <ScrollReveal delay={0} distance={20}>
            <div>
              <div className="flex items-center mb-6">
                <span className="text-[#00FF88] mr-2 text-lg font-bold">
                  &gt;_
                </span>
                <span className="text-lg font-bold text-white">
                  Trikona<span className="text-[#00FF88]">Conskill</span>
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                Building tomorrow's technology, today. We help businesses scale
                through intelligent AI solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded border border-slate-600 flex items-center justify-center text-slate-300 hover:text-[#00FF88] hover:border-[#00FF88] hover:bg-[#00FF88]/10 transition-all">

                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded border border-slate-600 flex items-center justify-center text-slate-300 hover:text-[#00FF88] hover:border-[#00FF88] hover:bg-[#00FF88]/10 transition-all">

                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={100} distance={20}>
            <div>
              <h4 className="text-white font-bold mb-6 border-b border-slate-600 pb-2 inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                {
                  name: 'services',
                  href: '/services'
                },
                {
                  name: 'team',
                  href: '/team'
                },
                {
                  name: 'process',
                  href: '/process'
                },
                {
                  name: 'about',
                  href: '#'
                },
                {
                  name: 'careers',
                  href: '#'
                }].
                map((item) =>
                <li key={item.name}>
                    <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-slate-300 hover:text-[#00FF88] text-sm transition-colors flex items-center group">

                      <span className="text-[#00FF88]/60 mr-2 group-hover:text-[#00FF88]">
                        ~/
                      </span>
                      {item.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={200} distance={20}>
            <div>
              <h4 className="text-white font-bold mb-6 border-b border-slate-600 pb-2 inline-block">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-300 text-sm">
                  <Mail className="w-5 h-5 mr-3 text-[#00FF88] shrink-0" />
                  <span>hello@trikonaconskill.com</span>
                </li>
                <li className="flex items-start text-slate-300 text-sm">
                  <Phone className="w-5 h-5 mr-3 text-[#00FF88] shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start text-slate-300 text-sm">
                  <MapPin className="w-5 h-5 mr-3 text-[#00FF88] shrink-0" />
                  <span>
                    123 Tech Park, Innovation Blvd
                    <br />
                    Silicon Valley, CA 94025
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal delay={300} distance={20}>
            <div>
              <h4 className="text-white font-bold mb-6 border-b border-slate-600 pb-2 inline-block">
                Stay Updated
              </h4>
              <p className="text-slate-300 text-sm mb-4 font-sans">
                Subscribe for the latest tech insights.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="bg-[#111] border border-slate-600 rounded p-3 font-mono text-sm">
                  <div className="text-[#00FF88] mb-1 text-xs">
                    user@trikona:~$ subscribe --email
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#00FF88] mr-2">&gt;</span>
                    <input
                      type="email"
                      placeholder="enter_email..."
                      className="bg-transparent border-none p-0 text-white w-full focus:ring-0 focus:outline-none placeholder-slate-400" />

                    <span className="w-2 h-4 bg-[#00FF88] animate-cursor ml-1"></span>
                  </div>
                </div>
                <button className="bg-[#007BFF] hover:bg-blue-500 text-white text-sm font-semibold py-3 px-4 rounded transition-colors shadow-[0_0_15px_rgba(0,123,255,0.25)]">
                  Execute Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal distance={10}>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-slate-400 mb-4 md:mb-0">
              // © {new Date().getFullYear()} Trikona Conskill Consulting LLP.
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-[#00FF88] transition-colors">
                Privacy_Policy.md
              </a>
              <a href="#" className="hover:text-[#00FF88] transition-colors">
                Terms_of_Service.md
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>);

}