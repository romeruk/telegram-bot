"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var randomPosition = function randomPosition(bot) {
  bot.command("pos", function (ctx) {
    var players = ['Нова Генерація', 'LOM', 'Универсальный солдат'];
    var positions = [1, 2, 3, 4, 5];
    var msg = '';

    var _loop = function _loop() {
      var player = _players[_i];
      var randomPosition = positions[Math.floor(Math.random() * positions.length)];
      msg += "<b>".concat(player, ": ").concat(randomPosition, "</b>\n");
      positions = positions.filter(function (item) {
        return item !== randomPosition;
      });
    };

    for (var _i = 0, _players = players; _i < _players.length; _i++) {
      _loop();
    }

    return ctx.reply(msg, {
      parse_mode: "HTML"
    });
  });
};

var _default = randomPosition;
exports["default"] = _default;
//# sourceMappingURL=randomPosition.js.map