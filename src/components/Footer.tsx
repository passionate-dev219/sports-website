import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Company */}
          <div className="text-center md:text-left">
            <div className="text-title gradient-text mb-2">2112</div>
            <div className="text-lg font-semibold text-muted-foreground mb-2">
              Hockey Agency
            </div>
            <p className="text-sm text-muted-foreground">
              Premier hockey player representation worldwide
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <a 
              href="mailto:dwolski@2112hockeyagency.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              dwolski@2112hockeyagency.com
            </a>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 2112 Hockey Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;