"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getFooterSuggestions } from "@/app/actions";
import { ArrowRight, ExternalLink, LoaderCircle } from "lucide-react";

const initialState = {
  suggestions: [] as string[],
  error: null as string | null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending} aria-label="Get Suggestions">
      {pending ? <LoaderCircle className="animate-spin" /> : <ArrowRight />}
    </Button>
  );
}

export default function FooterResources() {
  const [state, formAction] = useFormState(getFooterSuggestions, initialState);

  return (
    <div>
      <h3 className="font-headline text-lg font-semibold mb-2">
        Find helpful resources
      </h3>
      <p className="text-muted-foreground mb-4 text-sm">
        Tell us what you're interested in, and our AI will find helpful links for you. (e.g., "mortgage calculators", "interior design trends")
      </p>
      <form action={formAction} className="flex gap-2 mb-4">
        <Input
          name="visitorQuery"
          placeholder="What are you looking for?"
          className="bg-background"
          required
        />
        <SubmitButton />
      </form>

      {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      
      {state.suggestions.length > 0 && (
        <div>
          <h4 className="font-semibold text-md mb-2">Here are some suggestions:</h4>
          <ul className="space-y-2">
            {state.suggestions.map((link, index) => (
              <li key={index} className="text-sm">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  {link}
                  <ExternalLink size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
