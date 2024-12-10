import {OutputView} from "./OutputView.js"
class App {
  play() {
    OutputView.printGameStart();
  }
}

const app = new App();

app.play();

export default App;
