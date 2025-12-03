import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1A73E8 0%, #4F46E5 100%)' }}>
              <span className="text-white text-xl">⚡</span>
            </div>
            <span className="text-xl" style={{ color: '#1F2937' }}>TechSolutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path) ? 'text-[#1A73E8]' : 'text-[#374151] hover:text-[#1A73E8]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t" style={{ borderColor: '#E5E7EB' }}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 ${
                  isActive(link.path) ? 'text-[#1A73E8]' : 'text-[#374151]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
