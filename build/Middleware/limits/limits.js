"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var limits = new Map();

var defaultReplyFn = function defaultReplyFn(ctx, msg) {
  return ctx.reply(msg);
};

var defaultKeyFn = function defaultKeyFn(ctx) {
  return ctx.from.id;
};

var options = {
  timeout: 5000,
  replyfn: defaultReplyFn,
  keyfn: defaultKeyFn
};

var limitsMiddleware = function limitsMiddleware(opts) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ctx, next) {
        var config, timeout, replyfn, keyfn, value, getBlocketUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = Object.assign(options, opts);
                timeout = config.timeout, replyfn = config.replyfn, keyfn = config.keyfn;
                value = keyfn(ctx);
                getBlocketUser = limits.get(value);

                if (!getBlocketUser) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", replyfn(ctx, getBlocketUser));

              case 8:
                limits.set(value, "blocked for ".concat(timeout, " miliseconds"));
                setTimeout(function () {
                  limits["delete"](value);
                }, timeout);

              case 10:
                _context.next = 12;
                return next();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var _default = limitsMiddleware;
exports["default"] = _default;
//# sourceMappingURL=limits.js.map