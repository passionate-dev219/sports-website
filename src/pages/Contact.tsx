import { useState } from "react";
import { Mail, Send, User, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Form Submitted Successfully!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      
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
    <div className="min-h-screen bg-black">
      <div className="flex min-h-screen pt-16 lg:pt-20">
        {/* Left Side - Image/Brand Section */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyMiIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          </div>
          
          <div className="relative z-10 flex flex-col justify-center px-12 py-20">
            <div className="max-w-md">
              <h1 className="text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-6">
                Join The
                <span className="block text-red-500">Elite</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Take the first step towards elite hockey representation. Our team is ready to elevate your career.
              </p>
              
              {/* Stats */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-black text-red-500">300+</div>
                  <div className="text-white/60">Players Represented</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-black text-red-500">25</div>
                  <div className="text-white/60">Years Experience</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-black text-red-500">24/7</div>
                  <div className="text-white/60">Professional Support</div>
                </div>
              </div>
              
              {/* Direct Contact */}
              <div className="space-y-3">
                <p className="text-white/60 text-sm uppercase tracking-wider">Direct Contact</p>
                <a 
                  href="mailto:dwolski@2112hockeyagency.com"
                  className="flex items-center text-white hover:text-red-500 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  dwolski@2112hockeyagency.com
                </a>
                <a 
                  href="tel:1-800-HOCKEY21"
                  className="flex items-center text-white hover:text-red-500 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  1-800-HOCKEY21
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-black uppercase mb-2">
                Player Information
              </h2>
              <p className="text-gray-600">
                Fill out this form to get started with 2112 Hockey Agency
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="playerName" className="text-black font-bold uppercase text-xs tracking-wider">
                    Player Name *
                  </Label>
                  <Input
                    id="playerName"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-gray-100 border-gray-300 text-black"
                  />
                </div>
                <div>
                  <Label htmlFor="age" className="text-black font-bold uppercase text-xs tracking-wider">
                    Age *
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-gray-100 border-gray-300 text-black"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-black font-bold uppercase text-xs tracking-wider">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 bg-gray-100 border-gray-300 text-black"
                />
              </div>

              <div>
                <Label htmlFor="cell" className="text-black font-bold uppercase text-xs tracking-wider">
                  Cell Phone *
                </Label>
                <Input
                  id="cell"
                  name="cell"
                  type="tel"
                  value={formData.cell}
                  onChange={handleInputChange}
                  required
                  className="mt-1 bg-gray-100 border-gray-300 text-black"
                />
              </div>

              <div>
                <Label htmlFor="position" className="text-black font-bold uppercase text-xs tracking-wider">
                  Position *
                </Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="e.g., Center, Left Wing, Defenseman, Goalie"
                  required
                  className="mt-1 bg-gray-100 border-gray-300 text-black"
                />
              </div>

              <div>
                <Label htmlFor="eliteProspectsLink" className="text-black font-bold uppercase text-xs tracking-wider">
                  Elite Prospects Link
                </Label>
                <Input
                  id="eliteProspectsLink"
                  name="eliteProspectsLink"
                  type="url"
                  value={formData.eliteProspectsLink}
                  onChange={handleInputChange}
                  placeholder="https://www.eliteprospects.com/player/..."
                  className="mt-1 bg-gray-100 border-gray-300 text-black"
                />
              </div>

              <div>
                <Label htmlFor="currentAgent" className="text-black font-bold uppercase text-xs tracking-wider">
                  Current Agent (if any)
                </Label>
                <Input
                  id="currentAgent"
                  name="currentAgent"
                  value={formData.currentAgent}
                  onChange={handleInputChange}
                  placeholder="Name of current representation"
                  className="mt-1 bg-gray-100 border-gray-300 text-black"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-gray-900 text-white py-4 text-lg font-bold uppercase tracking-wider mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Information
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Mobile Contact Info */}
            <div className="lg:hidden mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm mb-4">Or contact us directly:</p>
              <div className="space-y-2">
                <a 
                  href="mailto:dwolski@2112hockeyagency.com"
                  className="flex items-center text-gray-900 hover:text-red-500 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  dwolski@2112hockeyagency.com
                </a>
                <a 
                  href="tel:1-800-HOCKEY21"
                  className="flex items-center text-gray-900 hover:text-red-500 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  1-800-HOCKEY21
                </a>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-bold text-black uppercase text-xs tracking-wider mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                  <span className="text-gray-600">We review your information</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                  <span className="text-gray-600">Initial contact within 24-48 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                  <span className="text-gray-600">Schedule detailed consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;