class DrawEngine {

  constructor() {
    c2d.height = window.innerHeight;
    c2d.width = window.innerWidth;
  }

  init() {
    W.reset(c2d);
    W.camera({x:0,y:0,z:5, fov: 0});
    W.light({x:0,y:-1,z:0});
    W.ambient(0.2);
    W.clearColor("#000000");
  }

}

export const drawEngine = new DrawEngine();
