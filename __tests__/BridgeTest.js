import {}



describe('다리 길이 입력에 대한 유효성 검사', () => {
    test('다리의 길이가 3이상 20이하인가?', () => {
        expect(() => {
            drinkFlavor('octopus');
          }).toThrow();
      
    })
});
