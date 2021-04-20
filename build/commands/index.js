'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _randomPosition = _interopRequireDefault(require('./randomPosition'));

var _randomQuestion = _interopRequireDefault(require('./randomQuestion'));

var _coronavirus = _interopRequireDefault(require('./coronavirus'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = function _default(bot) {
  (0, _randomPosition['default'])(bot);
  (0, _randomQuestion['default'])(bot);
  (0, _coronavirus['default'])(bot);
};

exports['default'] = _default;
//# sourceMappingURL=index.js.map
