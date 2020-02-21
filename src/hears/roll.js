import { randomNumber } from '../helpers/math';
import { limitsMiddleware } from "../Middleware/index";

const roll = (bot) => {
  bot.hears([/^\/roll \d+\-\d+$/, /^\/roll$/], limitsMiddleware(), (ctx) => {
    const { text } = ctx.message;
    let [from, to] = text.slice(6, text.length).split('-');
    const max = 2147483647;

    from = parseInt(from, 10);
    to = parseInt(to, 10);

    if ((!isNaN(from) && !isNaN(to)) && (from < to)) {

      if (from > max) {
        from = max;
      }

      if (to > max) {
        to = max;
      }

      return ctx.reply(randomNumber(from, to));
    }

    return ctx.reply(randomNumber(1, 100));

  });
}

export default roll;