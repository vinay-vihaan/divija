// // pages/api/gallery.ts
// export default async function handler(req, res) {
//   const galleriesRes = await fetch("https://divija.vihaandigitals.com/wp-json/wp/v2/gallery");
//   const galleries = await galleriesRes.json();

//   const result = await Promise.all(
//     galleries.map(async (gallery: any) => {
//       const attRes = await fetch(
//         `https://divija.vihaandigitals.com/wp-json/wp/v2/media?parent=${gallery.id}`
//       );
//       const attachments = await attRes.json();
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

//   res.status(200).json(result);
// }


// pages/api/gallery.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const galleriesRes = await fetch(
    "https://divija.vihaandigitals.com/wp-json/wp/v2/gallery"
  );
  const galleries = await galleriesRes.json();

  const result = await Promise.all(
    galleries.map(async (gallery: any) => {
      const attRes = await fetch(
        `https://divija.vihaandigitals.com/wp-json/wp/v2/media?parent=${gallery.id}`
      );
      const attachments = await attRes.json();

      return {
        category: gallery.title.rendered,
        images: attachments.map((img: any) => ({
          src: img.source_url,
          alt: img.alt_text || img.title.rendered,
          hint: img.caption?.rendered || "",
          category: gallery.title.rendered,
        })),
      };
    })
  );

  res.status(200).json(result);
}
