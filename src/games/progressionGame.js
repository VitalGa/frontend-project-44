import useEngineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRulesProgression = 'What number is missing in the progression?';

const generateProgression = (firstItem, step, length2) => {
  const array = [];
  for (let i = 0; i < length2; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

const startRoundProgression = () => {
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

const progressionGame = () => useEngineForAllGames(gameRulesProgression, startRoundProgression);

export default progressionGame;
