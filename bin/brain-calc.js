import readlineSync from 'readline-sync';
// import greetUser from '../src/cli.js';
// import { name } from '../src/cli.js';

// const calc = () => {
//   for (let i = 0; i <= 2; i += 1) {
//     const firstNumber = Math.floor(Math.random() * 10);
//     const secondNumber = Math.floor(Math.random() * 10);
//     const operations = ['+', '-', '*'];
//     const randomIndex = Math.floor(Math.random() * operations.length);
//     const randomOperation = operations[randomIndex];
//     const example = `${firstNumber} ${randomOperation} ${secondNumber}`;
//     const result = eval(example);
//     console.log(`Question: ${firstNumber} ${randomOperation} ${secondNumber}`);

//     const answer = readlineSync.question('Your answer: ');
//     if (+result === +answer) {
//       console.log('Correct!');
//     } else {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.
//       \nLet's try again, ${name}!`);
//       return;
//     }
//     console.log(`Congratulations, ${name}!`);
//   }
// };

// export default calc;

class Game {
  greetUser() {
    this.name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.name}!`);
  }

  checkAnswer() {
    for (let i = 0; i <= 2; i += 1) {
      const firstNumber = Math.floor(Math.random() * 10);
      const secondNumber = Math.floor(Math.random() * 10);
      const operations = ['+', '-', '*'];
      const randomIndex = Math.floor(Math.random() * operations.length);
      const randomOperation = operations[randomIndex];
      const example = `${firstNumber} ${randomOperation} ${secondNumber}`;
      this.result = eval(example);
      console.log(`Question: ${firstNumber} ${randomOperation} ${secondNumber}`);
      const answer = readlineSync.question('Your answer: ');
      if (+this.result === +answer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${this.result}'.\nLet's try again, ${this.name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${this.name}!`);
  }

  start() {
    console.log('Welcome to the brain games!');
    this.greetUser();
    console.log('What is the result of the expression?');
    this.checkAnswer();
  }
}

const calculatorGame = new Game();
calculatorGame.start();
