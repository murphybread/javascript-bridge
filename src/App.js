import {OutputView} from "./OutputView.js"
import { InputView } from "./InputView.js";
import { BridgeMaker } from "./BridgeMaker.js";
import {BridgeRandomNumberGenerator} from "./BridgeRandomNumberGenerator.js"

class App {
  async play() {
    OutputView.printGameStart();
    const bridgeSize = await InputView.readBridgeSize();
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();

    console.log(BridgeMaker.makeBridge(bridgeSize,generateRandomNumber))
    
  }
}

const app = new App();

app.play();

export default App;
