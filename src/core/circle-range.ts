const TAU = Math.PI * 2;

export class CircleRange {
  turns = 0;
  value = 0;
  previousAngle = 0;
  prevPos = {x:0, y:0};
  multiplier = 1;

  ringSize = 0;
  input: HTMLElement;
  ring: HTMLElement;
  thumb: HTMLElement;
  inputHandler: (e: Event) => void;

  constructor(circleRange: HTMLElement) {
    circleRange.addEventListener('pointerdown', (event) => this.dragStart(event as PointerEvent));
    this.inputHandler = (e: Event) => this.moveThumb(e as PointerEvent);
    document.addEventListener('pointerup', () => this.dragStop());
    this.input = circleRange;
    this.ring = this.input.children[0] as HTMLElement;
    this.thumb = this.ring.children[0] as HTMLElement;
  }

  dragStart(event: PointerEvent) {
    this.previousAngle = this.calculateCircleAngle(event.x, event.y);
    document.addEventListener('pointermove', this.inputHandler);
  }

  dragStop() {
    document.removeEventListener('pointermove', this.inputHandler);
  }

  moveThumb(event: PointerEvent) {   
    const angle = this.calculateCircleAngle(event.x, event.y);
    const delta = this.previousAngle - angle;
    this.previousAngle = angle;
    if (delta >= Math.PI) {
      this.turns++;
    } else if (delta <= -Math.PI) {
      this.turns--;
    }
    this.value -= Math.min(15, delta);
    
    this.updateThumb();
  }

  updateThumb() {
    const {x,y} = this.angleToPos(this.ringSize, this.value);
    this.thumb.style.transform = `translate(${x - this.ringSize}px, ${y - this.ringSize/2}px)`;
  }

  calculateCircleAngle(clickX: number, clickY: number) {
    // Calculate the center of the square
    const {
      height,
      width,
      x,
      y,
    } = this.input.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    // Calculate the angle from the center to the click position
    const dx = clickX - centerX;
    const dy = clickY - centerY;
    const angle = Math.atan2(dy, dx);

    return angle;
  }

  angleToPos(squareSize: number, angle: number) {
    // Calculate the coordinates of the point on the circumference
    const centerX = squareSize / 2;
    const centerY = squareSize / 2;
    const circleX = centerX + Math.cos(angle) * (squareSize / 2);
    const circleY = centerY + Math.sin(angle) * (squareSize / 2);

    return { x: circleX, y: circleY };
  }

  toggle(show: boolean) {
    this.value = 0;
    this.updateThumb();
    this.input.classList.toggle('hide', !show);
    this.ringSize = this.input.children[0].clientHeight + 15;
  }

  getValue() {
    return this.multiplier * (this.turns + this.value / TAU);
  }
}