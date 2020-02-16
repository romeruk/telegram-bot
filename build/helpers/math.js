"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNumber = void 0;

var randomNumber = function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.randomNumber = randomNumber;
//# sourceMappingURL=math.js.map