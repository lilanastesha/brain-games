import startOfGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const roundOfGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  startOfGame(description, roundOfGame);
};

export default gameEven;
