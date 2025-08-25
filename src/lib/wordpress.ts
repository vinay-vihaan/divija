import type {Project} from './types';

const API_URL =
  process.env.WORDPRESS_API_URL || 'https://divija.vihaandigitals.com/wp-json/wp/v2';

async function fetchAPI(query = '', variables = {}) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Cache-Control': 'max-age=0',
  };

  const res = await fetch(`${API_URL}/${query}`, {
    method: 'GET',
    headers,
    next: {revalidate: 0},
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(
      `Failed to fetch API. Status: ${res.status}. Response: ${errorText}`
    );
    // Return empty array to prevent crash, since the server is blocking the request
    return [];
  }

  const json = await res.json();
  return json;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await fetchAPI('project?_fields=id,slug,title,acf,featured_media_src_url');
    return data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// export async function getProjectBySlug(slug: string): Promise<Project | null> {
//   try {
//     const data = await fetchAPI(`project?slug=${slug}&_fields=id,slug,title,content,acf`);
//     if (data && data.length > 0) {
//       return data[0];
//     }
//     return null;
//   } catch (error) {
//     console.error(`Error fetching project by slug: ${slug}`, error);
//     return null;
//   }
// }

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const res = await fetch(
    `https://divija.vihaandigitals.com/wp-json/wp/v2/project?slug=${encodeURIComponent(
      slug
    )}&acf_format=standard`,
    { next: { revalidate: 60 } } // ISR 1 min
  );

  if (!res.ok) return null;

  const data: Project[] = await res.json();
  return data.length > 0 ? data[0] : null;
}

