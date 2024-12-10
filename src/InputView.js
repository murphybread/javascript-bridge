import { MESSAGES_INPUT } from "./constant/view.js";
import { MESSAGES_ERROR } from "./constant/error.js";
import { Console } from "@woowacourse/mission-utils";
import { Validator} from "./utils/Vaildator.js"



export const InputView = {
  async readBridgeSize() {

    while (true ){
      try{
        const bridgeSize = await Console.readLineAsync(MESSAGES_INPUT["BRIDGE_SIZE"])
        Validator.brdigeFormat(bridgeSize)
        return bridgeSize;
      }
      catch (error) {
        Console.print(MESSAGES_ERROR["BRIDGE_SIZE_FORMAT"])
      }
    }
  },

  async readMoving() {

    while (true ){
      try{
        const moveKey = await Console.readLineAsync(MESSAGES_INPUT["GAME_MOVE"])
        Validator.checkMoveKeyword(moveKey)
        return moveKey.toUpperCase();
      }
      catch (error) {
        Console.print(MESSAGES_ERROR["MOVE_KEYWORDS"])
    }
    }
  },

  async readGameCommand() {
    while (true ){
      try{
        const retry = await Console.readLineAsync(MESSAGES_INPUT["GAME_RETRY"])
        Validator.checkReadGameCommand(retry)
        return retry.toUpperCase();
      }
      catch (error) {
        Console.print(MESSAGES_ERROR["RETRY_KEYWORDS"])
      }
    }

  },
};