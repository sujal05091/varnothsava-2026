import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'About' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-black border-t border-neon-green/20">
      {/* Neon glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50" />
      
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue blur-xl opacity-30" />
              <h3 className="relative font-heading text-3xl font-bold text-neon-green">
                VARNOTHSAVA
              </h3>
            </div>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              The ultimate cultural fest of SMVITM. Experience the fusion of art, music, dance, and technology in 2026.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-neon-green/10 border border-neon-green/30 hover:bg-neon-green hover:border-neon-green transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-neon-green group-hover:text-black transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-sm text-foreground/70 hover:text-neon-green transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-neon-green transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm text-foreground/70">
                  SMVITM Campus, Bantakal, Udupi, Karnataka
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:varnothsava@smvitm.ac.in"
                  className="font-paragraph text-sm text-foreground/70 hover:text-neon-green transition-colors"
                >
                  varnothsava@smvitm.ac.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919876543210"
                  className="font-paragraph text-sm text-foreground/70 hover:text-neon-green transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-6">Stay Updated</h4>
            <p className="font-paragraph text-sm text-foreground/70 mb-4">
              Get the latest updates about events and announcements.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-background border border-neon-green/30 rounded-lg font-paragraph text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-neon-green transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2.5 bg-neon-green text-black font-paragraph text-sm font-bold rounded-lg hover:bg-neon-green/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neon-green/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-paragraph text-sm text-foreground/60 text-center md:text-left">
              © 2026 VARNOTHSAVA. All rights reserved. | SMVITM
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-paragraph text-sm text-foreground/60 hover:text-neon-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-paragraph text-sm text-foreground/60 hover:text-neon-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="h-1 bg-gradient-to-r from-neon-blue via-neon-green to-secondary" />
    </footer>
  );
}
