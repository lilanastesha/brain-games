import readlineSync from 'readline-sync';

// function askName() {
//   return readlineSync.question('May I have your name? ');
// }

//  function greetUser() {
//   const name = askName();
//   console.log(`Hello, ${name}!`);

//   return name;
// }
let name = '';

export default function greetUser() {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { name };
