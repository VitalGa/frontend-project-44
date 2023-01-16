import engineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRulesGcd = 'Find the greatest common divisor of given numbers.';

const expressionGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return expressionGcd(num2, num1 % num2);
};

const dataForRoundgcd = () => {
  const num1 = getRandomInt(1, 25);
  const num2 = getRandomInt(1, 25);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(expressionGcd(num1, num2));

  return [question, correctAnswer];
};

const gcdGame = () => engineForAllGames(gameRulesGcd, dataForRoundgcd);

export default gcdGame;
