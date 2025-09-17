import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import splashBanner from "@/assets/splash-banner.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${splashBanner})` }}
        >
          <div className="absolute inset-0 bg-arena-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-hero gradient-text mb-4">2112</h1>
            <p className="text-subtitle text-ice-white/90 tracking-wide">
              HOCKEY AGENCY™
            </p>
          </div>

          {/* Main CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto animate-slide-up">
            {/* Pro Hockey Button */}
            <Button
              asChild
              className="btn-hockey h-24 text-xl font-black tracking-wide animate-hockey-pulse"
            >
              <Link to="/pro-hockey">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black">CLICK HERE FOR</div>
                  <div className="text-3xl md:text-4xl font-black mt-1">PRO HOCKEY</div>
                </div>
              </Link>
            </Button>

            {/* NCAA/Junior Button */}
            <Button
              asChild
              className="btn-hockey h-24 text-xl font-black tracking-wide"
              style={{ animationDelay: "0.5s" }}
            >
              <Link to="/ncaa">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black">CLICK HERE FOR</div>
                  <div className="text-xl md:text-2xl font-black mt-1">NCAA • USPORTS • JUNIOR</div>
                  <div className="text-xl md:text-2xl font-black">AND PREP</div>
                </div>
              </Link>
            </Button>
          </div>

          {/* Subtitle */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "1s" }}>
            <p className="text-lg text-ice-white/80 max-w-2xl mx-auto leading-relaxed">
              Premier hockey player representation across all levels. 
              Professional guidance for your hockey career journey.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ice-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ice-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;