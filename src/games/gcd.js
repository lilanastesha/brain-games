import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

const isGCD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    // eslint-disable-next-line no-param-reassign
    num2 = num1 % num2;
    // eslint-disable-next-line no-param-reassign
    num1 = temp;
  }
  return num1;
};

const roundOfGame = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const example = `${firstNumber} ${secondNumber}`;

  const answer = String(isGCD(firstNumber, secondNumber));
  return [example, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGcd = () => {
  runEngine(description, roundOfGame);
};

export default runGcd;
