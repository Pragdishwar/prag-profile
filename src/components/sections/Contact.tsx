'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../../data/portfolio';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    // 🔑 Replace this with your Web3Forms Access Key
    formData.append("access_key", "c8b584bd-9ada-4c4d-b97f-82239031e6ef");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="w-full min-h-[70vh] flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden bg-black">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <span className="text-zinc-500 font-mono text-sm tracking-[0.3em] uppercase mb-8">
            05 — End of Sequence
          </span>

          <h2 className="text-[10vw] md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white mb-12">
            LET'S BUILD<br />
            <span className="text-zinc-600">SOMETHING</span><br />
            INTERESTING.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-16 w-full max-w-6xl mx-auto">
            {/* Left: Contact Icons */}
            <div className="w-full flex flex-col justify-center items-start gap-8 os-card p-6 md:p-10">
              <div className="flex items-center gap-2 mb-2 border-b border-white/10 w-full pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Alternative Channels</span>
              </div>

              <a 
                href={"mailto:" + personalDetails.email} 
                className="group flex items-center gap-6 w-full p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">Direct Email</span>
                  <span className="text-sm text-zinc-300">{personalDetails.email}</span>
                </div>
              </a>

              <a 
                href={personalDetails.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-6 w-full p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">GitHub</span>
                  <span className="text-sm text-zinc-300">@Pragdishwar</span>
                </div>
              </a>

              <a 
                href={personalDetails.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-6 w-full p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">LinkedIn</span>
                  <span className="text-sm text-zinc-300">Connect with me</span>
                </div>
              </a>
            </div>

            {/* Right: Mail Form */}
            <div className="w-full text-left os-card p-6 md:p-10">
              <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Initiate Communication Protocol</span>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Identity</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white transition-colors w-full"
                    placeholder="Gabe Itch"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Return Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white transition-colors w-full"
                    placeholder="Gabeitch@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white transition-colors w-full"
                    placeholder="Collaboration Inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Payload</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    className="bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white transition-colors w-full resize-none font-mono text-sm"
                    placeholder="Enter message data..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={"w-full py-4 rounded-md font-mono text-sm tracking-wider uppercase flex items-center justify-center gap-2 mt-4 transition-colors border " + (isSuccess ? 'bg-green-500 text-black border-green-500' : 'bg-white text-black border-white hover:bg-zinc-200 disabled:opacity-50')}
                >
                  {isSubmitting ? (
                    'Transmitting...'
                  ) : isSuccess ? (
                    <>Transmission Successful <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></>
                  ) : (
                    <>Execute Send <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></>
                  )}
                </motion.button>
              </form>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

