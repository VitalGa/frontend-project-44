import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomInt from './getRandomInt.js';

const question = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(100);

    const quest = readlineSync.question(`${'Question: '}${num}${'\nYour answer: '}`);

    if ((num % 2 === 0 && quest === 'yes') || (num % 2 !== 0 && quest === 'no')) {
      console.log('Correct!');
    } if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    } if (num % 2 === 0 && quest !== 'yes') {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    } if (num % 2 !== 0 && quest !== 'no') {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
};
const evenGame = () => {
  greeting();
  question();
};

export default evenGame;
