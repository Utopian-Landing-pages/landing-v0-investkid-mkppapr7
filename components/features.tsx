import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from 'lucide-react';
import { Book, GraduationCap, TrendingUp } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  headline: string;
  features: FeatureProps[];
}

const Features = ({ headline, features }: FeaturesProps) => {
  const iconMap: { [key: string]: LucideIcon } = {
    "stock-market-icon": TrendingUp,
    "education-icon": Book,
    "progress-icon": GraduationCap,
  };

  return (
    <section id="features" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">{headline}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || TrendingUp;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
