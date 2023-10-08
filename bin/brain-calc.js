import readlineSync from 'readline-sync';

class MathGame {
  constructor() {
    this.result = null;
  }

  askQuestion() {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const operations = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    const randomOperation = operations[randomIndex];
    const example = `${firstNumber} ${randomOperation} ${secondNumber}`;
    this.result = eval(example);
    console.log(`Question: ${firstNumber} ${randomOperation} ${secondNumber}`);
  }

  checkAnswer(answer) {
    if (+this.result === +answer) {
      console.log('Correct!');
      return true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${this.result}'.\nLet's try again, ${this.name}!`);
      return false;
    }
  }

  startGame() {
    for (let i = 0; i <= 2; i += 1) {
      this.askQuestion();
      const answer = readlineSync.question('Your answer: ');
      if (!this.checkAnswer(answer)) {
        return false;
      }
    }
    return true;
  }
}

const calculatorGame = new MathGame();
calculatorGame.startGame();
