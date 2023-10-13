import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

// eslint-disable-next-line consistent-return
const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return (firstNumber + secondNumber);
    case '-':
      return (firstNumber - secondNumber);
    case '*':
      return (firstNumber * secondNumber);
    default:
      console.log('error');
  }
};

const roundOfGame = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const operators = ['+', '-', '*'];
  const randomOperators = generateRandomNumber(0, operators.length - 1);
  const example = `${firstNumber} ${operators[randomOperators]} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, operators[randomOperators]));

  return [example, answer];
};

const description = 'What is the result of the expression?';

const runCalc = () => {
  runEngine(description, roundOfGame);
};

export default runCalc;
