'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.formatDate = exports.randomNumber = void 0;

var randomNumber = function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.randomNumber = randomNumber;

var formatDate = function formatDate(date) {
  var d = new Date(date);
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  var year = d.getFullYear();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return ''
    .concat(day, '-')
    .concat(month, '-')
    .concat(year, ' ')
    .concat(hours, ':')
    .concat(minutes, ':')
    .concat(seconds);
};

exports.formatDate = formatDate;
//# sourceMappingURL=math.js.map
