// // import { Check, ArrowRight } from "lucide-react";

// // function CheckIcon() {
// //   return <Check className="w-4 h-4 text-[#1E6FD9] flex-shrink-0 mt-0.5" />;
// // }

// // function SectionLabel({ text }) {
// //   return (
// //     <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
// //       <span className="w-2 h-2  bg-[#1E6FD9] inline-block" />
// //       {text}
// //     </p>
// //   );
// // }

// // function CheckGrid({ items }) {
// //   return (
// //     <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-5">
// //       {items.map((item, i) => (
// //         <div key={i} className="flex items-start gap-3">

// //           <span className="flex items-center justify-center w-7 h-7 bg-[#EAF2FD] rounded-full flex-shrink-0">
// //             <CheckIcon />
// //           </span>

// //           <span className="text-sm text-gray-600 leading-relaxed">
// //             {item}
// //           </span>

// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // const courseDetails = [
// //   { label: "Category", value: "Leadership" },
// //   { label: "Format", value: "Instructor led" },
// //   { label: "Duration", value: "1 Day" },
// //   { label: "Delivery", value: "On-site / Virtual" },
// // ];

// // const learningOutcomes = [
// //   "Understand the main elements that help build trust in teams.",
// //   "Learn the different stages of team development.",
// //   "Identify the development level of each team member.",
// //   "Use flexible leadership styles based on team needs.",
// //   "Provide the right balance of direction and support for your team.",
// // ];

// // const coreSkills = [
// //   "Build trust and open communication within your team.",
// //   "Understand the development level and needs of each team member.",
// //   "Use flexible leadership styles based on different situations.",
// //   "Support your team with the right balance of direction and guidance.",
// // ];

// // export default function CourseOverview() {
// //   return (
// //     <section className="bg-[#f8fafc]   py-14">
// //       <div className="max-w-7xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-10 md:gap-30 items-start px-8 lg:px-6 ">
// //         {/* LEFT (60%) */}
// //         <div className="">
// //           <SectionLabel text="Course Overview" />

// //           <h2
// //             className="text-3xl font-normal text-gray-900 mb-5 [font-family:var(--font-dm-serif)]"
// //           >
// //             About this course
// //           </h2>

// //           <ul className="space-y-3 pl-1">
// //             {[
// //               "Strong teams are built on trust. In this course, you will learn the important elements that help build trust between leaders and team members.",
// //               "You will also learn how teams grow through different stages and how leaders can guide their teams to perform better.",
// //               "The course introduces the situational leadership model. This model helps leaders understand how to support team members with different skills and experience levels.",
// //               "By the end of the course, you will know how to adjust your leadership style, communicate better with your team, and help your team achieve stronger results.",
// //             ].map((item, i) => (
// //               <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
// //                 <span className="mt-2 w-1 h-1 rounded-full bg-gray-900 flex-shrink-0" />
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Learning Outcomes */}
// //           <div className="mt-12">
// //             <SectionLabel text="Learning Outcomes" />

// //             <h2
// //               className="text-3xl font-normal text-gray-900 mb-2 [font-family:var(--font-dm-serif)]"
// //             >
// //               What you will learn
// //             </h2>

// //             <p className="text-sm text-gray-500">
// //               Key skills and knowledge you will gain from this course to improve team performance.
// //             </p>

// //             <CheckGrid items={learningOutcomes} />
// //           </div>

// //           {/* Core Skills */}
// //           <div className="mt-12">
// //             <SectionLabel text="Core Skills" />

// //             <h2
// //               className="text-3xl font-normal text-gray-900 mb-2 [font-family:var(--font-dm-serif)]"
// //             >
// //               Skills you will develop
// //             </h2>

// //             <p className="text-sm text-gray-500">
// //               Practical leadership skills you will gain to guide teams more effectively and improve team performance.
// //             </p>

// //             <CheckGrid items={coreSkills} />
// //           </div>

// //           {/* CTA */}
// //           <div className="mt-12 bg-gray-900 rounded-xl px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
// //             <p className="text-white text-sm leading-relaxed max-w-md">
// //               Programs can be adjusted based on individual or organizational needs.
// //               Please contact us to discuss format and availability.
// //             </p>

// //             <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
// //   Contact Us
// //   <ArrowRight className="w-4 h-4" />
// // </button>
// //           </div>
// //         </div>

// //         {/* RIGHT (40%) */}
// //         <div className="hidden md:block lg:sticky lg:top-24 lg:self-start">
// //           <div className="bg-white border border-gray-200 rounded-xl p-6 ">
// //             <h3 className="text-gray-900 font-semibold text-base mb-5">
// //               Course Details
// //             </h3>

// //             <div className="divide-y divide-gray-100">
// //               {courseDetails.map(({ label, value }) => (
// //                 <div key={label} className="flex items-center justify-between py-3.5">
// //                   <span className="text-sm text-gray-600">{label}</span>
// //                   <span className="text-sm font-bold text-gray-900">{value}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             <button className="mt-6 w-full bg-[#1E6FD9] hover:bg-[#1E6FD9]/90 text-white text-sm font-semibold px-5 py-3 rounded-xl transition flex items-center justify-center gap-2">
// //               Talk to Our Experts
// //               <ArrowRight className="w-4 h-4" />
// //             </button>

// //             <p className="text-center text-xs text-gray-600 mt-3 leading-relaxed max-w-70 mx-auto italic">
// //               This program will be customized based on your specific requirements.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // import { Check, ArrowRight } from "lucide-react";

// // function CheckIcon() {
// //   return <Check className="w-4 h-4 text-[#1E6FD9] flex-shrink-0 mt-0.5" />;
// // }

// // function SectionLabel({ text }) {
// //   return (
// //     <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
// //       <span className="w-2 h-2 bg-[#1E6FD9] inline-block" />
// //       {text}
// //     </p>
// //   );
// // }

// // function CheckGrid({ items }) {
// //   if (!items || items.length === 0) {
// //     return (
// //       <p className="text-sm text-gray-500 italic mt-5">No data available</p>
// //     );
// //   }

// //   return (
// //     <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-5">
// //       {items.map((item, i) => (
// //         <div key={i} className="flex items-start gap-3">
// //           <span className="flex items-center justify-center w-7 h-7 bg-[#EAF2FD] rounded-full flex-shrink-0">
// //             <CheckIcon />
// //           </span>
// //           <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default function CourseOverview({ course }) {
// //   if (!course) return null;

// //   // Get category from categories array
// //   const categories = course.categories || [];
// //   const categoryMap = {
// //     292: "Leadership",
// //     // Add more category mappings as needed based on your API
// //   };
// //   const category = categories.length > 0 ? (categoryMap[categories[0]] || "Professional Development") : "";

// //   // Parse the content to extract description
// //   const content = course.content?.rendered || "";

// //   // Extract description
// //   const extractDescription = () => {
// //     const descMatch = content.match(/<p><strong>Description:<\/strong><\/p>\s*<p>(.*?)<\/p>/s);
// //     if (descMatch && descMatch[1]) {
// //       return [descMatch[1]];
// //     }
// //     return [];
// //   };

// //   // Extract learning objectives
// //   const extractLearningOutcomes = () => {
// //     const objectivesSection = content.match(/<p><strong>Learning Objectives:<\/strong><\/p>.*?<ul class="wp-block-list">(.*?)<\/ul>/s);
// //     if (objectivesSection && objectivesSection[1]) {
// //       const listItems = objectivesSection[1].match(/<li>(.*?)<\/li>/g);
// //       if (listItems) {
// //         return listItems.map(item => item.replace(/<\/?li>/g, '').trim());
// //       }
// //     }
// //     return [];
// //   };

// //   // Extract core skills from learning objectives (removing the action verbs)
// //   const extractCoreSkills = () => {
// //     const objectives = extractLearningOutcomes();
// //     if (objectives.length === 0) return [];

// //     return objectives.map(obj => {
// //       // Remove common action verbs and phrases like "Name the", "Draft", "Identify", etc.
// //       return obj.replace(/^(Name the|Draft|Identify|Create|State|Learn|Understand|Use|Provide)\s+/i, '');
// //     });
// //   };

// //   // Extract course details
// //   const extractCourseDetails = () => {
// //     const details = [];

// //     // Category
// //     if (category) {
// //       details.push({ label: "Category", value: category });
// //     } else {
// //       details.push({ label: "Category", value: "No data available" });
// //     }

// //     // Format
// //     details.push({ label: "Format", value: "No data available" });

// //     // Duration/Length
// //     const lengthMatch = content.match(/<p><strong>Length:?<\/strong> (.*?)<\/p>/i);
// //     if (lengthMatch && lengthMatch[1]) {
// //       details.push({ label: "Duration", value: lengthMatch[1].trim() });
// //     } else {
// //       details.push({ label: "Duration", value: "No data available" });
// //     }

// //     // Delivery
// //     const deliveryMatch = content.match(/<p><strong>Delivery:<\/strong> (.*?)<\/p>/i);
// //     if (deliveryMatch && deliveryMatch[1]) {
// //       details.push({ label: "Delivery", value: deliveryMatch[1].trim() });
// //     } else {
// //       details.push({ label: "Delivery", value: "No data available" });
// //     }

// //     return details;
// //   };

// //   const description = extractDescription();
// //   const learningOutcomes = extractLearningOutcomes();
// //   const coreSkills = extractCoreSkills();
// //   const courseDetails = extractCourseDetails();

// //   return (
// //     <section className="bg-[#f8fafc] py-14">
// //       <div className="max-w-7xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-10 md:gap-30 items-start px-8 lg:px-6">
// //         {/* LEFT (60%) */}
// //         <div className="">
// //           <SectionLabel text="Course Overview" />

// //           <h2 className="text-3xl font-normal text-gray-900 mb-5 [font-family:var(--font-dm-serif)]">
// //             About this course
// //           </h2>

// //           {description.length > 0 ? (
// //             <ul className="space-y-3 pl-1">
// //               {description.map((item, i) => (
// //                 <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
// //                   <span className="mt-2 w-1 h-1 rounded-full bg-gray-900 flex-shrink-0" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <p className="text-sm text-gray-500 italic">No data available</p>
// //           )}

// //           {/* Learning Outcomes */}
// //           <div className="mt-12">
// //             <SectionLabel text="Learning Outcomes" />

// //             <h2 className="text-3xl font-normal text-gray-900 mb-2 [font-family:var(--font-dm-serif)]">
// //               What you will learn
// //             </h2>

// //             <p className="text-sm text-gray-500">
// //               Key skills and knowledge you will gain from this course to improve team performance.
// //             </p>

// //             <CheckGrid items={learningOutcomes} />
// //           </div>

// //           {/* Core Skills */}
// //           <div className="mt-12">
// //             <SectionLabel text="Core Skills" />

// //             <h2 className="text-3xl font-normal text-gray-900 mb-2 [font-family:var(--font-dm-serif)]">
// //               Skills you will develop
// //             </h2>

// //             <p className="text-sm text-gray-500">
// //               Practical leadership skills you will gain to guide teams more effectively and improve team performance.
// //             </p>

// //             <CheckGrid items={coreSkills} />
// //           </div>

// //           {/* CTA */}
// //           <div className="mt-12 bg-gray-900 rounded-xl px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
// //             <p className="text-white text-sm leading-relaxed max-w-md">
// //               Programs can be adjusted based on individual or organizational needs.
// //               Please contact us to discuss format and availability.
// //             </p>

// //             <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
// //               Contact Us
// //               <ArrowRight className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* RIGHT (40%) */}
// //         <div className="hidden md:block lg:sticky lg:top-24 lg:self-start">
// //           <div className="bg-white border border-gray-200 rounded-xl p-6">
// //             <h3 className="text-gray-900 font-semibold text-base mb-5">
// //               Course Details
// //             </h3>

// //             <div className="divide-y divide-gray-100">
// //               {courseDetails.map(({ label, value }) => (
// //                 <div key={label} className="flex items-center justify-between py-3.5">
// //                   <span className="text-sm text-gray-600">{label}</span>
// //                   <span className={`text-sm font-bold ${value === "No data available" ? "text-gray-400" : "text-gray-900"}`}>
// //                     {value}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //             <button className="mt-6 w-full bg-[#1E6FD9] hover:bg-[#1E6FD9]/90 text-white text-sm font-semibold px-5 py-3 rounded-xl transition flex items-center justify-center gap-2">
// //               Talk to Our Experts
// //               <ArrowRight className="w-4 h-4" />
// //             </button>

// //             <p className="text-center text-xs text-gray-600 mt-3 leading-relaxed max-w-70 mx-auto italic">
// //               This program will be customized based on your specific requirements.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { Check, ArrowRight } from "lucide-react";

// function CheckIcon() {
//   return <Check className="w-4 h-4 text-[#1E6FD9] flex-shrink-0 mt-0.5" />;
// }

// function SectionLabel({ text }) {
//   return (
//     <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
//       <span className="w-2 h-2 bg-[#1E6FD9] inline-block" />
//       {text}
//     </p>
//   );
// }

// function CheckGrid({ items }) {
//   if (!items || items.length === 0) {
//     return (
//       <p className="text-sm text-gray-500 italic mt-5">No data available</p>
//     );
//   }

//   return (
//     <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-5">
//       {items.map((item, i) => (
//         <div key={i} className="flex items-start gap-3">
//           <span className="flex items-center justify-center w-7 h-7 bg-[#EAF2FD] rounded-full flex-shrink-0">
//             <CheckIcon />
//           </span>
//           <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function CourseOverview({ course }) {
//   if (!course) return null;

//   // Get category from categories array
//   const categories = course.categories || [];
//   const categoryMap = {
//     292: "Leadership",
//     // Add more category mappings as needed based on your API
//   };
//   const category = categories.length > 0 ? (categoryMap[categories[0]] || "Professional Development") : "";

//   // Parse the content to extract all sections
//   const content = course.content?.rendered || "";

//   // Helper function to clean HTML entities
//   const cleanHtmlEntities = (text) => {
//     return text
//       .replace(/&amp;/g, '&')
//       .replace(/&lt;/g, '<')
//       .replace(/&gt;/g, '>')
//       .replace(/&quot;/g, '"')
//       .replace(/&#039;/g, "'")
//       .replace(/&rsquo;/g, "'")
//       .replace(/&lsquo;/g, "'")
//       .replace(/&rdquo;/g, '"')
//       .replace(/&ldquo;/g, '"');
//   };

//   // Extract description
//   const extractDescription = () => {
//     // Try multiple patterns to match the description
//     const patterns = [
//       /<p><strong>Description:<\/strong><\/p>\s*<p>(.*?)<\/p>/s,
//       /<strong>Description:<\/strong>\s*<\/p>\s*<p>(.*?)<\/p>/s,
//       /Description:<\/strong><\/p>\s*<p>(.*?)<\/p>/s
//     ];

//     for (const pattern of patterns) {
//       const descMatch = content.match(pattern);
//       if (descMatch && descMatch[1]) {
//         const description = cleanHtmlEntities(descMatch[1].trim());
//         return [description];
//       }
//     }

//     // If no description found, try to get the first paragraph
//     const firstParagraph = content.match(/<p>(.*?)<\/p>/s);
//     if (firstParagraph && firstParagraph[1]) {
//       const cleanText = firstParagraph[1].replace(/<[^>]*>/g, '').trim();
//       if (cleanText && !cleanText.includes('Objectives:')) {
//         return [cleanHtmlEntities(cleanText)];
//       }
//     }

//     return [];
//   };

//   // Extract learning objectives/outcomes
//   const extractLearningOutcomes = () => {
//     // Look for learning objectives section
//     const objectivesPatterns = [
//       /<p><strong>Learning Objectives:<\/strong><\/p>.*?<ul class="wp-block-list">(.*?)<\/ul>/s,
//       /<p><strong>Objectives:<\/strong><\/p>.*?<ul class="wp-block-list">(.*?)<\/ul>/s,
//       /<strong>Learning Objectives:<\/strong>.*?<ul[^>]*>(.*?)<\/ul>/s,
//       /<strong>Objectives:<\/strong>.*?<ul[^>]*>(.*?)<\/ul>/s
//     ];

//     for (const pattern of objectivesPatterns) {
//       const objectivesSection = content.match(pattern);
//       if (objectivesSection && objectivesSection[1]) {
//         const listItems = objectivesSection[1].match(/<li>(.*?)<\/li>/g);
//         if (listItems) {
//           return listItems.map(item =>
//             cleanHtmlEntities(item.replace(/<\/?li>/g, '').trim())
//           );
//         }
//       }
//     }

//     return [];
//   };

//   // Extract core skills from learning objectives (removing action verbs)
//   const extractCoreSkills = () => {
//     const objectives = extractLearningOutcomes();
//     if (objectives.length === 0) return [];

//     return objectives.map(obj => {
//       // Remove common action verbs and phrases
//       return obj.replace(/^(Name the|Draft|Identify|Create|State|Learn|Understand|Use|Provide|Recognize|Develop|Generate|Focus on)\s+/i, '')
//         .replace(/^your\s+/i, '')
//         .replace(/^how to\s+/i, '');
//     });
//   };

//   // Extract target audience
//   const extractTargetAudience = () => {
//     const patterns = [
//       /<p><strong>Target Audience:<\/strong> (.*?)<\/p>/i,
//       /<strong>Target Audience:<\/strong> (.*?)<\/p>/i,
//       /Target Audience:<\/strong> (.*?)<\/p>/i
//     ];

//     for (const pattern of patterns) {
//       const match = content.match(pattern);
//       if (match && match[1]) {
//         return cleanHtmlEntities(match[1].trim());
//       }
//     }
//     return null;
//   };

//   // Extract skill category
//   const extractSkillCategory = () => {
//     const patterns = [
//       /<p><strong>Skill Category:<\/strong> (.*?)<\/p>/i,
//       /<strong>Skill Category:<\/strong> (.*?)<\/p>/i,
//       /Skill Category:<\/strong> (.*?)<\/p>/i
//     ];

//     for (const pattern of patterns) {
//       const match = content.match(pattern);
//       if (match && match[1]) {
//         return cleanHtmlEntities(match[1].trim());
//       }
//     }
//     return category; // Fallback to the category from categories array
//   };

//   // Extract delivery method
//   const extractDelivery = () => {
//     const patterns = [
//       /<p><strong>Delivery:<\/strong> (.*?)<\/p>/i,
//       /<strong>Delivery:<\/strong> (.*?)<\/p>/i,
//       /Delivery:<\/strong> (.*?)<\/p>/i
//     ];

//     for (const pattern of patterns) {
//       const match = content.match(pattern);
//       if (match && match[1]) {
//         return cleanHtmlEntities(match[1].trim());
//       }
//     }
//     return null;
//   };

//   // Extract prerequisites
//   const extractPrerequisites = () => {
//     const patterns = [
//       /<p><strong>Prerequisites:<\/strong> (.*?)<\/p>/i,
//       /<strong>Prerequisites:<\/strong> (.*?)<\/p>/i,
//       /Prerequisites:<\/strong> (.*?)<\/p>/i
//     ];

//     for (const pattern of patterns) {
//       const match = content.match(pattern);
//       if (match && match[1]) {
//         return cleanHtmlEntities(match[1].trim());
//       }
//     }
//     return null;
//   };

//   // Extract pre-course work
//   const extractPrecourseWork = () => {
//     const patterns = [
//       /<p><strong>Pre-course Work:<\/strong> (.*?)<\/p>/i,
//       /<p><strong>Precourse Work:<\/strong> (.*?)<\/p>/i,
//       /<strong>Pre-course Work:<\/strong> (.*?)<\/p>/i,
//       /<strong>Prework:<\/strong> (.*?)<\/p>/i
//     ];

//     for (const pattern of patterns) {
//       const match = content.match(pattern);
//       if (match && match[1]) {
//         return cleanHtmlEntities(match[1].trim());
//       }
//     }
//     return null;
//   };

//   // Extract length/duration
//   const extractLength = () => {
//     const patterns = [
//       /<p><strong>Length:?<\/strong> (.*?)<\/p>/i,
//       /<strong>Length:?<\/strong> (.*?)<\/p>/i,
//       /Length:?<\/strong> (.*?)<\/p>/i
//     ];

//     for (const pattern of patterns) {
//       const match = content.match(pattern);
//       if (match && match[1]) {
//         return cleanHtmlEntities(match[1].trim());
//       }
//     }
//     return null;
//   };

//   // Extract module information (for multi-module courses)
//   const extractModules = () => {
//     const modules = [];
//     const modulePattern = /<p><strong>Module \d+:<\/strong> (.*?)<\/p>/gi;
//     let match;

//     while ((match = modulePattern.exec(content)) !== null) {
//       modules.push(cleanHtmlEntities(match[1].trim()));
//     }

//     return modules;
//   };

//   // Extract course details for the right sidebar
//   const extractCourseDetails = () => {
//     const details = [];

//     // Category
//     const skillCategory = extractSkillCategory();
//     if (skillCategory && skillCategory !== "No data available") {
//       details.push({ label: "Category", value: skillCategory });
//     } else if (category) {
//       details.push({ label: "Category", value: category });
//     } else {
//       details.push({ label: "Category", value: "Professional Development" });
//     }

//     // Target Audience
//     const targetAudience = extractTargetAudience();
//     if (targetAudience) {
//       details.push({ label: "Audience", value: targetAudience });
//     }

//     // Duration/Length
//     const length = extractLength();
//     if (length) {
//       details.push({ label: "Duration", value: length });
//     } else {
//       // Check if it's mentioned in the content without a label
//       if (content.toLowerCase().includes('1 day')) {
//         details.push({ label: "Duration", value: "1 day" });
//       } else {
//         details.push({ label: "Duration", value: "To be determined" });
//       }
//     }

//     // Delivery
//     const delivery = extractDelivery();
//     if (delivery) {
//       details.push({ label: "Delivery", value: delivery });
//     }

//     // Prerequisites
//     const prerequisites = extractPrerequisites();
//     if (prerequisites && prerequisites.toLowerCase() !== 'none') {
//       details.push({ label: "Prerequisites", value: prerequisites });
//     }

//     // Pre-course Work
//     const precourseWork = extractPrecourseWork();
//     if (precourseWork && precourseWork.toLowerCase() !== 'none') {
//       details.push({ label: "Pre-work", value: precourseWork });
//     }

//     return details;
//   };

//   const description = extractDescription();
//   const learningOutcomes = extractLearningOutcomes();
//   const coreSkills = extractCoreSkills().length > 0 ? extractCoreSkills() : learningOutcomes;
//   const courseDetails = extractCourseDetails();
//   const modules = extractModules();

//   return (
//     <section className="bg-[#f8fafc] py-14">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-10 md:gap-30 items-start px-8 lg:px-6">
//         {/* LEFT (60%) */}
//         <div className="">
//           <SectionLabel text="Course Overview" />

//           <h2 className="text-3xl font-normal text-gray-900 mb-5 [font-family:var(--font-dm-serif)]">
//             {course.title?.rendered || "About this course"}
//           </h2>

//           {description.length > 0 ? (
//             <ul className="space-y-3 pl-1">
//               {description.map((item, i) => (
//                 <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
//                   <span className="mt-2 w-1 h-1 rounded-full bg-gray-900 flex-shrink-0" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-sm text-gray-500 italic">No description available</p>
//           )}

//           {/* Modules (if available) */}
//           {modules.length > 0 && (
//             <div className="mt-12">
//               <SectionLabel text="Course Modules" />
//               <div className="mt-5 space-y-4">
//                 {modules.map((module, i) => (
//                   <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
//                     <h3 className="font-semibold text-gray-900">Module {i + 1}</h3>
//                     <p className="text-sm text-gray-600 mt-1">{module}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Learning Outcomes */}
//           {learningOutcomes.length > 0 && (
//             <div className="mt-12">
//               <SectionLabel text="Learning Outcomes" />

//               <h2 className="text-3xl font-normal text-gray-900 mb-2 [font-family:var(--font-dm-serif)]">
//                 What you will learn
//               </h2>

//               <p className="text-sm text-gray-500">
//                 Key skills and knowledge you will gain from this course to improve team performance.
//               </p>

//               <CheckGrid items={learningOutcomes} />
//             </div>
//           )}

//           {/* Core Skills */}
//           {coreSkills.length > 0 && (
//             <div className="mt-12">
//               <SectionLabel text="Core Skills" />

//               <h2 className="text-3xl font-normal text-gray-900 mb-2 [font-family:var(--font-dm-serif)]">
//                 Skills you will develop
//               </h2>

//               <p className="text-sm text-gray-500">
//                 Practical skills you will gain to work more effectively and improve team performance.
//               </p>

//               <CheckGrid items={coreSkills} />
//             </div>
//           )}

//           {/* CTA */}
//           <div className="mt-12 bg-gray-900 rounded-xl px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//             <p className="text-white text-sm leading-relaxed max-w-md">
//               Programs can be adjusted based on individual or organizational needs.
//               Please contact us to discuss format and availability.
//             </p>

//             <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
//               Contact Us
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* RIGHT (40%) */}
//         <div className="hidden md:block lg:sticky lg:top-24 lg:self-start">
//           <div className="bg-white border border-gray-200 rounded-xl p-6">
//             <h3 className="text-gray-900 font-semibold text-base mb-5">
//               Course Details
//             </h3>

//             <div className="divide-y divide-gray-100">
//               {courseDetails.length > 0 ? (
//                 courseDetails.map(({ label, value }) => (
//                   <div key={label} className="flex items-center justify-between py-3.5">
//                     <span className="text-sm text-gray-600">{label}</span>
//                     <span className="text-sm font-bold text-gray-900">
//                       {value}
//                     </span>
//                   </div>
//                 ))
//               ) : (
//                 <div className="py-3.5">
//                   <span className="text-sm text-gray-400 italic">No details available</span>
//                 </div>
//               )}
//             </div>

//             <button className="mt-6 w-full bg-[#1E6FD9] hover:bg-[#1E6FD9]/90 text-white text-sm font-semibold px-5 py-3 rounded-xl transition flex items-center justify-center gap-2">
//               Talk to Our Experts
//               <ArrowRight className="w-4 h-4" />
//             </button>

//             <p className="text-center text-xs text-gray-600 mt-3 leading-relaxed max-w-70 mx-auto italic">
//               This program will be customized based on your specific requirements.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Check, ArrowRight } from "lucide-react";
import { useMemo } from "react";

export default function CoursePage({ course }) {
  if (!course) return <p>Course not found.</p>;

  // Generate courseDetails dynamically from HTML content
  const courseDetails = useMemo(() => {
    const html = course.content.rendered;
    const details = [];

    // Extract <p><strong>Label:</strong> Value</p>
    const pMatches = html.match(/<p><strong>(.*?)<\/strong>\s*(.*?)<\/p>/g);
    if (pMatches) {
      pMatches.forEach((p) => {
        const match = p.match(/<p><strong>(.*?)<\/strong>\s*(.*?)<\/p>/);
        if (match) {
          const label = match[1].trim();
          const value = match[2].trim();
          if (label && value) details.push({ label, value });
        }
      });
    }

    return details;
  }, [course.content.rendered]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 lg:px-8">
      <div className="lg:flex lg:gap-10">
        {/* Left Column - 60% */}
        <div className="lg:w-[60%]">
          <div
            className="course-content"
            dangerouslySetInnerHTML={{ __html: course.content.rendered }}
            style={{ lineHeight: "1.6", fontSize: "18px" }}
          />

          <div className="mt-12 bg-gray-900 rounded-xl px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm leading-relaxed max-w-md">
              Programs can be adjusted based on individual or organizational
              needs. Please contact us to discuss format and availability.
            </p>

            <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column - 40% with Sticky */}
        <div className="hidden lg:block lg:w-[40%]">
          <div className="sticky top-24">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-gray-900 font-semibold text-base mb-5">
                Course Details
              </h3>

              <div className="divide-y divide-gray-100">
                {courseDetails.length > 0 ? (
                  courseDetails.map(({ label, value }, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-3.5"
                    >
                      <span className="text-sm text-gray-600">{label}</span>
                      <span className="text-sm font-bold text-gray-900">
                        {value}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="py-3.5">
                    <span className="text-sm text-gray-400 italic">
                      No details available
                    </span>
                  </div>
                )}
              </div>

              {/* Keep your button intact */}
              <button className="mt-6 w-full bg-[#1E6FD9] hover:bg-[#1E6FD9]/90 text-white text-sm font-semibold px-5 py-3 rounded-xl transition flex items-center justify-center gap-2">
                Talk to Our Experts
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-gray-600 mt-3 leading-relaxed max-w-70 mx-auto italic">
                This program will be customized based on your specific
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
