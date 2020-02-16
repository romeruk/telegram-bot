"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _listheroeshelper = require("../helpers/listheroeshelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var herostats = function herostats(bot) {
  bot.inlineQuery(/^herostats: \d+$/,
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(ctx) {
      var query, dataCount, page, heroes_stats, data, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = ctx.inlineQuery.query;
              dataCount = 50;
              page = parseInt(query.split(':')[1], 10) || 1; //no sense to do api reguest if page > 3, becose there 130 heroes avaible in dota 2

              if (!(page < 4)) {
                _context.next = 10;
                break;
              }

              _context.next = 6;
              return _axios["default"].get("".concat(process.env.OPEN_DOTA_BASE_API_URL, "/heroStats?api_key=").concat(process.env.OPEN_DOTA_KEY));

            case 6:
              heroes_stats = _context.sent;
              data = heroes_stats.data.slice((page - 1) * dataCount, page * dataCount);
              result = data.map(function (hero, i) {
                return {
                  type: "article",
                  id: String(i),
                  title: hero.localized_name,
                  input_message_content: {
                    message_text: "<b>\u041D\u0430\u0437\u0432\u0430 \u0433\u0435\u0440\u043E\u044F:</b> ".concat(hero.localized_name, "\n<b>\u041E\u0441\u043D\u043E\u0432\u043D\u0438\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442:</b> ").concat((0, _listheroeshelper.primary_attr)(hero.primary_attr), "\n<b>\u0411\u0430\u0437\u043E\u0432\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u0440\u0443\u0445\u0443:</b> ").concat(hero.move_speed, "\n<b>\u0422\u0438\u043F \u0430\u0442\u0430\u043A\u0438:</b> ").concat((0, _listheroeshelper.attack_type)(hero.attack_type), "\n<b>\u0411\u0430\u0437\u043E\u0432\u0430 \u0441\u0438\u043B\u0430:</b> ").concat(hero.base_str, "\n<b>\u0411\u0430\u0437\u043E\u0432\u0430 \u0441\u043F\u0440\u0438\u0442\u043D\u0456\u0441\u0442\u044C:</b> ").concat(hero.base_agi, "\n<b>\u0411\u0430\u0437\u043E\u0432\u0438\u0439 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442:</b> ").concat(hero.base_int, "\n<b>\u0406\u0433\u0440\u0430\u0431\u0435\u043B\u044C\u043D\u0456 \u043F\u043E\u0437\u0438\u0446\u0456\u0457:</b> ").concat(hero.roles.join()),
                    parse_mode: "HTML"
                  },
                  thumb_url: "https://api.opendota.com".concat(hero.icon)
                };
              });
              return _context.abrupt("return", ctx.answerInlineQuery(result));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = herostats;
exports["default"] = _default;
//# sourceMappingURL=herostats.js.map