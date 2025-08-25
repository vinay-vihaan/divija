// lib/api.ts
import { Project } from "@/lib/types";

export async function getProjects(): Promise<Project[]> {
  const res = await fetch("https://divija.vihaandigitals.com/wp-json/wp/v2/project?acf_format=standard", {
    next: { revalidate: 60 }, // ISR (revalidate every 60s)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
