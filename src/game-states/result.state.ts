import { State } from '@/core/state';

class ResultState implements State {
  onEnter() {
    console.log('summary');
    
  }

  onUpdate() {
  }
}

export const resultState = new ResultState();
