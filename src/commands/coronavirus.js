import axios from 'axios';
import { limitsMiddleware } from '../Middleware/index';
import { formatDate } from '../helpers/math';

const coronaVirus = (bot) => {
  bot.command("coronavirustest", limitsMiddleware(), async (ctx) => {
    try {
      // const response = await axios.get("https://www.worldometers.info/coronavirus/");
      // const $ = cheerio.load(response.data);
      // const [confirmed = 0, deaths = 0, recovered = 0] = Array.from($('.maincounter-number'));
      // const data = $("#page-top").next().text();
      const response = await axios.get("http://lab.isaaclin.cn/nCoV/api/overall", {
        timeout: 20 * 1000
      });

      const { confirmedCount, deadCount, curedCount, updateTime } = response.data.results[0];

      const date = formatDate(updateTime);
      console.log(date);

      return ctx.reply(`Оновлено: <b>${date}</b>\nВсього заразилось: <b>${confirmedCount}</b>\nВсього померло: <b>${deadCount}</b>\nВсього вилікувалось: <b>${curedCount}</b>`, {
        parse_mode: "HTML"
      });
    } catch (error) {
      console.log(error);
    }

    return ctx.reply("error getting data");
  });
};

export default coronaVirus;