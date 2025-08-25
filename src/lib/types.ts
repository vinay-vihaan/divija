export interface Project {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    gallery_images: { add_image: string }[];
    project_highlights: { add_item: string }[];
    amenities: { add_item: string; add_image: string }[];
    location_highlights: { add_item: string }[];
    location_map: any;
    google_map: string;
  };
  featured_media_src_url?: string;
}
