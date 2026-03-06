"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", org: "", role: "", message: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-gray-50 py-16">
      <section className="relative w-full max-w-7xl mx-auto overflow-hidden py-10 px-6 lg:px-16 min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/images/cta/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Large decorative circle — bottom left */}
        <div className="hidden md:block absolute -bottom-25 -left-18 w-[440px] h-[440px] rounded-full border-[28px] border-white z-0 " />
 
        <div className="relative z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Rest of your component remains exactly the same */}
        
         <div className="lg:w-1/2 text-white text-center lg:text-left">
  <div className="flex gap-2 mb-6 justify-center lg:justify-start">
    <div className="w-3 h-3 bg-[#1E6FD9]" />
    <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
      Start the conversation
    </span>
  </div>

  <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 [font-family:var(--font-dm-serif)]" >
    Let's build skills that matter
  </h2>

  <p className="text-white/60 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
    Contact us to find practical ways to build and maintain workforce skills.
  </p>
</div>

          {/* Right: Form card - 50% */}
          <div className="lg:w-1/2 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-8">
            <h3 className="text-white text-xl font-semibold mb-6">Send us a message</h3>

            <div className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="text"
                  name="org"
                  placeholder="Organization name"
                  value={form.org}
                  onChange={handleChange}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Role dropdown */}
              <div className="relative">
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full appearance-none bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white/40"
                  style={{ color: form.role ? "white" : undefined }}
                >
                  <option value="" disabled hidden>Select your role</option>
                  <option value="manager" className="text-black bg-white">Manager</option>
                  <option value="hr" className="text-black bg-white">HR Professional</option>
                  <option value="exec" className="text-black bg-white">Executive</option>
                  <option value="trainer" className="text-black bg-white">Trainer</option>
                  <option value="other" className="text-black bg-white">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Message textarea */}
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  className={`mt-0.5 w-5 h-5 min-w-[20px] rounded border-2 flex items-center justify-center transition-colors ${agreed ? "bg-blue-500 border-blue-500" : "border-white/30 bg-white/10"}`}
                  onClick={() => setAgreed(!agreed)}
                >
                  {agreed && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-white/70 leading-snug">
                  I agree to the{" "}
                  <a href="#" className="text-white font-semibold hover:underline">Privacy Policy</a>
                  {" "}and consent to Velocity Knowledge processing my data
                </span>
              </label>

              {/* Submit button */}
             <button
  className="flex items-center gap-2 bg-[#1E6FD9] hover:bg-blue-600 active:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-xl w-full lg:w-fit mt-1 justify-center lg:justify-start"
>
  Send Message <ArrowRight size={16} />
</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
