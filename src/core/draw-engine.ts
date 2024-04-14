export const color0 = '#ecfffb';
export const color1 = '#05b38d';
export const color2 = '#c330b2';
export const color3 = '#6e0067';
export const color4 = '#3300c0';
export const color5 = '#070044';

class DrawEngine {

  constructor() {
    const resize = () => {
      const size = Math.min(window.innerHeight, window.innerWidth);
      c2d.height = size;
      c2d.width = size;
    };

    window.addEventListener('resize', resize);
    resize();
  }

}

export const drawEngine = new DrawEngine();
