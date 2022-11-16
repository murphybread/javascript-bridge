const { RANGE } = require("../constant/input");

const checkInputBridgeRange = (userInput) =>
  +userInput >= RANGE.min && +userInput <= RANGE.max;

const checkNotNumbersInInput = (userInput) =>
  [...userInput].every((v) => +v || v === "0");

const isInputUpOrDown = (userInput) => userInput === "U" || userInput === "D";

module.exports = {
  checkInputBridgeRange,
  checkNotNumbersInInput,
  isInputUpOrDown,
};
