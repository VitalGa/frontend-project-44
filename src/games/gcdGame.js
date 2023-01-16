import engineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRulesGcd = 'Find the greatest common divisor of given numbers.';

const expressionGcd = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }

  return expressionGcd(n2, n1 % n2);
};

const dataForRoundgcd = () => {
  const num1 = getRandomInt(1, 25);
  const num2 = getRandomInt(1, 25);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(expressionGcd(num1, num2));

  return (question, correctAnswer);
};

const gcdGame = () => engineForAllGames(gameRulesGcd, dataForRoundgcd);

export default gcdGame;
