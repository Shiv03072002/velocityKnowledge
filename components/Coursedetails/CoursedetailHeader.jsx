"use client";

import { useState } from "react";

/* ─── COURSE HERO ─────────────────────────────────────────────────────────── */
const courseDetails = [
  { label: "Category", value: "Leadership" },
  { label: "Format", value: "Instructor led" },
  { label: "Duration", value: "1 Day" },
  { label: "Delivery", value: "On-site / Virtual" },
];

function CourseHero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        minHeight: "420px",
        backgroundImage: "url('/images/cta/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[3fr_2fr] gap-10 items-center">
        {/* LEFT - 60% */}
        <div className="lg:pr-8">
          <span className="inline-block border border-white/30 text-white/80 text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Leadership Development
          </span>

          <h1
            className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Build trust and high performance with flexible team leadership
          </h1>

          <p className="text-white/80 text-base leading-relaxed max-w-xl mb-10">
            This course helps leaders build trust and improve team performance. You will
            learn how teams develop, how trust is built, and how to adjust your leadership
            style to support different team members.
          </p>

          {/* Expert badge */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["https://i.pravatar.cc/40?img=32", "https://i.pravatar.cc/40?img=47", "https://i.pravatar.cc/40?img=12"].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-9 h-9 rounded-full object-cover"
                    alt="instructor"
                  />
                )
              )}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Expert-led learning</p>
              <p className="text-white text-xs">Programs shaped by practical experience.</p>
            </div>
          </div>
        </div>

        {/* RIGHT - 40% */}
        <div className="lg:pl-10">
          <div
            className="rounded-xl p-6 bg-[#E2E8F033]"
            
          >
            <h3 className="text-white font-semibold text-base mb-5">Course Details</h3>

            <div className="divide-y divide-white/15">
              {courseDetails.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-3.5">
                  <span className="text-white/70 text-sm">{label}</span>
                  <span className="text-white font-semibold text-sm">{value}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full bg-[#1E6FD9] hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
              Talk to Our Experts
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <p className="text-center text-white/40 text-xs mt-3 leading-relaxed italic max-w-70 mx-auto">
              This program will be customized based on your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE EXPORT ─────────────────────────────────────────────────────────── */
export default function CourseDetailHeader() {
  return (
    <>
      <CourseHero />
    </>
  );
}