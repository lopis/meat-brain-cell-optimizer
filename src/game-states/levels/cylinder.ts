import { color1 } from '@/core/draw-engine';
import { State } from '@/core/state';
import W from '../../lib/w.js';
import { Level } from '@/core/level.js';

class CylinderLevel extends Level implements State {
  frame = 0;
  rx: number = 0;
  ry: number = 0;

  onEnter() {
    range.value = '75';
    range2.value = '95';
    range2.classList.remove('hide');
    overlay.classList.remove('hide');

    W.reset(c2d);
    W.camera({y:0,z:2, fov: 30});
    W.light({x:0,y:0,z:-1});

    W.group({n:"G1",ry:0});
    W.cylinder({g: "G1", n:"C1", w:0.7,h:1.8,d:0.7, x:0,y:0, rx:45, ns:1, b:color1});

    super.onEnter();
  }

  onUpdate() {
    W.move({n:'G1', rz: this.frame++});

    const r1 = parseInt(range.value) - 10;
    const r2 = parseInt(range2.value) + 10;

    this.rx = 90 - 90*r1 / 100;
    this.ry = 90 - 90*r2 / 100;
    W.move({n:'C1', rx:this.rx,ry:this.ry});
    this.calculatePower();
  }

  updateRange() {
  }

  calculatePower() {
    const value1 = 1 - 10 * Math.abs(90 - this.rx) / 360;
    const value2 = 1 - 10 * Math.abs(this.ry) / 360;
    super.calculatePower((value1 + value2) / 2);
  }
}

export const cylinderLevel = new CylinderLevel();
