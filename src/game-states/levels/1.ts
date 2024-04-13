import { State } from '@/core/state';

class Level1 implements State {

  onEnter() {
    W.camera({x:0,y:0,z:5, fov: 0});
    W.light({x:0,y:-1,z:0});
    W.ambient(0.2);
    W.clearColor("#000000");
    W.group({n:"G",ry:55});
    W.plane({g:"G",x:-1,y:1,size:1.02,rx:44, s:1});
    W.billboard({g:"G",x:1,y:1,size:1.02,rx:44, s:1});
    W.cube({g:"G",x:-1.5,y:-1,size:1.02,rx:44, s:1});
    W.pyramid({g:"G",x:0,y:-1,size:1.02,rx:44, s:1});
    W.sphere({g:"G",x:1.5,y:-1,size:1.02,rx:44, s:1});
  }

  onUpdate() {
    this.updateControls();
  }

  updateControls() {
    
  }
}

export const level1 = new Level1();
