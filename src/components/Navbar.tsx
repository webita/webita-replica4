import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900">Servizi</button>
              <div className="absolute left-0 -mt-8 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
                <Link to="/webita-site" className="block px-4 py-2 hover:bg-gray-100">Webita SITE</Link>
                <Link to="/webita-social" className="block px-4 py-2 hover:bg-gray-100">Webita SOCIAL</Link>
                <Link to="/webita-business" className="block px-4 py-2 hover:bg-gray-100">Webita BUSINESS</Link>
                <Link to="/webita-ai" className="block px-4 py-2 hover:bg-gray-100">Webita AI</Link>
                <Link to="/webita-app" className="block px-4 py-2 hover:bg-gray-100">Webita APP</Link>
                <Link to="/webita-seo" className="block px-4 py-2 hover:bg-gray-100">Webita SEO</Link>
              </div>
            </div>
            <Link to="/video" className="text-gray-700 hover:text-gray-900">Video</Link>
            <Link to="/contatti" className="text-gray-700 hover:text-gray-900">Contatti</Link>
            <Link to="/analisi-seo" className="text-gray-700 hover:text-gray-900">Analisi SEO</Link>
            <Link to="/corso-ai" className="text-gray-700 hover:text-gray-900">Corso A.I.</Link>
            <button className="text-gray-700 hover:text-gray-900">🇮🇹</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
