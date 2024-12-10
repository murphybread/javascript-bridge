
export const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    for(let round= 0 ; round < size; round +=1){
      let number = generateRandomNumber();
      bridge.push(number)

    }
    

    return bridge
  },
};