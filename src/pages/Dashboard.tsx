
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadGameState, saveGameState } from "@/utils/gameStorage";
import { GameState, ARCS } from "@/types/game";
import { ResourceMeter } from "@/components/ResourceMeter";
import { Lock, CheckCircle } from "lucide-react";
import { DecisionModal } from "@/components/DecisionModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedArc, setSelectedArc] = useState<number | null>(null);

  useEffect(() => {
    const state = loadGameState();
    if (!state || !state.character) {
      navigate('/select');
      return;
    }
    setGameState(state);
  }, [navigate]);

  const handleArcClick = (arcId: number) => {
    if (!gameState) return;
    
    // Check if arc is available
    if (arcId > gameState.currentArc) return;
    
    setSelectedArc(arcId);
  };

  const handleDecisionComplete = (updatedGameState: GameState) => {
    setGameState(updatedGameState);
    setSelectedArc(null);
    saveGameState(updatedGameState);
    
    // Check if game is complete
    if (updatedGameState.isComplete) {
      navigate('/complete');
    }
  };

  if (!gameState) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 founder-text-gradient">
            Founder's Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Playing as <span className="font-semibold text-founder-red">{gameState.character?.name}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <ResourceMeter 
              time={gameState.resources.time}
              network={gameState.resources.network}
              cash={gameState.resources.cash}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ARCS.map((arc, index) => {
                const isAvailable = arc.id <= gameState.currentArc;
                const isComplete = gameState.arcProgress[index] >= 100;
                const progress = gameState.arcProgress[index];
                
                return (
                  <Card 
                    key={arc.id}
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      isAvailable 
                        ? 'glass-effect hover:shadow-lg hover:border-founder-gold' 
                        : 'bg-gray-100 opacity-50 cursor-not-allowed'
                    } ${isComplete ? 'border-2 border-green-500' : ''}`}
                    onClick={() => isAvailable && handleArcClick(arc.id)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-founder-red truncate">
                        Arc {arc.id}
                      </h3>
                      {!isAvailable && <Lock className="w-5 h-5 text-gray-400" />}
                      {isComplete && <CheckCircle className="w-5 h-5 text-green-500" />}
                    </div>
                    
                    <h4 className="font-semibold mb-2">{arc.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {arc.description}
                    </p>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    
                    {isAvailable && !isComplete && (
                      <Button 
                        size="sm" 
                        className="w-full mt-2 founder-gradient text-white"
                      >
                        Continue
                      </Button>
                    )}
                    
                    {isComplete && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full mt-2 border-green-500 text-green-600"
                      >
                        Completed
                      </Button>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/select')}
            className="text-gray-600 hover:text-gray-800"
          >
            Change Character
          </Button>
        </div>
      </div>

      {selectedArc && (
        <DecisionModal
          gameState={gameState}
          arcId={selectedArc}
          onComplete={handleDecisionComplete}
          onClose={() => setSelectedArc(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
