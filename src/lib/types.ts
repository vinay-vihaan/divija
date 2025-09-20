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
    original_logo: string;
    brochure: string;
  };
  featured_media_src_url?: string;
_embedded?: {
  ["wp:featuredmedia"]?: { id: number; source_url: string }[];
  ["wp:attachment"]?: { id: number; source_url: string }[];
};

}

export interface Homepage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected?: boolean;
  };
  acf: {
    hero_section?: {
      first_image: string;
      tittle: string;
      description: string;
    }[];
    about_section: { // About section
      image1: string;
      image2: string;
      sub_tittle: string;
      tittle: string;
      description: string;
    };
    stats?: {
      stats_number: number;
      stats_tittle: string;
    }[];
    cmd_message?: {
      image: string;
      cmd_tittle: string;
      cmd_description: string;
      name: string;
      designation: string;
    };
    why_chooose_us?: {
      icon_type: string;
      tittle: string;
      description: string;
    }[];
    testimonials?: {
      profile_image: string;
      name: string;
      desigantion: string;
      quote: string;
    }[];
    contact_us?: {
      icon_text: string;
      tittle: string;
      decription: string;
    }[];
  };
  featured_media_src_url?: string;
  _embedded?: {
    ["wp:featuredmedia"]?: { id: number; source_url: string }[];
    ["wp:attachment"]?: { id: number; source_url: string }[];
  };
  date?: string;
  date_gmt?: string;
  modified?: string;
  modified_gmt?: string;
  guid?: {
    rendered: string;
  };
  status?: string;
  type?: string;
  link?: string;
  template?: string;
  meta?: Record<string, any>;
  categories?: number[];
  tags?: number[];
  class_list?: string[];
  _links?: Record<string, any>;
}



