import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      return `Error: something is wrong with the given numbers.
      Number 1: ${number1}, number 2: ${number1}`;
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 10);
  const number2 = generateRandomNumber(0, 10);
  const operators = ['+', '-', '*'];
  const operator = generateRandomNumber(0, operators.length - 1);
  const question = `${number1} ${operators[operator]} ${number2}`;
  const answer = String(calculate(number1, number2, operators[operator]));

  return [question, answer];
};

const description = 'What is the result of the expression?';

const runCalc = () => {
  runEngine(description, generateRound);
};

export default runCalc;
