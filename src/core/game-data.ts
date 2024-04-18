import { twoGearsLevel } from "@/game-states/levels/gears";
import { helixLevel } from "@/game-states/levels/helix";
import { metronomeLevel } from "@/game-states/levels/metronome";
import { twoCubesLevel } from "@/game-states/levels/two-cubes";

const levels = [
  helixLevel,
  metronomeLevel,
  twoCubesLevel,
  twoGearsLevel,
];

class GameData {
  level = 0;

  getLevel() {
    return levels[this.level];
  }

  nextLevel() {
    return levels[this.level + 1];
  }

  prevLevel() {
    return levels[this.level - 1];
  }
}

export const gameData = new GameData();