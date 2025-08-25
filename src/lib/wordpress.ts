import { Project } from './types';

const placeholderProjects: Project[] = [
  {
    id: 1,
    slug: 'azure-heights',
    title: { rendered: 'Azure Heights' },
    content: { rendered: '<p>Azure Heights is a landmark of luxury living...</p>' },
    acf: {
      gallery_images: [{ add_image: 'https://placehold.co/600x400.png' }],
      project_highlights: [{ add_item: 'Ultra-modern apartments' }],
      amenities: [{ add_item: 'Rooftop Infinity Pool', add_image: 'https://placehold.co/150x150.png' }],
      location_highlights: [{ add_item: 'International Airport - 20 mins' }],
      location_map: {},
      google_map: '',
    },
  },
  {
    id: 2,
    slug: 'veridian-villas',
    title: { rendered: 'Veridian Villas' },
    content: { rendered: '<p>A serene enclave of modern villas...</p>' },
    acf: {
      gallery_images: [{ add_image: 'https://placehold.co/600x400.png' }],
      project_highlights: [{ add_item: 'Spacious and green' }],
      amenities: [{ add_item: 'Private Gardens', add_image: 'https://placehold.co/150x150.png' }],
      location_highlights: [{ add_item: 'City Center - 15 mins' }],
      location_map: {},
      google_map: '',
    },
  },
  {
    id: 3,
    slug: 'solstice-towers',
    title: { rendered: 'Solstice Towers' },
    content: { rendered: '<p>Iconic towers that touch the sky...</p>' },
    acf: {
      gallery_images: [{ add_image: 'https://placehold.co/600x400.png' }],
      project_highlights: [{ add_item: 'Panoramic city views' }],
      amenities: [{ add_item: 'Sky Lounge', add_image: 'https://placehold.co/150x150.png' }],
      location_highlights: [{ add_item: 'Financial District - 5 mins' }],
      location_map: {},
      google_map: '',
    },
  },
  {
    id: 4,
    slug: 'the-grand-canal',
    title: { rendered: 'The Grand Canal' },
    content: { rendered: '<p>Waterfront living at its finest...</p>' },
    acf: {
      gallery_images: [{ add_image: 'https://placehold.co/600x400.png' }],
      project_highlights: [{ add_item: 'Venetian-inspired architecture' }],
      amenities: [{ add_item: 'Gondola Rides', add_image: 'https://placehold.co/150x150.png' }],
      location_highlights: [{ add_item: 'Marina - 2 mins' }],
      location_map: {},
      google_map: '',
    },
  },
];

export async function getProjects(): Promise<Project[]> {
  return placeholderProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return placeholderProjects.find(p => p.slug === slug) || null;
}
