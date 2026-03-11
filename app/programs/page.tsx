import ProgramsHeader from "@/components/training/ProgramsHeader";
import FilterSidebar from "@/components/training/ProgramsFilters";
import ProgramsList from "@/components/training/ProgramsList";
import ContactInfoSection from "@/components/training/ContactInfoSection";
import Categorytabs from "@/components/training/Categorytabs"
import PublicTrainingSchedule from "@/components/training/PublicTrainingSchedule"
import Cta from "@/components/Home/Cta";
export default function Training() {
  return (
    <section className="bg-white">
      <ProgramsHeader />

      <div className="max-w-7xl mx-auto px-6 py-10">
         <Categorytabs/>
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          <FilterSidebar />
          <ProgramsList />
        </div>
      </div>
      <PublicTrainingSchedule/>
      <Cta />
      <ContactInfoSection />
    </section>
  );
}