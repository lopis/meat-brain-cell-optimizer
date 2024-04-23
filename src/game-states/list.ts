import { State } from '@/core/state';
import { gameStateMachine } from '@/game-state-machine';
import { gameState } from './game.state';
import { gameData, levels } from '@/core/game-data';
import { background, colorDark } from '@/core/draw-engine';

class LevelListState implements State {
  constructor() {
    lobby.addEventListener('click', (event: MouseEvent) => {
      // @ts-ignore
      if (event?.target?.type === 'submit') {
        // @ts-ignore
        const level = parseInt(event.target.innerText) - 1;
        gameData.level = level;
        this.startGame();
      }
    });
  }

  onEnter() {
    background(colorDark);
    list.innerHTML = '';
    for (let i = 0; i < levels.length; i++) {
      list.innerHTML += `<button ${gameData.maxLevel < i ? 'disabled="disabled"': ''}">${i+1}</button>`;
    }
    lobby.classList.remove('hide');
  }

  onLeave() {
    lobby.classList.add('hide');
    play.removeEventListener('click', this.startGame);
  }

  onUpdate() {}

  startGame() {
    gameStateMachine.setState(gameState);
  }
}

export const levelListState = new LevelListState();
