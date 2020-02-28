import axios from 'axios';
import cheerio from 'cheerio';

import { limitsMiddleware } from '../Middleware/index';
import { formatDate } from '../helpers/math';
import StringFormat from '../helpers/stringFormat';
import debug from '../helpers/debug'

const coronaVirus = (bot) => {
  bot.command("coronavirus", limitsMiddleware(), async (ctx) => {
    try {
      const responseScraping = await axios.get("https://www.worldometers.info/coronavirus/");
      const $ = cheerio.load(responseScraping.data);
      const [confirmed, deaths, recovered] = Array.from($('.maincounter-number'));
      const webScrpDate = formatDate($("#page-top").next().text());

      const response = await axios.get("http://lab.isaaclin.cn/nCoV/api/overall", {
        timeout: 20 * 1000
      });

      const { confirmedCount, deadCount, curedCount, updateTime } = response.data.results[0];

      const date = formatDate(updateTime);

      return ctx.reply(StringFormat`Web scraping data:
          Оновлено: <b>${webScrpDate}</b>
          Всього заразилось: <b>${$(confirmed).text()}</b>
          Всього померло: <b>${$(deaths).text()}</b>
          Всього вилікувалось: <b>${$(recovered).text()}</b>

          Офіційні дані китайців:
          Оновлено: <b>${date}</b>
          Всього заразилось: <b>${confirmedCount}</b>
          Всього померло: <b>${deadCount}</b>
          Всього вилікувалось: <b>${curedCount}</b>`,
        {
          parse_mode: "HTML"
        });
    } catch (error) {
      debug(error);
    }
  });
};

export default coronaVirus;