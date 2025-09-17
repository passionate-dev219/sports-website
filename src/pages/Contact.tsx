import { useState } from "react";
import { Mail, Send, User, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    playerName: "",
    cell: "",
    email: "",
    age: "",
    position: "",
    eliteProspectsLink: "",
    currentAgent: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend or email service
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Form Submitted Successfully!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        playerName: "",
        cell: "",
        email: "",
        age: "",
        position: "",
        eliteProspectsLink: "",
        currentAgent: "",
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-hero gradient-text mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-subtitle text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to take the next step in your hockey career? Get in touch with our team.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Player Information Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form to get started with 2112 Hockey Agency
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="playerName">Player Name *</Label>
                      <Input
                        id="playerName"
                        name="playerName"
                        value={formData.playerName}
                        onChange={handleInputChange}
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cell">Cell Phone *</Label>
                      <Input
                        id="cell"
                        name="cell"
                        type="tel"
                        value={formData.cell}
                        onChange={handleInputChange}
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="e.g., Center, Left Wing, Defenseman, Goalie"
                      required
                      className="bg-muted border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eliteProspectsLink">Elite Prospects Link</Label>
                    <Input
                      id="eliteProspectsLink"
                      name="eliteProspectsLink"
                      type="url"
                      value={formData.eliteProspectsLink}
                      onChange={handleInputChange}
                      placeholder="https://www.eliteprospects.com/player/..."
                      className="bg-muted border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentAgent">Current Agent (if any)</Label>
                    <Input
                      id="currentAgent"
                      name="currentAgent"
                      value={formData.currentAgent}
                      onChange={handleInputChange}
                      placeholder="Name of current representation"
                      className="bg-muted border-border"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hockey w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Information
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            {/* Direct Contact */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Prefer to reach out directly? Contact our main office:
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <a href="mailto:dwolski@2112hockeyagency.com">
                    <Mail className="w-4 h-4 mr-2" />
                    dwolski@2112hockeyagency.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="gradient-text">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Review</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll review your information and hockey background
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Initial Contact</h4>
                      <p className="text-sm text-muted-foreground">
                        Our team will reach out within 24-48 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Consultation</h4>
                      <p className="text-sm text-muted-foreground">
                        Schedule a detailed consultation to discuss your goals
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="gradient-text">Additional Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/pro-hockey">
                    <User className="w-4 h-4 mr-2" />
                    Pro Hockey Services
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/ncaa">
                    <Calendar className="w-4 h-4 mr-2" />
                    NCAA/Junior Programs
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;