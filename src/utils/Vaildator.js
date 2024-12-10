export class Validator {

  static brdigeFormat (bridgeSize){
    if (isNaN(bridgeSize)){
      throw new Error
    }

    if (bridgeSize <3 || bridgeSize >21){
      throw new Error
    }
  }

  static checkMoveKeyword (moveKey){
    const moveKeywords=  ['U','D'];

    if (!moveKeywords.includes(moveKey.toUpperCase()) ){
      throw new Error
    }
  }

  static checkReadGameCommand (answerGameCommand){
    const gameCommandKeywords=  ['R','Q'];
    if (!gameCommandKeywords.includes(answerGameCommand.toUpperCase()) ){
      throw new Error
    }
     
  }
}