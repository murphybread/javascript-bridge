
export const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [[],[]];

    for(let round= 0 ; round < size; round +=1){
      let number = generateRandomNumber();
      if (number){
        bridge[0].push(true);
        bridge[1].push(false);
      }
      else {
        bridge[1].push(true);
        bridge[0].push(false);
      }
    }
    

    return bridge
  },
};