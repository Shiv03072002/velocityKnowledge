"use client";
import Image from "next/image";

const FOOTER_SECTIONS = [
  {
    title: "Contact",
    items: ["info@velocityknowledge.com", "(866) 543-0520"]
  },
  {
    title: "Clients",
    items: ["Wegmann", "Lockhead Martin", "Bank of America", "NASA", "US Army"]
  },
  {
    title: "Quick Links",
    items: ["About", "Blog", "Programs", "Public Schedule", "Contact Us"]
  },
  {
    title: "We Offer",
    items: ["Information Technology", "Leadership", "Business Analysis", "Project Management", "Certifications"]
  },
  {
    title: "Policies",
    items: ["Privacy Policy", "Terms of Service"]
  }
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid - Mapped from sections array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-gray-900 mb-6 tracking-wide uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo Section */}
        <div className="flex items-center gap-8 mb-10">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Velocity Knowledge Logo"
              width={620}
              height={70}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Bottom Copyright */}
        <p className="text-gray-500 text-sm">
          Copyright © 2026 Velocity Knowledge | Designed By Websiteble
        </p>

      </div>
    </footer>
  );
}