import engineForAllGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gameRulesProgression = 'What number is missing in the progression?';


const progressionGame = () => engineForAllGames(gameRulesProgression, dataForRoundProgression);

export default progressionGame();
