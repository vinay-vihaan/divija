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
    gallery_images: { add_image: string }[]; // <-- ensure string
    project_highlights: { add_item: string }[];
    amenities: { add_item: string; add_image: string }[];
    location_highlights: { add_item: string }[];
    location_map: any;
    google_map: string;
    sub_title: string;
    site_location: string;
    rera_logo: string;
    rera_number: string;
    rera_lp_number: string;
    project_logo: string;
    project_layout: string;
  };
  featured_media_src_url?: string;
_embedded?: {
  ["wp:featuredmedia"]?: { id: number; source_url: string }[];
  ["wp:attachment"]?: { id: number; source_url: string }[];
};

}




// export interface Project {
//   id: number;
//   slug: string;
//   title: {
//     rendered: string;
//   };
//   content: {
//     rendered: string;
//   };
//   acf: {
//     gallery_images: { add_image: string }[];
//     project_highlights: { add_item: string }[];
//     amenities: { add_item: string; add_image: string }[];
//     location_highlights: { add_item: string }[];
//     location_map: any;
//     google_map: string;
//   };
//   featured_media_src_url?: string;
//     _embedded?: {
//     ["wp:featuredmedia"]?: { source_url: string }[];
//     ["wp:attachment"]?: { source_url: string }[];
//   };
// }
