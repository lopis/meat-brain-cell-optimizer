import { State } from '@/core/state';
import { controls } from '@/core/controls';
import { gameStateMachine } from '@/game-state-machine';
import { introState } from './intro.state';
import { levelListState } from './list';
import { gameData } from '@/core/game-data';

class MenuState implements State {
  private selectedButton = 0;
  private buttons = [this.startGame, this.continueGame, this.toggleFullscreen];

  onEnter() {
    menu.classList.remove('hide');
    start.addEventListener('click', this.startGame);
    contGame.addEventListener('click', this.continueGame);
    fullscreen.addEventListener('click', this.toggleFullscreen);
  }

  onLeave() {
    menu.classList.add('hide');
    start.removeEventListener('click', this.startGame);
    contGame.removeEventListener('click', this.continueGame);
    fullscreen.removeEventListener('click', this.toggleFullscreen);
  }

  onUpdate() {
    this.updateControls();
  }

  updateControls() {
    if (controls.isUp && !controls.previousState.isUp) {
      this.selectedButton--;
      if (this.selectedButton < 0) {
        this.selectedButton = this.buttons.length - 1;
      }
    }

    if (controls.isDown && !controls.previousState.isDown) {
      this.selectedButton++;
      if (this.selectedButton >= this.buttons.length) {
        this.selectedButton = 0;
      }
    }

    if (controls.isConfirm && !controls.previousState.isConfirm) {
      const func = this.buttons[this.selectedButton];
      if (func) {
        func();
      }
    }
  }

  startGame() {
    gameData.level = 0;
    setTimeout(() => {
      gameStateMachine.setState(introState);
    }, 100);
  }

  continueGame() {
    setTimeout(() => {
      gameStateMachine.setState(levelListState);
    }, 100);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

export const menuState = new MenuState();
