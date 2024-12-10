### 기능 구현 목록

1. - [x] 다리게임 시작 문구 출력

-

2. - [ ]자동으로 생성할 다리 길이를 입력 받는다.

- [x] 3 이상 20 이하의 숫자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.

3. - [ ]라운드마다 플레이어가 이동할 칸을 입력 받는다. U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.

- [x]사용자가 이동할 때마다 다리 건너기 결과의 출력 형식은 실행 결과 예시를 참고한다.
  - [x]이동할 수 있는 칸을 선택한 경우 O 표시
  - [x]이동할 수 없는 칸을 선택한 경우 X 표시
  - [x]선택하지 않은 칸은 공백 한 칸으로 표시
  - [x]다리의 시작은 `[`, 다리의 끝은 `]`으로 표시
  - [x]다리 칸의 구분은 `|`(앞뒤 공백 포함) 문자열로 구분
  - [x]현재까지 건넌 다리를 모두 출력
- 게임 재시작/종료 여부를 입력 받는다. R(재시작)과 Q(종료) 중 하나의 문자를 입력할 수 있으며 올바른 값이 아니면 예외 처리한다.

4. - [] 게임 종료 결과 시도횟수 표기

- 다리를 건너다 실패하면 게임을 재시작하거나 종료할 수 있다.
  - 재시작해도 처음에 만든 다리로 재사용한다.
  - 게임 결과의 총 시도한 횟수는 첫 시도를 포함해 게임을 종료할 때까지 시도한 횟수를 나타낸다.

예외 처리

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

- 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

  - `InputView` 에서만 `MissionUtils`의 `Console.readLine()` 을 이용해 사용자의 입력을 받을 수 있다.
  - `BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다.

### InputView 객체

- 제공된 `InputView` 객체를 활용해 구현해야 한다.
- `InputView`의 파일 경로는 변경할 수 있다.
- `InputView`의 메서드의 인자는 변경할 수 있다.
- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

```javascript
const InputView = {
  readBridgeSize() {},

  readMoving() {},

  readGameCommand() {},
};
```

### OutputView 객체

- 제공된 `OutputView` 객체를 활용해 구현해야 한다.
- `OutputView`의 파일 경로는 변경할 수 있다.
- `OutputView`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 값 출력을 위해 필요한 메서드를 추가할 수 있다.

```javascript
const OutputView = {
  printMap() {},

  printResult() {},
};
```

### BridgeGame 클래스

- 제공된 `BridgeGame` 클래스를 활용해 구현해야 한다.
- `BridgeGame`에 필드(인스턴스 변수)를 추가할 수 있다.
- `BridgeGame`의 파일 경로는 변경할 수 있다.
- `BridgeGame`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.

```javascript
class BridgeGame {
  move() {}

  retry() {}
}
```

### BridgeMaker 객체

- 제공된 `BridgeMaker` 객체를 활용해 구현해야 한다.
- `BridgeMaker`에 프로퍼티를 추가할 수 없다.
- `BridgeMaker`의 파일 경로는 변경할 수 없다.
- `BridgeMaker`의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

```javascript
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {},
};
```

### BridgeRandomNumberGenerator 객체

- Random 값 추출은 제공된 `BridgeRandomNumberGenerator`의 `generate()`를 활용한다.
- `BridgeRandomNumberGenerator`의 코드는 변경할 수 없다.

#### 사용 예시

- 다리 칸을 생성하기 위한 Random 값은 아래와 같이 추출한다.

```javascript
const number = generateRandomNumber();
```
