'use client'

import { useState } from "react";
import { Mail, Phone, ArrowRight, ChevronDown } from "lucide-react";

function FormField({ label, placeholder, type = "text", half }) {
    return (
        <div className={half ? "w-full md:w-[calc(50%-8px)]" : "w-full"}>
            <label className="block text-xs font-medium text-gray-900 mb-1">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/30 focus:border-[#1E6FD9] transition bg-[#F8FAFC]"
            />
        </div>
    );
}

export default function ContactSection() {
    const [topic, setTopic] = useState("");

    return (
        <section className="bg-[#F8FAFC] py-12 px-4 sm:py-16 sm:px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                {/* LEFT — FORM */}
                <div className="md:col-span-1">
                    <p className="text-[#64748B] text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 mb-3">
                        <span className="w-2 h-2 bg-[#1E6FD9] inline-block" />
                        Send a Message
                    </p>
                    <h2 className="text-gray-900 text-xl sm:text-3xl font-normal mb-2 [font-family:var(--font-dm-serif)]">
                        Get in touch with our team
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm mb-6 sm:mb-7 leading-relaxed max-w-lg">
                        Send us a message with your questions or requests. Our team will review your
                        message and get back to you as soon as possible.
                    </p>

                    <div className="flex flex-wrap gap-4 bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                        <FormField label="Full name" placeholder="Enter your name" half />
                        <FormField label="Work Email" placeholder="Enter your email" type="email" half />
                        <FormField label="Phone Number" placeholder="Enter your phone number" half />
                        <FormField label="Organization Name" placeholder="Enter your organization" half />

                        {/* Select */}
                        <div className="w-full">
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                Select Training Topic
                            </label>
                            <div className="relative">
                                <select
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    className="w-full appearance-none border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/30 focus:border-[#1E6FD9] transition bg-[#F8FAFC]"
                                >
                                    <option value="">Select topic</option>
                                    <option value="leadership">Leadership</option>
                                    <option value="tech">Technology</option>
                                    <option value="sales">Sales</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>

                        {/* Textarea */}
                        <div className="w-full">
                            <label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Talk us about your needs"
                                className="w-full border border-gray-200 bg-[#F8FAFC] rounded-md px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/30 focus:border-[#1E6FD9] transition resize-none"
                            />
                        </div>

                        {/* Consent */}
                        <div className="w-full flex items-start gap-2 text-xs text-gray-500 max-w-md">
                            <input type="checkbox" className="mt-0.5 accent-[#1E6FD9]" />
                            <span>
                                I agree to the{" "}
                                <a href="#" className="text-black">Privacy Policy</a>
                                {" "}and consent to Velocity Knowledge processing my data
                            </span>
                        </div>

                       <button className="flex items-center justify-center gap-2 w-full md:w-auto bg-[#1E6FD9] hover:bg-[#1E6FD9]/90 text-white text-sm font-medium px-6 py-2.5 rounded-md transition">
  Send Message 
  <ArrowRight className="w-4 h-4" />
</button>
                    </div>
                </div>

                {/* RIGHT — REACH US (Sticky) */}
                <div className="md:col-span-1 md:sticky md:top-24 md:self-start">
                    <p className="text-[#64748B] text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 mb-3">
                        <span className="w-2 h-2 bg-[#1E6FD9] inline-block" />
                        Get in Touch
                    </p>
                    <h2 className="text-gray-900 text-xl sm:text-3xl font-normal mb-2 [font-family:var(--font-dm-serif)]">
                        How you can reach us
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed max-w-lg">
                        Reach out to us anytime by email or phone. Our team will respond and assist
                        you with any questions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email Card */}
                        <div className="border border-gray-200 rounded-lg p-6 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-100/70 rounded-sm border border-gray-200 flex items-center justify-center text-[#1E6FD9]">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Email Us
                                </h3>
                            </div>
                            <p className="text-md text-gray-700 mb-4 leading-relaxed md:max-w-55">
                                Send us your questions anytime and our team will respond shortly.
                            </p>
                            <a
                                href="mailto:info@velocityknowledge.com"
                                className="text-[#1E6FD9] text-md font-medium hover:underline"
                            >
                                info@velocityknowledge.com
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className="border border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-100/70 rounded-sm border border-gray-200  flex items-center justify-center text-[#1E6FD9]">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Call Our Team
                                </h3>
                            </div>
                            <p className="text-md text-gray-700 mb-4 leading-relaxed md:max-w-55">
                                Speak directly with our team about training programs and schedules.
                            </p>
                            <a
                                href="tel:8665430520"
                                className="text-[#1E6FD9] text-md font-medium hover:underline"
                            >
                                (866) 543-0520
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}