// import Coursedetailheader from '@/components/Coursedetails/CoursedetailHeader'
// import CourseOverview from '@/components/Coursedetails/Courseoverview'
// export default function Coursedetails() {
//   return (
//     <section className="">
//      <Coursedetailheader/>
     
//      <CourseOverview/>
    
//     </section>
//   );
// }

import Coursedetailheader from "@/components/Coursedetails/CoursedetailHeader";
import CourseOverview from "@/components/Coursedetails/Courseoverview";

async function getCourse(slug) {
  const res = await fetch(
    `https://velocityknowledge.com/wp-json/wp/v2/course?slug=${slug}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data[0];
}

// Loading component for Suspense
function CourseDetailsLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-20 h-20 border-4 border-gray-200 border-t-[#1E6FD9] rounded-full animate-spin mb-6"></div>
      <p className="text-gray-600 text-xl font-medium">Loading course details...</p>
      <p className="text-gray-400 text-sm mt-2">Please wait while we fetch the course information</p>
    </div>
  );
}

export default async function Coursedetails({ params }) {
  const { slug } = await params;
  const course = await getCourse(slug);
  // If no course found
  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Not Found</h2>
        <p className="text-gray-600">The requested course could not be found.</p>
      </div>
    );
  }

  return (
    <section>
      <Coursedetailheader course={course} />
      <CourseOverview course={course} />
    </section>
  );
}

// Optional: If you want to use Suspense for streaming
export function Loading() {
  return <CourseDetailsLoader />;
}