import { twoGearsLevel } from "@/game-states/levels/gears";
import { helixLevel } from "@/game-states/levels/helix";
import { metronomeLevel } from "@/game-states/levels/metronome";
import { cylinderLevel } from "@/game-states/levels/cylinder";
import { twoCubesLevel } from "@/game-states/levels/two-cubes";

export const levels = [
  metronomeLevel,
  twoCubesLevel,
  helixLevel,
  twoGearsLevel,
  cylinderLevel,
];

function getStorage(): number {
  const storage = localStorage.getItem('meat_brain_cell_optimizer__level') || "";
  const level = parseInt(storage);

  if (levels[level]) {
    return level;
  } else {
    return 0;
  }
}

class GameData {
  level = 0;

  constructor() {
    this.level = getStorage();
  }

  getLevel() {
    return levels[this.level];
  }

  nextLevel() {
    return levels[this.level + 1];
  }

  prevLevel() {
    return levels[this.level - 1];
  }

  storeLevel() {
    const level = getStorage();
    if (!level || level < this.level) {
      localStorage.setItem('meat_brain_cell_optimizer__level', `${this.level}`);
    }
  }
}

export const gameData = new GameData();