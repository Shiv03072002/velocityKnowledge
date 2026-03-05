import ProgramsHeader from "@/components/training/ProgramsHeader";
import ProgramsFilters from "@/components/training/ProgramsFilters";
import ProgramsList from "@/components/training/ProgramsList";
import ContactInfoSection from "@/components/training/ContactInfoSection";

export default function Training() {
  return (
    <section className="py-10">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        <ProgramsHeader />

        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          <ProgramsFilters />
          <ProgramsList />
        </div>

      </div>

      {/* No padding applied here */}
      <ContactInfoSection />

    </section>
  );
}