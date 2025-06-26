
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Zap, Target, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 founder-text-gradient">
            Founder's Life
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
            It's Founder's Life. Live it.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Navigate the real challenges of building a startup. Make decisions that matter. 
            Learn from the consequences. No lectures. Just founder scars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 glass-effect hover:shadow-lg transition-all duration-300">
            <Zap className="w-12 h-12 text-founder-red mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real Decisions</h3>
            <p className="text-gray-600">Face the same challenges every founder encounters. Your choices shape your journey.</p>
          </Card>
          
          <Card className="p-6 glass-effect hover:shadow-lg transition-all duration-300">
            <Target className="w-12 h-12 text-founder-gold mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strategic Thinking</h3>
            <p className="text-gray-600">Manage time, network, and cash. Every resource matters in the startup game.</p>
          </Card>
          
          <Card className="p-6 glass-effect hover:shadow-lg transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-founder-yellow mb-4" />
            <h3 className="text-xl font-semibold mb-2">Learn by Doing</h3>
            <p className="text-gray-600">Experience the founder journey firsthand. Absorb lessons through gameplay, not textbooks.</p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/mode')}
            size="lg"
            className="founder-gradient text-white text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform duration-200 animate-pulse-glow"
          >
            Start Playing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
