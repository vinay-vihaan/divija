import { Project } from './types';

const API_URL = process.env.WORDPRESS_API_URL || 'https://divija.vihaandigitals.com/wp-json/wp/v2';

async function fetchAPI(query: string, options: RequestInit = {}) {
    const headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'Accept': 'application/json',
    };

    const mergedOptions: RequestInit = {
        method: 'GET',
        headers,
        next: { revalidate: 0 },
        ...options,
    };

    try {
        const res = await fetch(`${API_URL}/${query}`, mergedOptions);

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Failed to fetch API. Status: ${res.status}. Response: ${errorText}`);
            return null;
        }

        const json = await res.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch API:', error);
        return null;
    }
}

export async function getProjects(): Promise<Project[]> {
    const data = await fetchAPI('project?acf_format=standard');
    return data || [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const data = await fetchAPI(`project?slug=${slug}&acf_format=standard`);
    if (Array.isArray(data) && data.length > 0) {
        return data[0];
    }
    return null;
}
