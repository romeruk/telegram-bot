import randomPosition from './randomPosition';
import randomQuestion from './randomQuestion';
import coronaVirus from './coronavirus';
import coronaVirus2 from './coronavirus2';

export default (bot) => {
  randomPosition(bot);
  randomQuestion(bot);
  coronaVirus(bot);
  coronaVirus2(bot);
}