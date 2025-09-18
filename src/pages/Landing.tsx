import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, Target } from "lucide-react";
import splashBanner from "@/assets/splash-banner.jpg";
import athlete1 from "@/assets/pexels-photo-20025290.jpeg";
import athlete2 from "@/assets/pexels-photo-6468941.jpeg";
import athlete3 from "@/assets/pexels-photo-6557326.jpeg";
import athlete4 from "@/assets/pexels-photo-12945034.jpeg";
import athlete5 from "@/assets/pexels-photo-20025299.jpeg";
import athlete6 from "@/assets/pexels-photo-6557333.jpeg";
import athlete7 from "@/assets/pexels-photo-6847287.jpeg";
import athlete8 from "@/assets/pexels-photo-8972986.jpeg";

const Landing = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-16 lg:pt-20">
        <div className="relative w-full h-screen max-h-[900px]">
          <img 
            src={splashBanner}
            alt="2112 Hockey Agency"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-4">
                Elite Hockey
                <span className="block text-red-500">Representation</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
                Premier hockey player representation across all levels. 
                Professional guidance for your hockey career journey.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pro-hockey">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider">
                    Pro Hockey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/ncaa">
                  <Button className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-bold uppercase tracking-wider">
                    NCAA / Junior
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-black text-red-500 mb-2">150+</div>
              <div className="text-xl font-bold text-white uppercase tracking-wider">Players Represented</div>
              <div className="text-sm text-white/60 mt-2">Across all levels of hockey</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-red-500 mb-2">25</div>
              <div className="text-xl font-bold text-white uppercase tracking-wider">Years Experience</div>
              <div className="text-sm text-white/60 mt-2">In hockey management</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-red-500 mb-2">95%</div>
              <div className="text-xl font-bold text-white uppercase tracking-wider">Success Rate</div>
              <div className="text-sm text-white/60 mt-2">Player placement success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-12">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden bg-black border border-white/10 hover:border-red-500/50 transition-all">
              <div className="p-8">
                <Trophy className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Pro Hockey</h3>
                <p className="text-white/60 mb-4">
                  NHL, AHL, ECHL, and European league representation and contract negotiation.
                </p>
                <Link to="/pro-hockey" className="text-red-500 font-bold uppercase text-sm hover:text-red-400 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative overflow-hidden bg-black border border-white/10 hover:border-red-500/50 transition-all">
              <div className="p-8">
                <Users className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">NCAA & Junior</h3>
                <p className="text-white/60 mb-4">
                  College recruitment, junior hockey placement, and development pathway guidance.
                </p>
                <Link to="/ncaa" className="text-red-500 font-bold uppercase text-sm hover:text-red-400 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden bg-black border border-white/10 hover:border-red-500/50 transition-all">
              <div className="p-8">
                <Target className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Career Development</h3>
                <p className="text-white/60 mb-4">
                  Complete career management, training coordination, and brand development.
                </p>
                <Link to="/contact" className="text-red-500 font-bold uppercase text-sm hover:text-red-400 inline-flex items-center">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Athletes Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-12">
            Featured Athletes
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: athlete1, name: "Connor McDavid", position: "Center", team: "Edmonton Oilers" },
              { img: athlete2, name: "Sidney Crosby", position: "Center", team: "Pittsburgh Penguins" },
              { img: athlete3, name: "Alex Ovechkin", position: "Left Wing", team: "Washington Capitals" },
              { img: athlete4, name: "Nathan MacKinnon", position: "Center", team: "Colorado Avalanche" },
              { img: athlete5, name: "Erik Karlsson", position: "Defenseman", team: "San Jose Sharks" },
              { img: athlete6, name: "David Pastrnak", position: "Right Wing", team: "Boston Bruins" },
              { img: athlete7, name: "Leon Draisaitl", position: "Center", team: "Edmonton Oilers" },
              { img: athlete8, name: "Auston Matthews", position: "Center", team: "Toronto Maple Leafs" }
            ].map((athlete, i) => (
              <div key={i} className="relative group overflow-hidden bg-zinc-900 aspect-square">
                <img 
                  src={athlete.img} 
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="text-white font-bold">{athlete.name}</div>
                  <div className="text-white/60 text-sm">{athlete.position} • {athlete.team}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-4">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the 2112 Hockey Agency family and take your career to the next level.
          </p>
          <Link to="/contact">
            <Button className="bg-black hover:bg-gray-900 text-white px-12 py-6 text-lg font-bold uppercase tracking-wider">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;