import React from 'react';
import { Button } from '@/components/ui/button';

interface CTAProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaUrl: string;
}

const CTA = ({ headline, subheadline, ctaText, ctaUrl }: CTAProps) => {
  return (
    <section id="cta" className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{headline}</h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 text-balance">{subheadline}</p>
        <Button size="lg" variant="secondary" asChild className="text-base px-8 py-6 h-auto">
          <a href={ctaUrl}>{ctaText}</a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
