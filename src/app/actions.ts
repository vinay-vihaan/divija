"use server";
import { suggestFooterResources, SuggestFooterResourcesInput } from '@/ai/flows/suggest-footer-resources';

export async function getFooterSuggestions(prevState: any, formData: FormData) {
  const visitorQuery = formData.get("visitorQuery") as string;

  if (!visitorQuery) {
    return { suggestions: [], error: "Please enter a query." };
  }

  try {
    const input: SuggestFooterResourcesInput = {
      pageContent: "A real estate website for a company named EstateView. The company builds and sells luxury properties, including residential homes, apartments, and commercial buildings. The site showcases their portfolio, details about the company, and highlights their commitment to quality and modern design.",
      visitorQuery: visitorQuery,
    };
    const result = await suggestFooterResources(input);
    return { suggestions: result.suggestions, error: null };
  } catch (error) {
    console.error("AI suggestion error:", error);
    return { suggestions: [], error: 'Failed to get suggestions. Please try again later.' };
  }
}
