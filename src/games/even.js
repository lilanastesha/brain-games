import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  runEngine(description, generateRound);
};

export default runEven;
