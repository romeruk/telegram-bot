import axios from 'axios';

const coronaVirus = (bot) => {
  bot.command("coronavirus", async (ctx) => {
    const getInfo = await axios.get("https://2019ncov.asia/api/cdr");
    console.log(getInfo.data[1].results);
    const [{ confirmed }, { deaths }, { recovered }] = getInfo.data[1].results;
    return ctx.reply(`Всього заразилось: <b>${confirmed}</b>\nВсього померло: <b>${deaths}</b>\nВсього вилікувалось: <b>${recovered}</b>`, {
      parse_mode: "HTML"
    });
  });
};

export default coronaVirus;