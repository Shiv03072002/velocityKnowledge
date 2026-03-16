// app/training/page.tsx  ← Server Component (no "use client")
import TrainingClient from "@/components/training/TrainingClient";

async function getInitialPrograms() {
  try {
    const res = await fetch(
      "https://velocityknowledge.com/wp-json/wp/v2/course?per_page=60",
      {
        // ISR: revalidate every 60 seconds
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function TrainingPage() {
  const initialPrograms = await getInitialPrograms();

  return <TrainingClient initialPrograms={initialPrograms} />;
}