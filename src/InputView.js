import { MESSAGES_INPUT } from "./constant/view.js";
import { MESSAGES_ERROR } from "./constant/error.js";
import { Console } from "@woowacourse/mission-utils";


class Validator {

  static brdigeFormat (bridgeSize){
    if (isNaN(bridgeSize)){
      throw new Error
    }

    if (bridgeSize <3 || bridgeSize >21){
      throw new Error
    }
  }
}

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

  readMoving() {},

  readGameCommand() {},
};