"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _question = require("../helpers/question");

var _arrayOfQuestions = require("../helpers/arrayOfQuestions");

var _index = require("../Middleware/index");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var randomQuestion = function randomQuestion(bot) {
  bot.command("question", (0, _index.limitsMiddleware)(), function (ctx) {
    var randomQuestion = _arrayOfQuestions.questions[Math.floor(Math.random() * _arrayOfQuestions.questions.length)];

    var keyboard = []; //generate buttons

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = randomQuestion.answerOptions.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            i = _step$value[0],
            q = _step$value[1];

        keyboard.push([{
          text: q,
          callback_data: _arrayOfQuestions.variants[i]
        }]);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var id = ctx.chat.id;
    bot.telegram.sendMessage(id, randomQuestion.question, {
      reply_markup: {
        inline_keyboard: [].concat(keyboard)
      },
      disable_notification: true
    });
  }); //register actions 

  for (var _i2 = 0, _Object$entries = Object.entries(_arrayOfQuestions.variants); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        _ = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    bot.action(value, (0, _index.limitsMiddleware)({
      replyfn: function replyfn(ctx) {
        return console.log("blocked");
      }
    }), function (ctx) {
      (0, _question.isRightAnswer)(ctx);
      ctx.answerCbQuery();
    });
  }
};

var _default = randomQuestion;
exports["default"] = _default;
//# sourceMappingURL=randomQuestion.js.map