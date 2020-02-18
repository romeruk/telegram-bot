import axios from 'axios';

const coronaVirus = (bot) => {
  bot.command("coronavirus", async (ctx) => {
    try {
      const getInfo = await axios.get("https://2019ncov.asia/api/cdr");
      const [{ confirmed }, { deaths }, { recovered }] = getInfo.data[1].results;
      return ctx.reply(`Всього заразилось: <b>${confirmed}</b>\nВсього померло: <b>${deaths}</b>\nВсього вилікувалось: <b>${recovered}</b>`, {
        parse_mode: "HTML"
      });
    } catch (error) {
      console.log(error);
      return ctx.reply("error");
    }
  });
};

export default coronaVirus;