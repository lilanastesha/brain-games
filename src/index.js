import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startOfGame = (description, randomRound) => {
  const userName = greeting();
  console.log(description);
  for (let i = 0; i <= 2; i += 1) {
    const [questionGame, answerGame] = randomRound();
    console.log(`Question: ${questionGame}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answerGame !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerGame}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startOfGame;
