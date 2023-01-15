import engineForAllGames from './index.js';
import getRandomInt from './getRandomInt.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const dataForRound = () => {
  const num = getRandomInt(1, 99);
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => engineForAllGames(gameRules, dataForRound);

export default evenGame;
