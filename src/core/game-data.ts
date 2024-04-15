import { twoGearsLevel } from "@/game-states/levels/gears";
import { metronome } from "@/game-states/levels/metronome";
import { twoCubesLevel } from "@/game-states/levels/two-cubes";

const levels = [
  metronome,
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