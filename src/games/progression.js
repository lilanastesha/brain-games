import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

const getProgression = (firstNumber, step, length) => {
  const numbers = [firstNumber];
  for (let i = 1; i < length; i += 1) {
    numbers.push(firstNumber + (step * i));
  }
  return numbers;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const step = generateRandomNumber(0, 10);
  const progressions = getProgression(firstNumber, step, 7);

  const hiddenIndex = generateRandomNumber(0, progressions.length);
  const answer = String(progressions[hiddenIndex]);

  progressions[hiddenIndex] = '..';

  const question = progressions.join(' ');
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runProgression = () => {
  runEngine(description, generateRound);
};

export default runProgression;
