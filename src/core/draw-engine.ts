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
      // eslint-disable-next-line id-denylist
      c2d.height = c2d.clientHeight;
      // eslint-disable-next-line id-denylist
      c2d.width = c2d.clientWidth;
    };

    window.addEventListener('resize', resize);
    resize();
  }

}

export const drawEngine = new DrawEngine();
