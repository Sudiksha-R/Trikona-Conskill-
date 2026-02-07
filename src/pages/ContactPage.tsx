import React, { useEffect, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Upload,
  ArrowRight,
  Terminal,
  ShieldCheck,
  RefreshCw } from
'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
function generateCaptcha() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  return {
    a,
    b,
    answer: a + b
  };
}
export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    source: ''
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
    setCaptchaError(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-black pt-20 pb-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <ScrollReveal>
          <div className="text-center mb-16 mt-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded border border-[#00FF88]/40 bg-[#00FF88]/10 text-[#00FF88] text-xs font-mono mb-6 backdrop-blur-sm">
              <span className="mr-2 font-bold">&gt;</span>
              Connection Request Initiated
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
              <span className="text-[#00FF88] mr-3">$</span>
              ./contact --init
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto font-mono text-sm md:text-base leading-relaxed">
              Ready to build something remarkable? Open a channel and let's
              discuss your next project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0}>
              <div className="group">
                <div className="bg-[#1a1a1a] h-9 rounded-t-lg flex items-center px-4 border-x border-t border-slate-600">
                  <div className="flex space-x-2 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono flex-1 text-center pr-8">
                    ~/contact/info
                  </div>
                </div>
                <div className="bg-[#0a0a0a] border-x border-b border-slate-700 rounded-b-lg p-8">
                  <h3 className="text-lg font-bold text-white font-mono mb-6">
                    <span className="text-[#00FF88] mr-2">$</span>
                    Direct Channels
                  </h3>

                  <div className="space-y-5">
                    <a
                      href="tel:+15551234567"
                      className="flex items-center gap-4 group/item rounded-lg p-2 -m-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">

                      <div className="w-11 h-11 bg-[#00FF88]/15 rounded-lg flex items-center justify-center border border-[#00FF88]/30 shrink-0 group-hover/item:bg-[#00FF88]/25 transition-colors">
                        <Phone className="w-5 h-5 text-[#00FF88]" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-mono mb-0.5">
                          phone:
                        </p>
                        <p className="text-slate-200 text-sm font-mono group-hover/item:text-[#00FF88] transition-colors">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@trikonaconskill.com"
                      className="flex items-center gap-4 group/item rounded-lg p-2 -m-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">

                      <div className="w-11 h-11 bg-[#00FF88]/15 rounded-lg flex items-center justify-center border border-[#00FF88]/30 shrink-0 group-hover/item:bg-[#00FF88]/25 transition-colors">
                        <Mail className="w-5 h-5 text-[#00FF88]" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-mono mb-0.5">
                          email:
                        </p>
                        <p className="text-slate-200 text-sm font-mono group-hover/item:text-[#00FF88] transition-colors">
                          hello@trikonaconskill.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-2 -m-2">
                      <div className="w-11 h-11 bg-[#00FF88]/15 rounded-lg flex items-center justify-center border border-[#00FF88]/30 shrink-0">
                        <MapPin className="w-5 h-5 text-[#00FF88]" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-mono mb-0.5">
                          location:
                        </p>
                        <p className="text-slate-200 text-sm font-mono">
                          123 Tech Park, Innovation Blvd
                          <br />
                          Silicon Valley, CA 94025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <p className="text-xs text-slate-400 font-mono mb-3">
                      // Social links:
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-10 h-10 rounded border border-slate-600 flex items-center justify-center text-slate-300 hover:text-[#00FF88] hover:border-[#00FF88] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">

                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        aria-label="Email"
                        className="w-10 h-10 rounded border border-slate-600 flex items-center justify-center text-slate-300 hover:text-[#00FF88] hover:border-[#00FF88] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">

                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Response Time */}
            <ScrollReveal delay={100}>
              <div className="bg-[#0a0a0a] border border-slate-700 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_8px_rgba(0,255,136,0.5)]"></div>
                  <span className="text-sm font-mono text-white">
                    Response Time
                  </span>
                </div>
                <p className="text-slate-300 text-xs font-mono pl-5">
                  We typically respond within 2–4 business hours during IST
                  working hours (Mon–Fri, 9 AM – 6 PM).
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={50}>
              <div className="group">
                <div className="bg-[#1a1a1a] h-9 rounded-t-lg flex items-center px-4 border-x border-t border-slate-600">
                  <div className="flex space-x-2 mr-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono flex-1 text-center pr-8">
                    ~/contact/new-inquiry
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border-x border-b border-slate-700 rounded-b-lg p-8">
                  {submitted ?
                  <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#00FF88]/15 rounded-full flex items-center justify-center border border-[#00FF88]/30 mx-auto mb-6">
                        <ShieldCheck className="w-8 h-8 text-[#00FF88]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-mono mb-3">
                        Message Sent Successfully
                      </h3>
                      <p className="text-slate-300 font-mono text-sm">
                        We'll get back to you within 2–4 business hours.
                      </p>
                    </div> :

                  <>
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-white font-mono mb-1">
                          <span className="text-[#00FF88] mr-2">$</span>
                          submit_inquiry()
                        </h3>
                        <p className="text-slate-400 text-xs font-mono">
                          // Fields marked with * are required
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                            htmlFor="firstName"
                            className="block text-xs font-mono text-slate-300 mb-1.5">

                              <span className="text-[#00FF88]">*</span>{' '}
                              first_name
                            </label>
                            <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            required
                            className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors" />

                          </div>
                          <div>
                            <label
                            htmlFor="lastName"
                            className="block text-xs font-mono text-slate-300 mb-1.5">

                              <span className="text-[#00FF88]">*</span>{' '}
                              last_name
                            </label>
                            <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            required
                            className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors" />

                          </div>
                        </div>

                        {/* Company */}
                        <div>
                          <label
                          htmlFor="company"
                          className="block text-xs font-mono text-slate-300 mb-1.5">

                            <span className="text-[#00FF88]">*</span>{' '}
                            company_name
                          </label>
                          <input
                          id="company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          required
                          className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors" />

                        </div>

                        {/* Email + Phone Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                            htmlFor="email"
                            className="block text-xs font-mono text-slate-300 mb-1.5">

                              <span className="text-[#00FF88]">*</span>{' '}
                              email_address
                            </label>
                            <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@acme.com"
                            required
                            className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors" />

                          </div>
                          <div>
                            <label
                            htmlFor="phone"
                            className="block text-xs font-mono text-slate-300 mb-1.5">

                              <span className="text-[#00FF88]">*</span>{' '}
                              phone_number
                            </label>
                            <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            required
                            className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors" />

                          </div>
                        </div>

                        {/* Website */}
                        <div>
                          <label
                          htmlFor="website"
                          className="block text-xs font-mono text-slate-300 mb-1.5">

                            website_url
                          </label>
                          <input
                          id="website"
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://acme.com"
                          className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors" />

                        </div>

                        {/* Description */}
                        <div>
                          <label
                          htmlFor="description"
                          className="block text-xs font-mono text-slate-300 mb-1.5">

                            project_description
                          </label>
                          <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Describe your project needs, goals, and timeline..."
                          rows={5}
                          maxLength={750}
                          className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors resize-y" />

                          <p className="text-right text-xs text-slate-400 font-mono mt-1">
                            {formData.description.length} / 750 characters
                          </p>
                        </div>

                        {/* How did you hear */}
                        <div>
                          <label
                          htmlFor="source"
                          className="block text-xs font-mono text-slate-300 mb-1.5">

                            referral_source
                          </label>
                          <select
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          className="w-full bg-[#111] border border-slate-600 rounded px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 transition-colors appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center'
                          }}>

                            <option value="" className="bg-[#111]">
                              How did you hear about us?
                            </option>
                            <option value="google" className="bg-[#111]">
                              Google Search
                            </option>
                            <option value="linkedin" className="bg-[#111]">
                              LinkedIn
                            </option>
                            <option value="referral" className="bg-[#111]">
                              Referral
                            </option>
                            <option value="social" className="bg-[#111]">
                              Social Media
                            </option>
                            <option value="event" className="bg-[#111]">
                              Conference / Event
                            </option>
                            <option value="other" className="bg-[#111]">
                              Other
                            </option>
                          </select>
                        </div>

                        {/* Upload */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1.5">
                            attach_document
                          </label>
                          <label className="flex items-center gap-3 px-4 py-3 bg-[#111] border border-dashed border-slate-500 rounded cursor-pointer hover:border-[#00FF88]/50 transition-colors focus-within:ring-2 focus-within:ring-[#00FF88]/20 focus-within:border-[#00FF88]">
                            <Upload className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-mono text-slate-300">
                              Upload project brief or RFP...
                            </span>
                            <input type="file" className="sr-only" />
                          </label>
                        </div>

                        {/* CAPTCHA */}
                        <div>
                          <label
                          htmlFor="captcha"
                          className="block text-xs font-mono text-slate-300 mb-1.5">

                            <span className="text-[#00FF88]">*</span>{' '}
                            verification_check
                          </label>
                          <div className="bg-[#111] border border-slate-600 rounded p-4">
                            <div className="flex items-center gap-4 mb-3">
                              <ShieldCheck className="w-5 h-5 text-[#00FF88] shrink-0" />
                              <div className="flex items-center gap-3 flex-1">
                                <span className="text-white font-mono text-sm font-bold bg-[#1a1a1a] px-3 py-1.5 rounded border border-slate-600">
                                  {captcha.a} + {captcha.b} = ?
                                </span>
                                <button
                                type="button"
                                onClick={refreshCaptcha}
                                className="w-8 h-8 rounded border border-slate-600 flex items-center justify-center text-slate-400 hover:text-[#00FF88] hover:border-[#00FF88] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]"
                                aria-label="Generate new captcha">

                                  <RefreshCw className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                            <input
                            id="captcha"
                            type="text"
                            inputMode="numeric"
                            value={captchaInput}
                            onChange={(e) => {
                              setCaptchaInput(e.target.value);
                              setCaptchaError(false);
                            }}
                            placeholder="Enter the answer"
                            required
                            className={`w-full bg-[#0a0a0a] border rounded px-4 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00FF88]/20 transition-colors ${captchaError ? 'border-red-500 focus:border-red-500' : 'border-slate-600 focus:border-[#00FF88]'}`} />

                            {captchaError &&
                          <p
                            className="text-red-400 text-xs font-mono mt-2"
                            role="alert">

                                ✗ Incorrect answer. Please try again.
                              </p>
                          }
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                        type="submit"
                        className="w-full px-8 py-4 bg-[#007BFF] hover:bg-blue-500 text-white rounded font-semibold transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,123,255,0.5)] hover:translate-y-[-1px] flex items-center justify-center gap-2 font-mono mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]">

                          <Send className="w-4 h-4" />
                          Execute Submit
                        </button>
                      </form>
                    </>
                  }
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>);

}