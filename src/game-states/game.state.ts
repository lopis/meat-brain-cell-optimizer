import { State } from '../core/state';
import { gameStateMachine } from '../game-state-machine';
import { level1 } from './levels/1';

class GameState implements State {
  onEnter() {
    gameStateMachine.setState(level1);
  }

  onUpdate() {
  }
}

export const gameState = new GameState();
