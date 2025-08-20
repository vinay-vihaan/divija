'use server';

/**
 * @fileOverview A flow that suggests related external resources for the site footer using AI.
 *
 * - suggestFooterResources - A function that generates suggestions of related external resources.
 * - SuggestFooterResourcesInput - The input type for the suggestFooterResources function.
 * - SuggestFooterResourcesOutput - The return type for the suggestFooterResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFooterResourcesInputSchema = z.object({
  pageContent: z.string().describe('The content of the current page.'),
  visitorQuery: z.string().describe('The visitor\'s query or interest.'),
});
export type SuggestFooterResourcesInput = z.infer<typeof SuggestFooterResourcesInputSchema>;

const SuggestFooterResourcesOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of suggested external resources (URLs) related to the page content and visitor query.'),
});
export type SuggestFooterResourcesOutput = z.infer<typeof SuggestFooterResourcesOutputSchema>;

export async function suggestFooterResources(input: SuggestFooterResourcesInput): Promise<SuggestFooterResourcesOutput> {
  return suggestFooterResourcesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFooterResourcesPrompt',
  input: {schema: SuggestFooterResourcesInputSchema},
  output: {schema: SuggestFooterResourcesOutputSchema},
  prompt: `You are an AI assistant that suggests related external resources for a website footer.

  Based on the content of the current page and the visitor's query or interest, suggest relevant external resources (URLs).

  Page Content: {{{pageContent}}}
  Visitor Query: {{{visitorQuery}}}

  Suggestions should be directly related to real estate, design, location-specific information, or financial tools.
  Return a JSON array of URLs.
  Format Example: [\'https://example.com/design-articles\', \'https://example.com/location-info\', \'https://example.com/financial-tools\']`,
});

const suggestFooterResourcesFlow = ai.defineFlow(
  {
    name: 'suggestFooterResourcesFlow',
    inputSchema: SuggestFooterResourcesInputSchema,
    outputSchema: SuggestFooterResourcesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
