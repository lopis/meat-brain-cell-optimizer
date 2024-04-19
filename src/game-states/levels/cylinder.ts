import { color6, background, color3 } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level.js';

class CylinderLevel extends Level implements State {
  frame = 0;

  onEnter() {
    background(color6);
    range.value = '45';

    W.reset(c2d);
    W.camera({y:0,z:3, fov: 20});

    W.group({n:"G1",ry:0});
    W.cylinder({g: "G1", n:"C1", w:0.5,h:2,d:0.5, x:0,y:0, ns:1, rx:45, b:color3});

    super.onEnter();
  }

  onUpdate() {
    W.move({n:'G1', rz: this.frame++});
    W.move({n:'C1', rx: parseInt(range.value)});
  }

  updateRange() {
  }

  calculatePower() {

  }
}

export const cylinderLevel = new CylinderLevel();
