import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
const greetUser = () => {
  console.log(`Hello, ${name}!`);
};

const isNumberEven = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default isNumberEven;
export {
  greetUser,
};
