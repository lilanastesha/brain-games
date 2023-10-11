import startOfGame from '../index.js';

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
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const example = `${firstNumber} ${secondNumber}`;

  const answer = String(isGCD(firstNumber, secondNumber));
  return [example, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  startOfGame(description, roundOfGame);
};

export default gameGcd;
