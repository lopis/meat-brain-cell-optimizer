var bodyStyles = window.getComputedStyle(document.body);
export const color0 = bodyStyles.getPropertyValue('--color-0');
export const color1 = bodyStyles.getPropertyValue('--color-1');
export const color2 = bodyStyles.getPropertyValue('--color-2');
export const color3 = bodyStyles.getPropertyValue('--color-3');
export const color4 = bodyStyles.getPropertyValue('--color-4');
export const color5 = bodyStyles.getPropertyValue('--color-5');

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
