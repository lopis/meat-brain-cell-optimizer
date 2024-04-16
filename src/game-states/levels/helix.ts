import { color5, color6, colorWhite } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level.js';

const HEIGHT = 0.1;

class HelixLevel extends Level implements State {
  numObjects = 60; // Number of objects to draw in the circle
  radius = 1;
  maxFrames = 600;

  frame = 0;
  amplitudeG1 = 1;
  amplitudeG2 = 0;
  counter = 0;
  score = 0;
  inputListener: (event: Event) => void;
  submitListener: () => void;

  constructor() {
    super();
    this.inputListener = () => this.updateRange();
    this.submitListener = () => this.submit();
  }

  onEnter() {
    controls.classList.add('slide');
    range.value = '0';
    this.updateRange();

    W.reset(c2d);
    W.camera({y:5,z:5, rx:-45, fov: 10});
    W.light({x:0,y:-1,z:0});
    W.ambient(0.8);
    document.body.style.background = color6;

    for (let i = 0; i < this.numObjects; i++) {
      W.group({n:`GG${i}`});
      W.group({g:`GG${i}`, n:`G${i}`});
      W.pyramid({g:`G${i}`, n:`P${i}`, w:0.1,h:HEIGHT,d:0.1, b:i%2?color5:colorWhite});
    }

    range.addEventListener('input', this.inputListener);
    submit.addEventListener('click', this.submitListener);
  }

  onLeave() {
    W.reset(c2d);
    document.removeEventListener('input', this.inputListener);
    controls.classList.remove('slide');
  }

  updateObjects() {
    for (let i = 0; i < this.numObjects; i+=2) {
        // Calculate the angle for each object
        const ratio = 1 / this.numObjects;
        const offset = i * ratio;
        const pos = (offset + (this.frame / this.maxFrames));
        const angleDeg = pos * 360;
        const fastAngle = angleDeg * 8;

        W.move({n:`GG${i}`, ry: angleDeg});
        W.move({n:`G${i}`, rx: fastAngle, z: this.radius});
        W.move({n:`P${i}`, y:HEIGHT/2});

        W.move({n:`GG${i+1}`, ry: angleDeg});
        W.move({n:`G${i+1}`, rx: fastAngle+180, z: this.radius});
        W.move({n:`P${i+1}`, y:HEIGHT/2});
    }
  }

  onUpdate() {
    this.frame++;
    if (this.frame === this.maxFrames) {
      this.frame = 0;
    }
    this.updateObjects();
    this.calculatePower();
  }

  updateRange() {
  }

  calculatePower() {
    super.calculatePower(1);
  }

  submit() {
    document.removeEventListener('submit', this.inputListener);
    super.submit();
  }
}

export const helixLevel = new HelixLevel();
