// import type { NextApiRequest, NextApiResponse } from 'next'
// import https from 'https'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const remoteUrl = 'https://divija.vihaandigitals.com/wp-content/uploads/2025/09/visionary-city.pdf'

//   https.get(remoteUrl, (fileRes) => {
//     res.setHeader('Content-Type', 'application/pdf')
//     res.setHeader('Content-Disposition', 'attachment; filename="visionary-city.pdf"')
//     fileRes.pipe(res)
//   })
// }


import type { NextApiRequest, NextApiResponse } from "next";
import https from "https";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    res.status(400).send("No file specified");
    return;
  }

  try {
    // Stream the remote PDF via HTTPS
    https.get(url, (fileRes) => {
      if (fileRes.statusCode !== 200) {
        res.status(500).send("Failed to fetch file");
        return;
      }

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="Project-Brochure.pdf"`
      );

      fileRes.pipe(res);
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to download file");
  }
}
