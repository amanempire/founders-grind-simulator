
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { GameState, ARCS, Choice } from "@/types/game";
import { toast } from "sonner";
import { Clock, Users, DollarSign } from "lucide-react";

interface DecisionModalProps {
  gameState: GameState;
  arcId: number;
  onComplete: (updatedGameState: GameState) => void;
  onClose: () => void;
}

export const DecisionModal = ({ gameState, arcId, onComplete, onClose }: DecisionModalProps) => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const arc = ARCS.find(a => a.id === arcId);
  const arcIndex = arcId - 1;
  const currentProgress = gameState.arcProgress[arcIndex];
  
  // Find next scenario based on current progress
  const scenario = arc?.scenarios.find(s => {
    const totalScenarios = arc.scenarios.length;
    const progressPerScenario = 100 / totalScenarios;
    const scenarioIndex = Math.floor(currentProgress / progressPerScenario);
    return s.id === scenarioIndex + 1;
  }) || arc?.scenarios[0];

  if (!arc || !scenario) {
    onClose();
    return null;
  }

  const handleChoiceSelect = (choice: Choice) => {
    setSelectedChoice(choice);
    setShowPreview(true);
  };

  const handleConfirmChoice = () => {
    if (!selectedChoice) return;

    const newGameState = { ...gameState };
    
    // Apply resource changes
    newGameState.resources.time = Math.max(0, Math.min(100, newGameState.resources.time + selectedChoice.effects.time));
    newGameState.resources.network = Math.max(0, Math.min(100, newGameState.resources.network + selectedChoice.effects.network));
    newGameState.resources.cash = Math.max(0, Math.min(100, newGameState.resources.cash + selectedChoice.effects.cash));
    
    // Update arc progress
    const newProgress = Math.min(100, currentProgress + selectedChoice.progressIncrease);
    newGameState.arcProgress[arcIndex] = newProgress;
    
    // Check if arc is complete and unlock next arc
    if (newProgress >= 100 && arcId === newGameState.currentArc && arcId < 6) {
      newGameState.currentArc = arcId + 1;
    }
    
    // Check if game is complete
    if (arcId === 6 && newProgress >= 100) {
      newGameState.isComplete = true;
    }

    // Show toast with consequence
    toast(selectedChoice.consequence, {
      description: `Arc ${arcId}: ${arc.title}`,
      duration: 4000,
    });

    onComplete(newGameState);
  };

  const getEffectColor = (value: number) => {
    if (value > 0) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getEffectIcon = (type: 'time' | 'network' | 'cash') => {
    switch (type) {
      case 'time': return <Clock className="w-4 h-4" />;
      case 'network': return <Users className="w-4 h-4" />;
      case 'cash': return <DollarSign className="w-4 h-4" />;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl founder-text-gradient">
            {arc.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-founder-yellow-light p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
            <p className="text-gray-700">{scenario.description}</p>
          </div>

          {!showPreview ? (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Choose your approach:</h4>
              {scenario.choices.map((choice) => (
                <Card 
                  key={choice.id}
                  className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-founder-gold"
                  onClick={() => handleChoiceSelect(choice)}
                >
                  <p className="font-medium mb-3">{choice.text}</p>
                  
                  <div className="flex space-x-4 text-sm">
                    <div className={`flex items-center space-x-1 ${getEffectColor(choice.effects.time)}`}>
                      {getEffectIcon('time')}
                      <span>{choice.effects.time > 0 ? '+' : ''}{choice.effects.time}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${getEffectColor(choice.effects.network)}`}>
                      {getEffectIcon('network')}
                      <span>{choice.effects.network > 0 ? '+' : ''}{choice.effects.network}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${getEffectColor(choice.effects.cash)}`}>
                      {getEffectIcon('cash')}
                      <span>{choice.effects.cash > 0 ? '+' : ''}{choice.effects.cash}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-founder-red-light p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Decision Preview</h4>
                <p className="mb-3"><strong>Choice:</strong> {selectedChoice?.text}</p>
                <p className="mb-3"><strong>Consequence:</strong> {selectedChoice?.consequence}</p>
                
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">Time</span>
                    </div>
                    <div className={`text-lg font-bold ${getEffectColor(selectedChoice?.effects.time || 0)}`}>
                      {gameState.resources.time} → {Math.max(0, Math.min(100, gameState.resources.time + (selectedChoice?.effects.time || 0)))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">Network</span>
                    </div>
                    <div className={`text-lg font-bold ${getEffectColor(selectedChoice?.effects.network || 0)}`}>
                      {gameState.resources.network} → {Math.max(0, Math.min(100, gameState.resources.network + (selectedChoice?.effects.network || 0)))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-medium">Cash</span>
                    </div>
                    <div className={`text-lg font-bold ${getEffectColor(selectedChoice?.effects.cash || 0)}`}>
                      {gameState.resources.cash} → {Math.max(0, Math.min(100, gameState.resources.cash + (selectedChoice?.effects.cash || 0)))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  onClick={handleConfirmChoice}
                  className="founder-gradient text-white flex-1"
                >
                  Confirm Decision
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPreview(false)}
                  className="flex-1"
                >
                  Change Choice
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
