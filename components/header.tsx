import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-background py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-primary">InvestKid</a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Testimonials</a>
          <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Sign Up
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
