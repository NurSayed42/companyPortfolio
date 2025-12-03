import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1A73E8 0%, #4F46E5 100%)' }}>
                <span className="text-white text-xl">⚡</span>
              </div>
              <span className="text-xl">TechSolutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building innovative software solutions for modern businesses. We transform ideas into reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-[#1A73E8] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1A73E8] transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Business Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@techsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
