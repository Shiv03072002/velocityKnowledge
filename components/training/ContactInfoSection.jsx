export default function ContactInfoSection() {
  return (
    <section className="relative bg-gray-100 py-24 overflow-hidden ">

      {/* Top Right Half Circle */}
      <div className="absolute -top-40 -right-40 w-[320px] h-[320px] bg-blue-100 rounded-full opacity-60"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <p className="text-lg md:text-xl text-gray-600">
          Programs can be adjusted based on individual or organizational needs.
        </p>

        <p className="mt-4 text-lg md:text-xl text-gray-600">
          <a href="/contact" className="text-[#1E6FD9] font-semibold hover:underline">
            Contact us
          </a>{" "}
          to discuss format and availability.
        </p>
      </div>

    </section>
  );
}