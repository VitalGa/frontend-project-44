import engineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRulesProgression = 'What number is missing in the progression?';

const generateProgression = (firstItem, step, Length) => {
  const array = [];
  for (let i = 0; i < Length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

const dataForRoundProgression = () => {
  const first = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const progression = generateProgression(first, step, length);
  const randIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => engineForAllGames(gameRulesProgression, dataForRoundProgression);

export default progressionGame();
