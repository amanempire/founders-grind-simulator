
import { GameState } from '@/types/game';

const STORAGE_KEY = 'founders-life-game';

export const saveGameState = (gameState: GameState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
};

export const loadGameState = (): GameState | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load game state:', error);
    return null;
  }
};

export const clearGameState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear game state:', error);
  }
};

export const createInitialGameState = (): GameState => ({
  currentArc: 1,
  character: null,
  resources: { time: 0, network: 0, cash: 0 },
  arcProgress: [0, 0, 0, 0, 0, 0],
  isComplete: false
});
