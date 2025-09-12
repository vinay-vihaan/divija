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

// export async function fetchGalleryData() {
//   // Get all gallery posts
//   const res = await fetch("https://divija.vihaandigitals.com/wp-json/wp/v2/gallery");
//   const galleries = await res.json();

//   // For each gallery, fetch attached images
//   const galleryWithImages = await Promise.all(
//     galleries.map(async (gallery: any) => {
//       const attachmentsRes = await fetch(
//         `https://divija.vihaandigitals.com/wp-json/wp/v2/media?parent=${gallery.id}`
//       );
//       const attachments = await attachmentsRes.json();

//       return {
//         category: gallery.title.rendered,
//         images: attachments.map((img: any) => ({
//           src: img.source_url,
//           alt: img.alt_text || img.title.rendered,
//           hint: img.caption?.rendered || "",
//           category: gallery.title.rendered,
//         })),
//       };
//     })
//   );

//   return galleryWithImages;
// }

export type ImageType = {
  src: string;
  alt: string;
  hint: string;
  category: string;
};

export type GalleryGroup = {
  category: string;
  images: ImageType[];
};

export async function fetchGalleryData(): Promise<GalleryGroup[]> {
  const res = await fetch(
    "https://divija.vihaandigitals.com/wp-json/wp/v2/gallery?acf_format=standard",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch galleries");
  }

  const data = await res.json();

  // Map WP JSON → GalleryGroup[]
  return data.map((gallery: any) => {
    return {
      category: gallery.title.rendered, // e.g. "Ananda"
      images: gallery.acf?.upload_image?.map((img: any, idx: number) => ({
        src: img.upload_image,
        alt: `${gallery.title.rendered} - Image ${idx + 1}`,
        hint: gallery.slug,
        category: gallery.title.rendered,
      })) || [],
    };
  });
}
