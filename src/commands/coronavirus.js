import axios from 'axios';
import cheerio from "cheerio";
const coronaVirus = (bot) => {
  bot.command("coronavirus", async (ctx) => {
    try {
      const response = await axios.get("https://www.worldometers.info/coronavirus/");
      const $ = cheerio.load(response.data);
      const [confirmed = 0, deaths = 0, recovered = 0] = Array.from($('.maincounter-number'));
      const data = $("#page-top").next().text();
      // const getInfo = await axios.get("https://2019ncov.asia/api/cdr", {
      //   timeout: 20 * 1000
      // });
      // const [{ confirmed }, { deaths }, { recovered }] = getInfo.data[1].results;
      return ctx.reply(`${data}\nВсього заразилось: <b>${$(confirmed).text()}</b>\nВсього померло: <b>${$(deaths).text()}</b>\nВсього вилікувалось: <b>${$(recovered).text()}</b>`, {
        parse_mode: "HTML"
      });
    } catch (error) {
      console.log(error);
      return;
    }
  });
};

export default coronaVirus;