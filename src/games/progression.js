import startOfGame from '../index.js';

// const isProgression = () => {
//   const startNum = Math.floor(Math.random() * 10) + 1;
//   const step = Math.floor(Math.random() * 10) + 1;
//   const arrayLength = Math.floor(Math.random() * 6) + 5;

//   const array = [];
//   for (let i = 0; i < arrayLength; i += 1) {
//     array.push(startNum + (step * i));
//   }

//   const randomIndex = Math.floor(Math.random() * arrayLength);
//   let missingNumber = array[randomIndex];
//   missingNumber = 'х';
//   return array;
// };

const roundOfGame = () => {
  const startNum = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const arrayLength = Math.floor(Math.random() * 6) + 5;

  const array = [];

  for (let i = 0; i < arrayLength; i += 1) {
    array.push(startNum + (step * i));
  }

  const randomIndex = Math.floor(Math.random() * arrayLength);
  const missingNum = array[randomIndex];
  array[randomIndex] = 'х';
  const answer = String(missingNum);
  return [array, answer];
};

const description = 'What number is missing in the progression?';

const gameProgression = () => {
  startOfGame(description, roundOfGame);
};

export default gameProgression;
