import { Mail, Calendar, ArrowRight, Users, GraduationCap, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const NCAA = () => {
  const categories = [
    {
      title: "NCAA Division I",
      subtitle: "Elite College Hockey",
      description: "Top-tier college hockey programs",
      image: "NCAA D1",
      stats: "60+ Programs"
    },
    {
      title: "NCAA Division III", 
      subtitle: "Academic Excellence",
      description: "Balance of athletics and academics",
      image: "NCAA D3",
      stats: "80+ Programs"
    },
    {
      title: "USPORTS",
      subtitle: "Canadian University",
      description: "Premier Canadian university hockey",
      image: "USPORTS",
      stats: "30+ Programs"
    },
    {
      title: "Junior A",
      subtitle: "Development Path",
      description: "USHL, BCHL, AJHL, OJHL",
      image: "Junior A",
      stats: "200+ Teams"
    },
    {
      title: "Prep Schools",
      subtitle: "Elite Preparation",
      description: "Top academic and hockey programs",
      image: "PREP",
      stats: "40+ Schools"
    },
    {
      title: "ACHA",
      subtitle: "Club Hockey",
      description: "Competitive college club hockey",
      image: "ACHA",
      stats: "500+ Teams"
    }
  ];

  const advisors = [
    {
      name: "Darryl Wolski",
      email: "dwolski@chfahockey.com",
      title: "Lead Family Advisor",
      specialization: "NCAA & Junior Hockey"
    },
    {
      name: "Ladislav Kohn", 
      email: "lkohn29@hotmail.com",
      title: "European Advisor",
      specialization: "International Players"
    },
    {
      name: "Mario Lamoureux",
      email: "mario.lamoureux9@gmail.com",
      title: "Senior Advisor",
      specialization: "USPORTS & CHL"
    },
    {
      name: "Marcel Bacik",
      email: "hockey.mcorporation@gmail.com",
      title: "Development Advisor",
      specialization: "Junior Development"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <div className="text-sm font-bold text-red-500 uppercase tracking-wider mb-4">
                Amateur Hockey Excellence
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white uppercase leading-tight mb-6">
                NCAA • USPORTS
                <span className="block text-red-500">Junior • Prep</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Expert guidance navigating the complex amateur hockey landscape from junior to college.
              </p>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider"
                asChild
              >
                <a 
                  href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-4">
            Development Pathways
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Comprehensive guidance across all amateur hockey levels and educational opportunities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="group relative overflow-hidden">
                <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300">
                  {/* Category Image/Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="relative z-10 text-center">
                      <div className="text-4xl font-black text-white/20 mb-2">{category.image}</div>
                      <div className="text-red-500 font-bold text-sm">{category.stats}</div>
                    </div>
                  </div>
                  
                  {/* Category Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-red-500 font-medium mb-2">{category.subtitle}</p>
                    <p className="text-white/60 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-12">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black p-6 text-center">
              <Trophy className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Camp Selection</h3>
              <p className="text-white/60 text-sm">Strategic camp placement for optimal exposure</p>
            </div>
            
            <div className="bg-black p-6 text-center">
              <GraduationCap className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Academic Planning</h3>
              <p className="text-white/60 text-sm">Balancing hockey with educational excellence</p>
            </div>
            
            <div className="bg-black p-6 text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">NIL Guidance</h3>
              <p className="text-white/60 text-sm">Navigate name, image, likeness opportunities</p>
            </div>
            
            <div className="bg-black p-6 text-center">
              <Target className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Career Development</h3>
              <p className="text-white/60 text-sm">Long-term planning for hockey success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-4">
            Family Advisors
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Experienced advisors dedicated to guiding hockey families through every step
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="bg-zinc-900 p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-black text-white/40">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
                  <p className="text-red-500 font-medium text-sm">{advisor.title}</p>
                  <p className="text-white/60 text-xs mt-1">{advisor.specialization}</p>
                </div>
                <a
                  href={`mailto:${advisor.email}`}
                  className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 font-bold uppercase text-sm tracking-wider transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-white mb-2">500+</div>
              <div className="text-white/90 font-bold uppercase">Players Placed</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-white/90 font-bold uppercase">Free Service</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">20+</div>
              <div className="text-white/90 font-bold uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-white/90 font-bold uppercase">Family Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Expert guidance for your hockey and academic future - completely free for families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider"
              asChild
            >
              <a 
                href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-bold uppercase tracking-wider"
              asChild
            >
              <a href="mailto:dwolski@chfahockey.com">
                Email Us
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NCAA;