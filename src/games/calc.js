import startOfGame from '../index.js';

const roundOfGame = () => {
  const firstNumber = Math.floor(Math.random() * 10);
  const secondNumber = Math.floor(Math.random() * 10);
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  const randomOperation = operations[randomIndex];
  const example = `${firstNumber} ${randomOperation} ${secondNumber}`;
  const answer = eval(example);

  return [example, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameCalc = () => {
  startOfGame(description, roundOfGame);
};

export default gameCalc;
