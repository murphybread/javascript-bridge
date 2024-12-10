import missionUtils from "@woowacourse/mission-utils";
const { Console } = missionUtils;
import { MESSAGES_OUTPUT } from "./constant/view.js";

export const OutputView = {
  printMap() {},

  printResult() {},

  printGameStart() {
    Console.print(MESSAGES_OUTPUT["GAME_START"]);
  }

};

