import axios from 'axios';
import { formatDate } from '../helpers/math';
import { limitsMiddleware } from "../Middleware/index";
import StringFormat from '../helpers/stringFormat';
import debug from '../helpers/debug'

const covid19ByCountry = (bot) => {
  bot.hears(/^\/covid19 ([a-zA-Z]){2,15}$/, limitsMiddleware(), async (ctx) => {
    const { text } = ctx.message;
    const country = text.split(" ")[1];
    try {
      const response = await axios.get(`${process.env.COVID19_API_URL}/countries/${country}`, {
        timeout: 20 * 1000
      });

      const { confirmed, recovered, deaths, lastUpdate } = response.data;

      const date = formatDate(lastUpdate);

      return ctx.reply(StringFormat`
          Дані для країни: <b>${country}</b>
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
}

export default covid19ByCountry;