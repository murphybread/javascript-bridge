import { OutputView } from './OutputView.js';
import { InputView } from './InputView.js';
import { BridgeMaker } from './BridgeMaker.js';
import { BridgeGame } from './BridgeGame.js';
import { BridgeRandomNumberGenerator } from './BridgeRandomNumberGenerator.js';

class App {
  async play() {
    OutputView.printGameStart();
    const bridgeSize = await InputView.readBridgeSize();
    const generateRandomNumber = () => BridgeRandomNumberGenerator.generate();

    const bridge = BridgeMaker.makeBridge(bridgeSize, generateRandomNumber);

    // Game Start
    const gameBridge = new BridgeGame(bridge);
    while (gameBridge.getCurrentRound() < bridgeSize) {
      let moveKey = await InputView.readMoving();
      gameBridge.updateMove(moveKey);

      // move 실패 한 경우
      if (!gameBridge.move(moveKey)) {
        // OutputView.printMap(gameBridge.getCurrentBridge(), gameBridge.getCurrentRound(),moveKey, gameBridge.move(moveKey))
        const answerGameCommand = await InputView.readGameCommand();
        gameBridge.retry(answerGameCommand, bridge);
        if (answerGameCommand.toUpperCase() === 'Q') {
          break;
        }
      } else {
        // move 성공한 경우

        OutputView.printMap(gameBridge.getCurrentBridge(), gameBridge.getCurrentRound(), gameBridge.getCurrentMoveKey(), gameBridge.move(gameBridge.getCurrentMoveKey()));
        if (gameBridge.getCurrentRound() !== Number(bridgeSize) - 1) {
          gameBridge.updateRound();
        } else {
          break;
        }
      }
    }

    OutputView.printResultMap();
    OutputView.printMap(gameBridge.getCurrentBridge(), gameBridge.getCurrentRound(), gameBridge.getCurrentMoveKey(), gameBridge.move(gameBridge.getCurrentMoveKey()));
    OutputView.printResult(gameBridge.gameResult(bridgeSize), gameBridge.getTryCount());
  }
}

const app = new App();

app.play();

export default App;
