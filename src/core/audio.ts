/* eslint-disable max-classes-per-file */
const melody = [6, 5, 3, 3, 5, 5, 0, 5, -2, 0, -2, 0, 6, 3, 2, 3];
const baseTrack = [2, 3, 2.5, 4];

const f = (tt: number): number => {
  const t = tt * 4;
  const drums = Math.sin(Math.pow(10, (-t / 2048) % 8) * 60) / 4;
  const mainNote = Math.tan(Math.cbrt(Math.sin(t * melody[t >> 13 & 15] / 30)));

  const noteLengths = [2, 3, 4, 6, 8, 12, 16, 24];
  const mainTrack = mainNote / noteLengths[t / [1, 1.5][t >> 12 & 1] >> 10 & 7] / 16;

  const base = Math.cbrt(Math.asin(Math.sin(t / baseTrack[t >> 16 & 3] / 10))) / 32;
  
  return (drums + mainTrack + base);
};

const SAMPLE_RATE = 8000;
class BytebeatPlayer {
  source: AudioBufferSourceNode | null = null;

  start() {
    const ctx = new AudioContext();
    const bufferSize = (melody.length + 0.4) * SAMPLE_RATE / 2;
    const buffer = ctx.createBuffer(1, bufferSize, SAMPLE_RATE);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = f(i);
    }
    
    this.source = ctx.createBufferSource();
    this.source.buffer = buffer;
    this.source.connect(ctx.destination);
    this.source.loop = true;
    
    this.source.start();
  }
  
  stop() {
    this?.source?.stop();
  }
}

export let player: BytebeatPlayer;
export const startAudio = () => {
  player = new BytebeatPlayer();
  setTimeout(() => {
    player.start();
  }, 500);
};
export const stopAudio = () => {
  player && player.stop();
};

