import axios from 'axios';
import { limitsMiddleware } from '../Middleware/index';
import { formatDate } from '../helpers/math';
import StringFormat from '../helpers/stringFormat';
import debug from '../helpers/debug'

const covid19 = (bot) => {
  bot.hears([/^\/covid19$/, /^\/coronavirus$/], limitsMiddleware(), async (ctx) => {
    try {
      const response = await axios.get(`${process.env.COVID19_API_URL}`, {
        timeout: 20 * 1000
      });

      const { confirmed, recovered, deaths, lastUpdate } = response.data;

      const date = formatDate(lastUpdate);

      return ctx.reply(StringFormat`
          Оновлено: <b>${date}</b>
          Всього заразилось: <b>${confirmed.value}</b>
          Всього вилікувалось <b>${recovered.value}</b>
          Всього померло: <b>${deaths.value}</b>`,
        {
          parse_mode: "HTML"
        });
    } catch (error) {
      debug(error);
    }
  });
};

export default covid19;