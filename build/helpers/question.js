"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRightAnswer = void 0;

var _arrayOfQuestions = require("./arrayOfQuestions");

var isRightAnswer = function isRightAnswer(ctx) {
  var text = ctx.callbackQuery.message.text;
  var _ctx$callbackQuery$fr = ctx.callbackQuery.from,
      first_name = _ctx$callbackQuery$fr.first_name,
      last_name = _ctx$callbackQuery$fr.last_name;

  var filterQuestion = _arrayOfQuestions.questions.find(function (q) {
    return q.question.trim().toLowerCase() === text.trim().toLowerCase();
  });

  if (filterQuestion) {
    if (ctx.match === filterQuestion.rightAnswer) {
      return ctx.reply("<b>".concat(first_name, " ").concat(last_name, "</b> \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F:<b>").concat(text, "</b>"), {
        parse_mode: "HTML"
      });
    }

    return ctx.reply("<b>".concat(first_name, " ").concat(last_name, "</b> \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0432 \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F:<b>").concat(text, "</b>"), {
      parse_mode: "HTML"
    });
  }
};

exports.isRightAnswer = isRightAnswer;
//# sourceMappingURL=question.js.map