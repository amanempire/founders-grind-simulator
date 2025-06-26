
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Coffee } from "lucide-react";

const Creator = () => {
  const handleSupportUs = () => {
    // This will redirect to a payment gateway (Stripe, PayPal, etc.)
    window.open('https://buy.stripe.com/your-payment-link', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-3xl w-full">
        <Card className="p-8 glass-effect animate-fade-in">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-bold mb-6 founder-text-gradient">
              A Message from the Creator
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Hi there! I'm <strong className="text-founder-red">Aman Tiwari</strong> - Creator of this game and there are more such to come.
            </p>
            
            <p>
              I have a unique way of learning and thus wanted to share, will be posting startup 
              case studies on the way, resources related to startup after each lesson.
            </p>
            
            <p>
              There's too much that this platform will see, join with me to stay together and 
              support me. Thanks for the read.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={handleSupportUs}
              size="lg"
              className="founder-gradient text-white text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <Coffee className="w-6 h-6 mr-3" />
              Support Us
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Help us create more amazing learning experiences
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Creator;
