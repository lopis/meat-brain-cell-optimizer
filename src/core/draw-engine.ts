var bodyStyles = window.getComputedStyle(document.body);
export const colorWhite = bodyStyles.getPropertyValue('--color-white');
export const color1 = bodyStyles.getPropertyValue('--color-1');
export const color2 = bodyStyles.getPropertyValue('--color-2');
export const color3 = bodyStyles.getPropertyValue('--color-3');
export const color4 = bodyStyles.getPropertyValue('--color-4');
export const color5 = bodyStyles.getPropertyValue('--color-5');
export const color6 = bodyStyles.getPropertyValue('--color-6');
export const colorDark = bodyStyles.getPropertyValue('--color-dark');

function renderLeds() {
  for (let index = 0; index < 5; index++) {
    lights.innerHTML += '<div class="led"><i/></div>';
  }
}

export function easeInOutSine (x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2;
};

export function background(color: string) {
  document.body.style.background = color;
}

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

    renderLeds();
  }
}

export const drawEngine = new DrawEngine();
