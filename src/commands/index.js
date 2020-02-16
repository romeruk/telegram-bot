import randomPosition from './randomPosition';
import randomQuestion from './randomQuestion';
import coronaVirus from './coronavirus';

export default (bot) => {
  randomPosition(bot);
  randomQuestion(bot);
  coronaVirus(bot);
}