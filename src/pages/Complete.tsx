import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadGameState, clearGameState } from "@/utils/gameStorage";
import { GameState } from "@/types/game";
import { Trophy, Brain, Target } from "lucide-react";

const Complete = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [showCreatorMessage, setShowCreatorMessage] = useState(false);

  useEffect(() => {
    const state = loadGameState();
    if (!state || !state.isComplete) {
      navigate('/dashboard');
      return;
    }
    setGameState(state);
  }, [navigate]);

  const handleRestart = () => {
    clearGameState();
    navigate('/');
  };

  const handleDontClick = () => {
    setShowCreatorMessage(!showCreatorMessage);
  };

  const getFinalScore = () => {
    if (!gameState) return 0;
    const { time, network, cash } = gameState.resources;
    return Math.round((time + network + cash) / 3);
  };

  const getPerformanceRating = (score: number) => {
    if (score >= 80) return { title: "Legendary Founder", description: "You've mastered the startup game." };
    if (score >= 60) return { title: "Successful Entrepreneur", description: "You've built something meaningful." };
    if (score >= 40) return { title: "Learning Founder", description: "Every failure teaches valuable lessons." };
    return { title: "Resilient Builder", description: "The journey continues, wisdom gained." };
  };

  if (!gameState) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const finalScore = getFinalScore();
  const rating = getPerformanceRating(finalScore);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <Trophy className="w-24 h-24 text-founder-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 founder-text-gradient">
            Congratulations
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
            You've earned something more than money — <strong>knowledge.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 glass-effect text-center">
            <Brain className="w-12 h-12 text-founder-red mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{rating.title}</h3>
            <p className="text-gray-600">{rating.description}</p>
          </Card>
          
          <Card className="p-6 glass-effect text-center">
            <Target className="w-12 h-12 text-founder-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Final Score</h3>
            <p className="text-3xl font-bold founder-text-gradient">{finalScore}/100</p>
          </Card>
          
          <Card className="p-6 glass-effect text-center">
            <Trophy className="w-12 h-12 text-founder-yellow mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Journey Complete</h3>
            <p className="text-gray-600">6 arcs conquered, lessons learned</p>
          </Card>
        </div>

        <Card className="p-8 glass-effect mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Final Resources</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Time Remaining</p>
              <p className="text-3xl font-bold text-blue-600">{gameState.resources.time}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Network Strength</p>
              <p className="text-3xl font-bold text-purple-600">{gameState.resources.network}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Cash Position</p>
              <p className="text-3xl font-bold text-green-600">{gameState.resources.cash}</p>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Every founder's journey is unique. The decisions you made, the resources you managed, 
            and the challenges you overcame have shaped your understanding of what it means to build something from nothing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleRestart}
              size="lg"
              className="founder-gradient text-white text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform duration-200"
            >
              Start New Journey
            </Button>
            
            <Button 
              onClick={handleDontClick}
              variant="outline"
              size="lg"
              className="text-xl px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-200 border-2"
            >
              Don't click
            </Button>
          </div>

          {showCreatorMessage && (
            <Card className="mt-8 p-8 glass-effect max-w-2xl mx-auto animate-fade-in">
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-bold founder-text-gradient mb-4">A Message from the Creator</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm <strong>Aman Tiwari</strong> - Creator of this game and there are more such to come. 
                  I have a unique way of learning and thus wanted to share, will be posting startup 
                  case studies on the way, resources related to startup after each lesson.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  There's too much that this platform will see, join with me to stay together and 
                  support me. Thanks for the read.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Complete;
