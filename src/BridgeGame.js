import { InputView } from "./InputView.js";
import {Validator} from "./utils/Vaildator.js"
const USER_KEY = {
  U : 0,
  D : 1
}

export class BridgeGame {

  constructor (bridge) {
    this.currentBridge = bridge;
    this.tryCount = 1;
    this.round = 0;
    this.currentMoveKey = "";

  }
  move(moveKey) {
    if (this.currentBridge[USER_KEY[moveKey]][this.round]){
      return true  
    }
    else {
      return false
    }

  }

  retry(answerGameCommand, bridge ) {
    if (answerGameCommand.toUpperCase() === "R"){
      this.currentBridge = bridge;
      this.tryCount += 1;
      this.round = 0 ;
    }
    else{
      return this.tryCount;
    }

  }

  updateMove (moveKey){
    this.currentMoveKey = moveKey;

  }
  getCurrentBridge (){ 
    return this.currentBridge;
  }
  getCurrentRound (){
    return this.round;
  }

  getTryCount (){
    return this.tryCount
  }

  getCurrentMoveKey (){
    return this.currentMoveKey
  }
  updateRound (){
    this.round +=1;
  }

  gameResult(bridgeSize){
    if(Number(bridgeSize) === this.round){
      return "성공"
    }
    else {
      return "실패"
    }

  }
}

