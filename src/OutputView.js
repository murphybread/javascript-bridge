import { Console } from '@woowacourse/mission-utils';
import { MESSAGES_OUTPUT } from './constant/view.js';

const ANSWER_CASE = {
  SUCCESS: 'O',
  PASSED: ' ',
  FAILED: 'X',
};

export const OutputView = {
  printMap(bridge, round, moveKey, roundLastResult) {
    let upSide = [];
    let downSide = [];

    for (let i = 0; i < round; i += 1) {
      if (bridge[0][i]) {
        upSide.push(ANSWER_CASE['SUCCESS']);
        downSide.push(ANSWER_CASE['PASSED']);
      } else {
        upSide.push(ANSWER_CASE['PASSED']);
        downSide.push(ANSWER_CASE['SUCCESS']);
      }
    }

    if (roundLastResult) {
      if (moveKey === 'U') {
        upSide.push(ANSWER_CASE['SUCCESS']);
        downSide.push(ANSWER_CASE['PASSED']);
      } else {
        upSide.push(ANSWER_CASE['PASSED']);
        downSide.push(ANSWER_CASE['SUCCESS']);
      }
    } else {
      if (moveKey === 'U') {
        upSide.push(ANSWER_CASE['FAILED']);
        downSide.push(ANSWER_CASE['PASSED']);
      } else {
        upSide.push(ANSWER_CASE['PASSED']);
        downSide.push(ANSWER_CASE['FAILED']);
      }
    }

    Console.print(`[ ${upSide.join(' | ')} ]`);
    Console.print(`[ ${downSide.join(' | ')} ]`);
    Console.print('\n');
  },

  printResult(gameReuslt, tryCount) {
    Console.print(`${MESSAGES_OUTPUT['GAME_SUCCESS_FAILED']}${gameReuslt}`);
    Console.print(`${MESSAGES_OUTPUT['GAME_TRY_COUND']}${tryCount}`);
  },

  printResultMap() {
    Console.print(`${MESSAGES_OUTPUT['GAME_END']}`);
  },

  printGameStart() {
    Console.print(MESSAGES_OUTPUT['GAME_START']);
  },
};
