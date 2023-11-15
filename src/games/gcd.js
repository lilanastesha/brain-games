import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

const getGcd = (a, b) => {
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
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const example = `${number1} ${number2}`;

  const answer = String(getGcd(number1, number2));
  return [example, answer];
}

const description = 'Find the greatest common divisor of given numbers.';

const runGcd = () => {
  runEngine(description, generateRound);
};

export default runGcd;
