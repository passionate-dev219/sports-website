import { Mail, ExternalLink, ArrowRight, Shield, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProHockey = () => {
  const agents = [
    {
      name: "Darryl Wolski",
      title: "President",
      email: "dwolski@2112hockeyagency.com",
      bio: "https://2112hockeyagency.com/2112-management-team/#post-1219",
      experience: "25+ years"
    },
    {
      name: "Mario Lamoureux",
      title: "Senior Agent", 
      email: "mario.lamoureux9@gmail.com",
      bio: "https://2112hockeyagency.com/2112-management-team/#post-1219",
      experience: "20+ years"
    },
    {
      name: "Ladislav Kohn",
      title: "European Agent",
      email: "lkohn29@hotmail.com", 
      bio: "https://2112hockeyagency.com/2112-management-team/#post-1219",
      experience: "15+ years"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "Contract Negotiation",
      description: "Expert negotiation for NHL, AHL, ECHL, and European leagues"
    },
    {
      icon: Trophy,
      title: "Career Management",
      description: "Strategic career planning and professional development"
    },
    {
      icon: Target,
      title: "Brand Development",
      description: "Personal brand building and endorsement opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Large Background */}
      <section className="relative h-[70vh] min-h-[600px] pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyMiIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <div className="text-sm font-bold text-red-500 uppercase tracking-wider mb-4">
                Professional Hockey
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white uppercase leading-tight mb-6">
                Elite Level
                <span className="block text-red-500">Representation</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                NHL, AHL, ECHL, and European league representation with proven results and unmatched expertise.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider">
                Contact an Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-colors">
                <service.icon className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-4">
            Our Agents
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Industry-leading agents with decades of combined experience representing elite athletes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <div key={agent.name} className="group relative">
                <div className="bg-black overflow-hidden">
                  {/* Agent Image Placeholder */}
                  <div className="aspect-[3/4] bg-gradient-to-b from-zinc-800 to-zinc-900 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-4xl font-black text-white/40">
                            {agent.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Agent Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{agent.name}</h3>
                    <p className="text-red-500 font-medium mb-2">{agent.title}</p>
                    <p className="text-white/60 text-sm mb-4">{agent.experience} Experience</p>
                    
                    <div className="space-y-2">
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 font-bold uppercase text-sm tracking-wider transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </a>
                      <a
                        href={agent.bio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 font-bold uppercase text-sm tracking-wider transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Bio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase text-center mb-4">
            Global Network
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Strategic partnerships worldwide ensuring comprehensive coverage for our clients
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Sergei Isakov", region: "Russia" },
              { name: "Lars Wunsche", region: "Germany" },
              { name: "Carson Shields", region: "USA" },
              { name: "Kyle Gagnon", region: "Canada" },
              { name: "Walter Olsson", region: "Sweden" },
              { name: "Marcel Bacik", region: "Slovakia" },
              { name: "Renata Machakova", region: "Czech" },
              { name: "Global Partner", region: "Asia" }
            ].map((partner) => (
              <div key={partner.name} className="bg-zinc-900 p-6 text-center hover:bg-zinc-800 transition-colors">
                <div className="text-3xl font-black text-red-500 mb-2">
                  {partner.region.substring(0, 3).toUpperCase()}
                </div>
                <h4 className="font-bold text-white">{partner.name}</h4>
                <p className="text-white/60 text-sm">{partner.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-4">
            Ready for Elite Representation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the 2112 Hockey Agency family and elevate your professional career.
          </p>
          <Button 
            className="bg-black hover:bg-gray-900 text-white px-12 py-6 text-lg font-bold uppercase tracking-wider"
            asChild
          >
            <a href="mailto:dwolski@2112hockeyagency.com">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProHockey;