import { InputView } from "./InputView.js";
import {Validator} from "./utils/Vaildator.js"
const USER_KEY = {
  U : 0,
  D : 1
}

export class BridgeGame {

  constructor (bridge) {
    this.currentBridge = bridge;

  }
  move(round,moveKey) {
    if (this.currentBridge[USER_KEY[moveKey]][round]){
        return true  
    }
    else {
      return false
    }

  }

  retry(answerGameCommand) {



    throw new Error


  }

  getCurrentBridge (){ 
    return this.currentBridge;
  }
}

