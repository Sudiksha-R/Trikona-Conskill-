import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    setIsOpen(false);
    if (href.startsWith('/')) {
      // It's a route
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      // It's an anchor
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
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
  const navLinks = [
  {
    name: './services',
    href: '/services'
  },
  {
    name: './team',
    href: '/team'
  },
  {
    name: './process',
    href: '/process'
  }];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center font-mono group cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}>

            <span className="text-[#00FF88] mr-2 text-xl font-bold group-hover:animate-pulse">
              &gt;_
            </span>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#00FF88] transition-colors">
              TrikonaConskill
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-mono transition-colors ${location.pathname === link.href ? 'text-[#00FF88]' : 'text-slate-300 hover:text-[#00FF88]'}`}>

                {link.name}
              </a>
            )}
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className={`px-5 py-2.5 text-sm font-medium rounded transition-all flex items-center group font-mono ${location.pathname === '/contact' ? 'text-white bg-[#007BFF] shadow-[0_0_20px_rgba(0,123,255,0.4)]' : 'text-white bg-[#007BFF] hover:bg-blue-500 shadow-[0_0_15px_rgba(0,123,255,0.25)] hover:shadow-[0_0_20px_rgba(0,123,255,0.45)]'}`}>

              Contact Us
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00FF88] hover:text-white p-2 transition-colors"
              aria-label="Toggle menu">

              {isOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
      <div className="md:hidden bg-black/95 backdrop-blur-xl absolute w-full border-b border-[#00FF88]/30">
          <div className="px-4 pt-2 pb-6 space-y-2 font-mono">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`block px-3 py-3 text-base font-medium rounded-md border-l-2 border-transparent hover:border-[#00FF88] ${location.pathname === link.href ? 'text-[#00FF88] bg-[#00FF88]/5 border-[#00FF88]' : 'text-slate-200 hover:text-[#00FF88] hover:bg-[#00FF88]/5'}`}>

                {link.name}
              </a>
          )}
            <a
            href="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            className="block px-3 py-3 text-base font-medium text-[#007BFF] hover:text-blue-400 border-l-2 border-transparent hover:border-[#007BFF]">

              ./contact-us
            </a>
          </div>
        </div>
      }
    </nav>);

}