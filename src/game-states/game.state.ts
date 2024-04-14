import { State } from '@/core/state';
import { gameStateMachine } from '@/game-state-machine';
import { metronome } from './levels/metronome';

class GameState implements State {
  onEnter() {
    gameStateMachine.setState(metronome);
  }

  onUpdate() {
  }
}

export const gameState = new GameState();
