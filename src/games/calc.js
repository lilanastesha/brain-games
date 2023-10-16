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
      return 'Error: unknown operator';
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 10);
  const number2 = generateRandomNumber(0, 10);
  const operators = ['+', '-', '*'];
  const randomOperators = generateRandomNumber(0, operators.length - 1);
  const question = `${number1} ${operators[randomOperators]} ${number2}`;
  const answer = String(calculate(number1, number2, operators[randomOperators]));

  return [question, answer];
};

const description = 'What is the result of the expression?';

const runCalc = () => {
  runEngine(description, generateRound);
};

export default runCalc;
