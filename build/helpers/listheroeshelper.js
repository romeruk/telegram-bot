"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attack_type = exports.primary_attr = void 0;

var primary_attr = function primary_attr(attr) {
  var pAttr = "";

  switch (attr) {
    case "agi":
      pAttr = "Спритність";
      break;

    case "str":
      pAttr = "Сила";
      break;

    case "int":
      pAttr = "Інтелект";
      break;

    default:
      pAttr = "Cant find attr";
  }

  return pAttr;
};

exports.primary_attr = primary_attr;

var attack_type = function attack_type(type) {
  var AttackType = "";

  switch (type) {
    case "Melee":
      AttackType = "Ближній бій";
      break;

    case "Ranged":
      AttackType = "Дальній бій";
      break;

    default:
      AttackType = "Cant find attack type";
  }

  return AttackType;
};

exports.attack_type = attack_type;
//# sourceMappingURL=listheroeshelper.js.map