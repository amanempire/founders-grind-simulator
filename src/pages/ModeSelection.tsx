
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Play, Lock } from "lucide-react";

const ModeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 founder-text-gradient">
            Choose Your Path
          </h1>
          <p className="text-lg text-gray-600">
            Two ways to experience the founder journey. Start with Classic, graduate to Chaotic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 glass-effect hover:shadow-xl transition-all duration-300 border-2 border-founder-gold">
            <div className="flex items-center mb-6">
              <Play className="w-8 h-8 text-founder-gold mr-3" />
              <h2 className="text-3xl font-bold text-founder-red">Classic Mode</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              6 structured arcs that simulate the startup grind. Make real decisions, 
              see the outcomes, and quietly absorb the lessons. No lectures. Just founder scars.
            </p>
            
            <div className="space-y-2 mb-8">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-founder-gold rounded-full mr-3"></div>
                <span>Find Your Big Idea</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-founder-gold rounded-full mr-3"></div>
                <span>Build Your Dream Team</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-founder-gold rounded-full mr-3"></div>
                <span>Scale & Exit</span>
              </div>
            </div>
            
            <Button 
              onClick={() => navigate('/select')}
              className="w-full founder-gradient text-white text-lg py-3 rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Play Classic Mode
            </Button>
          </Card>

          <Card className="p-8 glass-effect opacity-75 border-2 border-gray-300">
            <div className="flex items-center mb-6">
              <Lock className="w-8 h-8 text-gray-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-400">Chaotic Mode</h2>
            </div>
            
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">
              You bet... you lose. Your cofounder disappears. Your friend dies. Parents disown you. 
              Everything breaks — including you. Play it when you're ready.
            </p>
            
            <div className="space-y-2 mb-8">
              <div className="flex items-center text-gray-400">
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                <span>Random catastrophic events</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                <span>Relationship destruction</span>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                <span>Ultimate reality check</span>
              </div>
            </div>
            
            <Button 
              disabled
              className="w-full bg-gray-300 text-gray-500 text-lg py-3 rounded-lg cursor-not-allowed"
            >
              Coming Soon
            </Button>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
