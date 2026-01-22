import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaUrl: string;
}

const Hero = ({ headline, subheadline, ctaText, ctaUrl }: HeroProps) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{headline}</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">{subheadline}</p>
        <Button size="lg" asChild className="text-base px-8 py-6 h-auto">
          <a href={ctaUrl}>{ctaText}</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
