import React from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/cta';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero
        headline="Unlock Your Financial Future: InvestKid Makes Learning Fun!"
        subheadline="A risk-free virtual stock market game and bite-sized lessons that transform young minds into savvy investors."
        ctaText="Start Learning Free"
        ctaUrl="#signup"
      />
      <Features
        headline="Why InvestKid?"
        features={[
          {
            title: "Virtual Stock Market",
            description: "Experience the thrill of investing without risking real money. Buy, sell, and trade stocks in a realistic simulation.",
            icon: "stock-market-icon",
          },
          {
            title: "Bite-Sized Lessons",
            description: "Learn investing basics with fun, easy-to-understand content. No more confusing jargon or complicated math!",
            icon: "education-icon",
          },
          {
            title: "Progress Tracking",
            description: "Monitor your progress and see how your investment skills improve over time. Earn rewards as you learn and grow.",
            icon: "progress-icon",
          },
        ]}
      />

      <Testimonials
        headline="Real Results, Real Feedback"
        testimonials={[
          {
            quote: "InvestKid has made learning about investing so much easier for my son. He's actually excited about saving money now!",
            author: "Sarah J.",
            role: "Parent",
            company: "N/A",
          },
          {
            quote: "I wish I had InvestKid when I was a kid! It's a fantastic way to introduce young people to the world of finance.",
            author: "Michael B.",
            role: "Parent",
            company: "N/A",
          },
        ]}
      />
      <CTA
        headline="Give Your Child the Gift of Financial Literacy"
        subheadline="Join InvestKid today and set them on the path to a brighter financial future."
        ctaText="Sign Up for Free"
        ctaUrl="#signup"
      />
      <FAQ
        headline="Everything You Need to Know"
        faqs={[
          {
            question: "Is InvestKid safe for my child?",
            answer: "Yes! InvestKid uses a virtual stock market with no real money involved. Your child can learn without any financial risk.",
          },
          {
            question: "What age is InvestKid suitable for?",
            answer: "InvestKid is designed for kids aged 12-18 who are interested in learning about investing.",
          },
          {
            question: "How much does InvestKid cost?",
            answer: "InvestKid offers a free version with limited features. A premium subscription unlocks additional content and benefits.",
          },
        ]}
      />
      <Footer />
    </>
  );
};

export default HomePage;
