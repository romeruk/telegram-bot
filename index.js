const Telegraf = require('telegraf');
require('dotenv').config();
const { randomNumber } = require('./helpers/math');
const { isRightAnswer } = require('./helpers/question');
const { questions, variants } = require('./helpers/arrayOfQuestions');

const bot = new Telegraf(process.env.API_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))

const helpMesssage = `
There are available commands:
/roll, рандомне число від 0 - 100
/roll from-to, діапазон ролів (Приклад: /roll 1-1000 )
/pos, рандомно призначає позицію
/question, рандомне запитання
`;

bot.help((ctx) => {
  ctx.reply(helpMesssage);
});

bot.hears([new RegExp('^\\/roll \\d+\\-\\d+$'), new RegExp('^\\/roll$')], (ctx) => {
  const { text } = ctx.message;
  let [from, to] = text.slice(6, text.length).split('-');

  from = parseInt(from, 10);
  to = parseInt(to, 10);

  if ((from && to) && (from < to)) {

    if (from > Number.MAX_SAFE_INTEGER) {
      from = Number.MAX_SAFE_INTEGER;
    }

    if (to > Number.MAX_SAFE_INTEGER) {
      to = Number.MAX_SAFE_INTEGER;
    }

    ctx.reply(randomNumber(from, to));
  }
  else {
    ctx.reply(randomNumber(0, 100));
  }

});

bot.command("pos", (ctx) => {
  const players = ['Нова Генерація', 'LOM', 'Универсальный солдат'];
  let positions = [1, 2, 3, 4, 5];
  let msg = '';

  for (let player of players) {
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    msg += `<b>${player}: ${randomPosition}</b>\n`;

    positions = positions.filter(item => item !== randomPosition);
  }

  ctx.reply(msg, {
    parse_mode: "HTML"
  });
});

bot.command("question", ctx => {

  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  const keyboard = [];
  //generate buttons

  for (const [i, q] of randomQuestion.answerOptions.entries()) {
    keyboard.push([{
      text: q,
      callback_data: variants[i]
    }]);
  }

  const { id } = ctx.chat;

  bot.telegram.sendMessage(id, randomQuestion.question, {
    reply_markup: {
      inline_keyboard: [
        ...keyboard
      ]
    },
    disable_notification: true
  });

});

bot.action(variants[0], (ctx) => {
  console.log("someone type")
  isRightAnswer(ctx);
  ctx.answerCbQuery()
});

bot.action(variants[1], (ctx) => {
  console.log("someone type")
  isRightAnswer(ctx);
  ctx.answerCbQuery()
});

bot.action(variants[2], (ctx) => {
  console.log("someone type")
  isRightAnswer(ctx);
  ctx.answerCbQuery()
});

bot.action(variants[3], (ctx) => {
  console.log("someone type")
  isRightAnswer(ctx);
  ctx.answerCbQuery()
});

if (process.env.MODE === "prod") {
  bot.telegram.setWebhook(`${process.env.URL}/bot${process.env.API_TOKEN}`);
  bot.startWebhook(`/bot${process.env.API_TOKEN}`, null, process.env.PORT);
}
else {
  bot.launch();
}
