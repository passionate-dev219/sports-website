import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/pro-hockey", label: "Pro Hockey" },
    { href: "/ncaa", label: "NCAA/Junior" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <nav className="flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-2xl lg:text-3xl font-black text-white tracking-tighter">2112</div>
          <div className="ml-2 text-xs lg:text-sm font-medium text-white/60 uppercase tracking-wider">
            Hockey Agency
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isActive(item.href) 
                  ? "text-red-500" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden">
            <div className="px-6 py-4 space-y-4 border-t border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block text-sm font-medium uppercase tracking-wider transition-colors ${
                    isActive(item.href) 
                      ? "text-red-500" 
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;