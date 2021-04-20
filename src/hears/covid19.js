import axios from 'axios';
import { formatDate, numberWithCommas } from '../helpers/math';
import { limitsMiddleware } from '../Middleware/index';
import debug from '../helpers/debug';

const covid19 = (bot) => {
  bot.hears(
    [/^\/covid19 ([a-zA-Z]){2,15}$/, /^\/covid19$/],
    limitsMiddleware(),
    async (ctx) => {
      const { text } = ctx.message;
      const country = text.split(' ')[1];

      try {
        let response = {};
        const API_URL = process.env.COVID19_API_URL;
        if (text.length === 8) {
          response = await axios.get(`${API_URL}`);
        } else {
          response = await axios.get(`${API_URL}/countries/${country}`);
        }

        const { confirmed, recovered, deaths, lastUpdate } = response.data;

        const date = formatDate(lastUpdate);

        return ctx.reply(
          `Оновлено: <b>${date}</b>\nВсього заразилось: <b>${numberWithCommas(
            confirmed.value
          )}</b>\nВсього вилікувалось <b>${numberWithCommas(
            recovered.value
          )}</b>\nВсього померло: <b>${numberWithCommas(deaths.value)}</b>`,
          {
            parse_mode: 'HTML',
          }
        );
      } catch (error) {
        debug(error);
      }
    }
  );
};

export default covid19;
