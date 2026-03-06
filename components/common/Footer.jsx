"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------- MOBILE FOOTER ---------------- */}
        <div className="flex gap-10 mb-20 lg:hidden">

          {/* Left Column */}
          <div className="flex-1 space-y-10">

            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Programs</li>
                <li>Public Schedule</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase">Clients</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Wegmann</li>
                <li>Lockheed Martin</li>
                <li>Bank of America</li>
                <li>NASA</li>
                <li>US Army</li>
              </ul>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-10">

            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase">We Offer</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Information Technology</li>
                <li>Leadership</li>
                <li>Business Analysis</li>
                <li>Project Management</li>
                <li>Certifications</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase">Contact</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>info@velocityknowledge.com</li>
                <li>(866) 543-0520</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase">Policies</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

          </div>

        </div>

        {/* ---------------- DESKTOP FOOTER ---------------- */}
        <div className="hidden lg:grid grid-cols-5 gap-12 mb-20">

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase">Contact</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>info@velocityknowledge.com</li>
              <li>(866) 543-0520</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase">Clients</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Wegmann</li>
              <li>Lockheed Martin</li>
              <li>Bank of America</li>
              <li>NASA</li>
              <li>US Army</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Programs</li>
              <li>Public Schedule</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase">We Offer</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Information Technology</li>
              <li>Leadership</li>
              <li>Business Analysis</li>
              <li>Project Management</li>
              <li>Certifications</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase">Policies</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Velocity Knowledge Logo"
            width={620}
            height={70}
            className="w-[240px] md:w-[420px]"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-[11px] md:text-sm">
          Copyright © 2026 Velocity Knowledge | Designed By Websiteble
        </p>

      </div>
    </footer>
  );
}