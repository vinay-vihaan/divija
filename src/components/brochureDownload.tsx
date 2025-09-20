"use client";

import { FileText } from "lucide-react";

interface BrochureDownloadProps {
  acf: {
    brochure: string;
    project_slug?: string;
    title?: string;
  };
}

const BrochureDownload: React.FC<BrochureDownloadProps> = ({ acf }) => {
  const downloadBrochure = () => {
    if (!acf.brochure) return;

    // Open the API route in a new tab (forces download)
    window.open(`/api/brochure?url=${encodeURIComponent(acf.brochure)}`, "_blank");
  };

  return (
    <div className="my-8 p-6 bg-secondary rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="text-2xl font-headline font-semibold text-primary">
          Download Brochure
        </h3>
        <p className="text-muted-foreground mt-1">
          Get detailed information about this project.
        </p>
      </div>
      <button
        className="btn-primary flex items-center"
        onClick={downloadBrochure}
      >
        <FileText className="mr-2 h-5 w-5" />
        Download Now
      </button>
    </div>
  );
};

export default BrochureDownload;
