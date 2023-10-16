import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

const generateRound = () => {
  const startNum = generateRandomNumber(0, 10);
  const step = generateRandomNumber(0, 10);
  const arrayLength = Math.floor(Math.random() * 6) + 5;

  const array = [];

  for (let i = 0; i < arrayLength; i += 1) {
    array.push(startNum + (step * i));
  }

  const randomIndex = Math.floor(Math.random() * arrayLength);
  const missingNum = array[randomIndex];
  array[randomIndex] = '..';
  const answer = String(missingNum);
  return [array.join(' '), answer];
};

const description = 'What number is missing in the progression?';

const runProgression = () => {
  runEngine(description, generateRound);
};

export default runProgression;
