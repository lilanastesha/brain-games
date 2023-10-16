import runEngine from '../index.js';
import generateRandomNumber from '../helper.js';

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

  return false;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runEven = () => {
  runEngine(description, generateRound);
};

export default runEven;
