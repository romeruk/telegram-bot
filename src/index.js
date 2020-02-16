import '@babel/polyfill';
import Telegraf from 'telegraf';
import commands from './commands/';
import hears from './hears/';
import inlineQueries from './inlineQueries/';

require('dotenv').config();

const bot = new Telegraf(process.env.API_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'))

const helpMesssage = `
Доступні команди:
/roll, рандомне число від 0 - 100
/roll <from-to>, діапазон ролів (Приклад: /roll 1-1000 )
/pos, рандомно призначає позицію
/question, рандомне запитання
@Ecc1bot herostats:  <page>, (@Ecc1bot herostats: 1) доступно 3 сторінки
`;

bot.help((ctx) => {
  ctx.reply(helpMesssage);
});

commands(bot);
hears(bot);
inlineQueries(bot);


if (process.env.MODE === "prod") {
  bot.telegram.setWebhook(`${process.env.URL}/bot${process.env.API_TOKEN}`);
  bot.startWebhook(`/bot${process.env.API_TOKEN}`, null, process.env.PORT);
}
else {
  bot.launch();
}

