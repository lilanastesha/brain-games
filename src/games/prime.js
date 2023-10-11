import startOfGame from '../index.js';

const isPrime = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  if (divisors.length === 2) {
    return true;
  }
};

const roundOfGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameEven = () => {
  startOfGame(description, roundOfGame);
};

export default gameEven;
