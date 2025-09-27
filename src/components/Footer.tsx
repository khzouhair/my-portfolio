import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-300 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-2" /> by Khadija Zouhair
          </p>
          <p className="text-slate-400 text-sm mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;