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

function cap(x: number): number {
  return x > 0.95 ? 1
    : x < 0.05 ? 0
    : x;
}

export function easeInOutSine (x: number): number {
  return cap(-(Math.cos(Math.PI * x) - 1) / 2);
};

export function background(color: string) {
  document.body.style.background = color;
}

export function exponencialSmoothing(value: number, target: number, elapsedMilis: number, speed: number = 3) {
  return value + (target - value) * (elapsedMilis * speed / 1000);
}

export function minAngleDistanceWithin90(angle1: number, angle2: number) {
  // Normalize angles to be between 0 and 360 degrees
  angle1 = (angle1 + 360) % 360;
  angle2 = (angle2 + 360) % 360;

  // Calculate the absolute difference
  let diff = Math.abs(angle1 - angle2);

  // If the absolute difference is greater than 180 degrees,
  // subtract it from 360 degrees to get the minimum distance
  if (diff > 180) {
      diff = 360 - diff;
  }

  // Ensure the result is within 90 degrees
  if (diff > 90) {
    diff = 90 - (diff % 90);
  }

  // Ensure the result is within 45 degrees
  if (diff > 45) {
    diff = 45 - (diff % 45);
  }

  return diff;
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
