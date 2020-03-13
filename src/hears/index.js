import roll from './roll';
import covid19 from "./covid19";
import covid19ByCountry from './covid19ByCountry';

export default (bot) => {
  roll(bot);
  covid19(bot);
  covid19ByCountry(bot);
}