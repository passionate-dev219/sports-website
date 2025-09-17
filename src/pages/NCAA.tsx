import { Mail, ExternalLink, Calendar, BookOpen, Target, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NCAA = () => {
  const advisors = [
    {
      name: "Darryl Wolski",
      email: "dwolski@chfahockey.com",
      title: "Family Advisor"
    },
    {
      name: "Ladislav Kohn", 
      email: "lkohn29@hotmail.com",
      title: "Family Advisor"
    },
    {
      name: "Mario Lamoureux",
      email: "mario.lamoureux9@gmail.com",
      title: "Family Advisor"
    },
    {
      name: "Marcel Bacik",
      email: "hockey.mcorporation@gmail.com", 
      title: "Family Advisor"
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: "Camp Selection",
      description: "Strategic camp selection across North America. We get you multiple camp invites and help you choose which camps and teams fit you best for optimal development and exposure."
    },
    {
      icon: BookOpen, 
      title: "Name, Image & Likeness (NIL)",
      description: "Navigate the complex NIL landscape with expert guidance. We stay current with daily changes in NIL regulations and help answer your questions about opportunities and compliance."
    },
    {
      icon: Target,
      title: "Our Goal", 
      description: "To provide comprehensive guidance for hockey families navigating the amateur hockey landscape, from junior hockey through NCAA and USPORTS opportunities."
    },
    {
      icon: GraduationCap,
      title: "Education Focus",
      description: "Balancing athletic and academic excellence. We help you make informed decisions that prioritize both your hockey development and educational goals."
    }
  ];

  const links = [
    { title: "Testimonials", href: "#testimonials" },
    { title: "FAQ", href: "#faq" },
    { title: "NCAA Eligibility", href: "#eligibility" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-hero gradient-text mb-6 animate-fade-in">
            NCAA • USPORTS • Junior • Prep
          </h1>
          <p className="text-subtitle text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Expert guidance for amateur hockey players and families
          </p>
          
          {/* Free Consultation CTA */}
          <div className="mt-12 animate-fade-in">
            <Button className="btn-hockey text-lg px-8 py-4" asChild>
              <a 
                href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Staff Section */}
        <section className="animate-fade-in">
          <h2 className="text-title text-center mb-12">Our Advisory Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={advisor.name} className="card-premium group hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg gradient-text">
                    {advisor.name}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium">{advisor.title}</p>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <a href={`mailto:${advisor.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="animate-slide-up">
          <h2 className="text-title text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="card-premium group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="animate-fade-in">
          <h2 className="text-title text-center mb-12">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {links.map((link, index) => (
              <Card key={link.title} className="card-premium group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-4">{link.title}</h3>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={link.href}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center animate-slide-up">
          <Card className="card-premium max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-title mb-6">Ready to Start Your Journey?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Book a free consultation to discuss your hockey and academic goals with our expert advisors.
              </p>
              <div className="space-y-4">
                <Button className="btn-hockey w-full text-lg" asChild>
                  <a 
                    href="https://college-hockey-family-advisor.appointedd.com/app/600d297a4bd55d1ee6392262"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Or email us at{" "}
                  <a 
                    href="mailto:dwolski@chfahockey.com"
                    className="text-primary hover:underline"
                  >
                    dwolski@chfahockey.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default NCAA;