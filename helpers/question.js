const { questions } = require('./arrayOfQuestions');

function isRightAnswer(ctx) {
  const { text } = ctx.callbackQuery.message;
  const { first_name, last_name } = ctx.callbackQuery.from;
  let filterQuestion = questions.find(q => q.question.trim().toLowerCase() === text.trim().toLowerCase());
  if (filterQuestion) {

    if (ctx.match === filterQuestion.rightAnswer) {
      return ctx.reply(`<b>${first_name} ${last_name}</b> відповів правильно на запитання:<b>${text}</b>`, {
        parse_mode: "HTML"
      });
    }

    return ctx.reply(`<b>${first_name} ${last_name}</b> відповів не правильно на запитання:<b>${text}</b>`, {
      parse_mode: "HTML"
    });
  }
}

module.exports = {
  isRightAnswer
}