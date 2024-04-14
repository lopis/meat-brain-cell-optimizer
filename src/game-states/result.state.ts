import { State } from '../core/state';

type Result = {
  title: string
  text: string
}
type Results = {
  perfect: Result;
  great: Result;
  bad: Result;
}

export const results: Results = {
  perfect: {
    title: 'Perfect!',
    text: 'I\'m making a note here: huge success!',
  },
  great: {
    title: 'Great job',
    text: 'Your test results are very promising.'
  },
  bad: {
    title: 'Disappointing',
    text: 'These results are not satisfactory. Try again.'
  }
};

class ResultState implements State {
  title = '';
  text = '';

  onEnter() {
    resultTitle.innerText = this.title;
    resultText.innerText = this.text;
    result.classList.remove('hide');
  }

  onUpdate() {
  }
}

const resultState = new ResultState();

export const newResultState = (result: Result) => {
  resultState.title = result.title;
  resultState.text = result.text;
  
  return resultState;
};
