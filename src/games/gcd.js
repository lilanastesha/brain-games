import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

const isGCD = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const example = `${firstNumber} ${secondNumber}`;

  const answer = String(isGCD(firstNumber, secondNumber));
  return [example, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGcd = () => {
  runEngine(description, generateRound);
};

export default runGcd;
