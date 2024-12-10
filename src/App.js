import {OutputView} from "./OutputView.js"
import { InputView } from "./InputView.js";
import { BridgeMaker } from "./BridgeMaker.js";
import { BridgeGame } from "./BridgeGame.js";
import {BridgeRandomNumberGenerator} from "./BridgeRandomNumberGenerator.js"

class App {
  async play() {
    OutputView.printGameStart();
    const bridgeSize = await InputView.readBridgeSize();
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();

    const bridge = BridgeMaker.makeBridge(bridgeSize,generateRandomNumber)
    console.log(bridge);
    
    
    // Game Start
    let round = 0;
    while ( round < bridgeSize){

      const gameBridge = new BridgeGame(bridge);
    
      let moveKey = await InputView.readMoving();
      console.log (gameBridge.move(round,moveKey));

      if (!gameBridge.move(round,moveKey)){
        OutputView.printMap(gameBridge.getCurrentBridge(),round,moveKey, gameBridge.move(round,moveKey))
        InputView.readGameCommand();
        gameBridge.retry();
      }
      OutputView.printMap(gameBridge.getCurrentBridge(),round,moveKey, gameBridge.move(round,moveKey))
      round +=1;
    }



    
  }
}

const app = new App();

app.play();

export default App;
