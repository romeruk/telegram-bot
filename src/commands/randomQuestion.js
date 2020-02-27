import { isRightAnswer } from '../helpers/question';
import { questions, variants } from '../helpers/arrayOfQuestions';
import { limitsMiddleware } from "../Middleware/index";

const randomQuestion = (bot) => {
  bot.command("question", limitsMiddleware(), ctx => {

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
    bot.action(value, limitsMiddleware(), (ctx) => {
      isRightAnswer(ctx);
      ctx.answerCbQuery()
    });
  }
}
export default randomQuestion;