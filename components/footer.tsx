import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} InvestKid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
