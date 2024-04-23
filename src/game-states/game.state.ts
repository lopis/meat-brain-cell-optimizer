import { State } from '@/core/state';
import { gameStateMachine } from '@/game-state-machine';
import { gameData } from '@/core/game-data';
import { startAudio } from '@/core/audio';

class GameState implements State {
  onEnter() {
    gameStateMachine.setState(gameData.getLevel());
    startAudio();
  }

  onUpdate() {}
}

export const gameState = new GameState();
