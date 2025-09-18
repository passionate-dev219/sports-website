import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/2112hockey",
      icon: Twitter,
    },
    {
      name: "Instagram", 
      href: "https://instagram.com/2112hockey",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/2112hockeyagency", 
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-zinc-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="text-3xl font-black text-white">2112</div>
              <div className="text-xs font-medium text-white/60 uppercase tracking-wider">Hockey Agency</div>
            </Link>
            <p className="text-sm text-white/60">
              Elite hockey player representation and career management worldwide.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-white/10 hover:bg-red-500 rounded flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/60 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pro-hockey" className="text-sm text-white/60 hover:text-red-500 transition-colors">
                  Pro Hockey
                </Link>
              </li>
              <li>
                <Link to="/ncaa" className="text-sm text-white/60 hover:text-red-500 transition-colors">
                  NCAA/Junior
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Contract Negotiation</li>
              <li>Career Management</li>
              <li>Brand Development</li>
              <li>Training Coordination</li>
              <li>Draft Preparation</li>
              <li>Media Relations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:dwolski@2112hockeyagency.com" className="flex items-center space-x-2 text-white/60 hover:text-red-500 transition-colors">
                <Mail className="h-4 w-4" />
                <span>dwolski@2112hockeyagency.com</span>
              </a>
              <div className="flex items-center space-x-2 text-white/60">
                <Phone className="h-4 w-4" />
                <span>1-800-HOCKEY21</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <MapPin className="h-4 w-4" />
                <span>Toronto, ON, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} 2112 Hockey Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-white/40 hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-white/40 hover:text-red-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;