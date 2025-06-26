
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CHARACTERS, Character } from "@/types/game";
import { saveGameState, createInitialGameState } from "@/utils/gameStorage";
import { Progress } from "@/components/ui/progress";

const CharacterSelection = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleStartGame = () => {
    if (!selectedCharacter) return;
    
    const gameState = createInitialGameState();
    gameState.character = selectedCharacter;
    gameState.resources = { ...selectedCharacter.initialResources };
    
    saveGameState(gameState);
    navigate('/dashboard');
  };

  const getResourceColor = (value: number) => {
    if (value >= 70) return 'bg-founder-gold';
    if (value >= 40) return 'bg-founder-yellow';
    return 'bg-founder-red';
  };

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 founder-text-gradient">
            Choose Your Founder
          </h1>
          <p className="text-lg text-gray-600">
            Each archetype brings unique strengths and challenges. Choose wisely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {CHARACTERS.map((character) => (
            <Card 
              key={character.name}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedCharacter?.name === character.name 
                  ? 'border-2 border-founder-gold shadow-lg' 
                  : 'glass-effect hover:border-founder-gold'
              }`}
              onClick={() => setSelectedCharacter(character)}
            >
              <h3 className="text-2xl font-bold mb-3 text-founder-red">
                {character.name}
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {character.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Time</span>
                    <span className="text-sm">{character.initialResources.time}</span>
                  </div>
                  <Progress 
                    value={character.initialResources.time} 
                    className={`h-2 ${getResourceColor(character.initialResources.time)}`}
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Network</span>
                    <span className="text-sm">{character.initialResources.network}</span>
                  </div>
                  <Progress 
                    value={character.initialResources.network} 
                    className={`h-2 ${getResourceColor(character.initialResources.network)}`}
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Cash</span>
                    <span className="text-sm">{character.initialResources.cash}</span>
                  </div>
                  <Progress 
                    value={character.initialResources.cash} 
                    className={`h-2 ${getResourceColor(character.initialResources.cash)}`}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button 
            onClick={handleStartGame}
            disabled={!selectedCharacter}
            size="lg"
            className="founder-gradient text-white text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {selectedCharacter ? `Start as ${selectedCharacter.name}` : 'Select a Character'}
          </Button>
          
          <div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/mode')}
              className="text-gray-600 hover:text-gray-800"
            >
              Back to Mode Selection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
