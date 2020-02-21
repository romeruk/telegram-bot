"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = require("../Middleware/index");

var _math = require("../helpers/math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var coronaVirus = function coronaVirus(bot) {
  bot.command("coronavirus", (0, _index.limitsMiddleware)(),
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(ctx) {
      var response, _response$data$result, confirmedCount, deadCount, curedCount, updateTime, date;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios["default"].get("http://lab.isaaclin.cn/nCoV/api/overall", {
                timeout: 20 * 1000
              });

            case 3:
              response = _context.sent;
              _response$data$result = response.data.results[0], confirmedCount = _response$data$result.confirmedCount, deadCount = _response$data$result.deadCount, curedCount = _response$data$result.curedCount, updateTime = _response$data$result.updateTime;
              date = (0, _math.formatDate)(updateTime);
              console.log(date);
              return _context.abrupt("return", ctx.reply("\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0430\u0440\u0430\u0437\u0438\u043B\u043E\u0441\u044C: <b>".concat(confirmedCount, "</b>\n\u0412\u0441\u044C\u043E\u0433\u043E \u043F\u043E\u043C\u0435\u0440\u043B\u043E: <b>").concat(deadCount, "</b>\n\u0412\u0441\u044C\u043E\u0433\u043E \u0432\u0438\u043B\u0456\u043A\u0443\u0432\u0430\u043B\u043E\u0441\u044C: <b>").concat(curedCount, "</b>"), {
                parse_mode: "HTML"
              }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 13:
              return _context.abrupt("return", ctx.reply("error getting data"));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = coronaVirus;
exports["default"] = _default;
//# sourceMappingURL=coronavirus.js.map