'use strict';

require('@babel/polyfill');

var _telegraf = _interopRequireDefault(require('telegraf'));

var _commands = _interopRequireDefault(require('./commands/'));

var _hears = _interopRequireDefault(require('./hears/'));

var _inlineQueries = _interopRequireDefault(require('./inlineQueries/'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

require('dotenv').config();

var bot = new _telegraf['default'](process.env.API_TOKEN);
bot.start(function (ctx) {
  return ctx.reply('Welcome');
});
var helpMesssage =
  '\n\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u043A\u043E\u043C\u0430\u043D\u0434\u0438:\n/roll, \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 - 100\n/roll <from-to>, \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D \u0440\u043E\u043B\u0456\u0432 (\u041F\u0440\u0438\u043A\u043B\u0430\u0434: /roll 1-1000 )\n/pos, \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0430\u0454 \u043F\u043E\u0437\u0438\u0446\u0456\u044E\n/question, \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u0435 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F\n@Ecc1bot herostats:  <page>, (@Ecc1bot herostats: 1) \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E 3 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438\n';
bot.help(function (ctx) {
  ctx.reply(helpMesssage);
});
(0, _commands['default'])(bot);
(0, _hears['default'])(bot);
(0, _inlineQueries['default'])(bot);

if (process.env.MODE === 'prod') {
  bot.telegram.setWebhook(
    ''.concat(process.env.URL, '/bot').concat(process.env.API_TOKEN)
  );
  bot.startWebhook(
    '/bot'.concat(process.env.API_TOKEN),
    null,
    process.env.PORT
  );
} else {
  bot.launch();
}
//# sourceMappingURL=index.js.map
