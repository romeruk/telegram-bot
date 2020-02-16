"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var coronaVirus = function coronaVirus(bot) {
  bot.command("coronavirus",
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(ctx) {
      var getInfo, _getInfo$data$1$resul, confirmed, deaths, recovered;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios["default"].get("https://2019ncov.asia/api/cdr");

            case 2:
              getInfo = _context.sent;
              console.log(getInfo.data[1].results);
              _getInfo$data$1$resul = _slicedToArray(getInfo.data[1].results, 3), confirmed = _getInfo$data$1$resul[0].confirmed, deaths = _getInfo$data$1$resul[1].deaths, recovered = _getInfo$data$1$resul[2].recovered;
              return _context.abrupt("return", ctx.reply("\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0430\u0440\u0430\u0437\u0438\u043B\u043E\u0441\u044C: <b>".concat(confirmed, "</b>\n\u0412\u0441\u044C\u043E\u0433\u043E \u043F\u043E\u043C\u0435\u0440\u043B\u043E: <b>").concat(deaths, "</b>\n\u0412\u0441\u044C\u043E\u0433\u043E \u0432\u0438\u043B\u0456\u043A\u0443\u0432\u0430\u043B\u043E\u0441\u044C: <b>").concat(recovered, "</b>"), {
                parse_mode: "HTML"
              }));

            case 6:
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

var _default = coronaVirus;
exports["default"] = _default;
//# sourceMappingURL=coronavirus.js.map