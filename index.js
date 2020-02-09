const Telegraf = require('telegraf');
const rateLimit = require('telegraf-ratelimit');
const axios = require("axios");
require('dotenv').config();
const { randomNumber } = require('./helpers/math');
const { isRightAnswer } = require('./helpers/question');
const { questions, variants } = require('./helpers/arrayOfQuestions');
const { primary_attr, attack_type } = require('./helpers/listheroeshelper');
const { limitConfig, questionLimitConfig } = require('./config/limits');

const bot = new Telegraf(process.env.API_TOKEN);
bot.use(rateLimit(limitConfig))
bot.start((ctx) => ctx.reply('Welcome'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))

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

bot.hears([/^\/roll \d+\-\d+$/, /^\/roll$/], (ctx) => {
  const { text } = ctx.message;
  let [from, to] = text.slice(6, text.length).split('-');
  const max = 2147483647;

  from = parseInt(from, 10);
  to = parseInt(to, 10);

  console.log((from && to) && (from < to));

  if ((!isNaN(from) && !isNaN(to)) && (from < to)) {

    if (from > max) {
      from = max;
    }

    if (to > max) {
      to = max;
    }

    return ctx.reply(randomNumber(from, to));
  }

  return ctx.reply(randomNumber(0, 100));

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

  return ctx.reply(msg, {
    parse_mode: "HTML"
  });
});

bot.command("question", rateLimit(questionLimitConfig), ctx => {

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

//register actions 
for (let [_, value] of Object.entries(variants)) {
  bot.action(value, (ctx) => {
    isRightAnswer(ctx);
    ctx.answerCbQuery()
  });
}

bot.inlineQuery(/^herostats: \d+$/, async (ctx) => {
  const { query } = ctx.inlineQuery;
  const dataCount = 50;
  let page = parseInt(query.split(':')[1], 10) || 1;

  //no sense to do api reguest if page > 3, becose there 130 heroes avaible in dota 2
  if (page < 4) {

    const heroes_stats = await axios.get(`${process.env.OPEN_DOTA_BASE_API_URL}/heroStats?api_key=${process.env.OPEN_DOTA_KEY}`);

    const data = heroes_stats.data.slice((page - 1) * dataCount, page * dataCount);


    let result = data.map((hero, i) => {
      return {
        type: "article",
        id: String(i),
        title: hero.localized_name,
        input_message_content: {
          message_text: `<b>Назва героя:</b> ${hero.localized_name}\n<b>Основний атрибут:</b> ${primary_attr(hero.primary_attr)}\n<b>Базова швидкість руху:</b> ${hero.move_speed}\n<b>Тип атаки:</b> ${attack_type(hero.attack_type)}\n<b>Базова сила:</b> ${hero.base_str}\n<b>Базова спритність:</b> ${hero.base_agi}\n<b>Базовий інтелект:</b> ${hero.base_int}\n<b>Іграбельні позиції:</b> ${hero.roles.join()}`,
          parse_mode: "HTML"
        },
        thumb_url: `https://api.opendota.com${hero.icon}`
      }
    });

    return ctx.answerInlineQuery(result);
  }

});

if (process.env.MODE === "prod") {
  bot.telegram.setWebhook(`${process.env.URL}/bot${process.env.API_TOKEN}`);
  bot.startWebhook(`/bot${process.env.API_TOKEN}`, null, process.env.PORT);
}
else {
  bot.launch();
}

