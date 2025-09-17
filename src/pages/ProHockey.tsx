import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProHockey = () => {
  const agents = [
    {
      name: "Darryl Wolski",
      email: "dwolski@2112hockeyagency.com",
      bio: "https://2112hockeyagency.com/2112-management-team/#post-1219"
    },
    {
      name: "Mario Lamoureux", 
      email: "mario.lamoureux9@gmail.com",
      bio: "https://2112hockeyagency.com/2112-management-team/#post-1219"
    },
    {
      name: "Ladislav Kohn",
      email: "lkohn29@hotmail.com", 
      bio: "https://2112hockeyagency.com/2112-management-team/#post-1219"
    }
  ];

  const globalAssociates = [
    { name: "Sergei Isakov", region: "Russia", email: "Serg-sport@mail.ru" },
    { name: "Lars Wunsche", region: "Germany and Europe", email: "43-lw@arcor.de" },
    { name: "Carson Shields", region: "Wingman Hockey Group", email: "" },
    { name: "Kyle Gagnon", region: "Monarch Advisory Group", email: "" },
    { name: "Walter Olsson", region: "Sweden", email: "" },
    { name: "Marcel Bacik", region: "Slovakia", email: "" },
    { name: "Renata Machakova", region: "Slovakia", email: "" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-hero gradient-text mb-6 animate-fade-in">Pro Hockey</h1>
          <p className="text-subtitle text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Professional hockey representation at the highest levels of the sport
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Our Company Section */}
        <section className="animate-fade-in">
          <h2 className="text-title text-center mb-12">Our Company</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  2112 Hockey Agency represents professional hockey players worldwide, 
                  providing expert guidance and representation at the highest levels of the sport. 
                  Our experienced team of agents and global associates ensure our clients 
                  receive the best opportunities and support throughout their professional careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Agents Section */}
        <section className="animate-slide-up">
          <h2 className="text-title text-center mb-12">Our Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <Card key={agent.name} className="card-premium group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center gradient-text">
                    {agent.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <a href={`mailto:${agent.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Agent
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a href={agent.bio} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Bio
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Global Associates Section */}
        <section className="animate-fade-in">
          <h2 className="text-title text-center mb-12">Global Associates</h2>
          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {globalAssociates.map((associate, index) => (
                  <div key={associate.name} className="text-center space-y-2">
                    <h3 className="font-semibold text-foreground">{associate.name}</h3>
                    <p className="text-sm text-primary font-medium">{associate.region}</p>
                    {associate.email && (
                      <a 
                        href={`mailto:${associate.email}`}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {associate.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center animate-slide-up">
          <h2 className="text-title mb-8">Contact 2112 Hockey Agency</h2>
          <Card className="card-premium max-w-md mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                Ready to take your professional hockey career to the next level?
              </p>
              <Button className="btn-hockey w-full" asChild>
                <a href="mailto:dwolski@2112hockeyagency.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ProHockey;