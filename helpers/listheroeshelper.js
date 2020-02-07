function primary_attr(attr) {
  let pAttr = "";
  switch (attr) {
    case "agi":
      pAttr = "Спритність";
      break;
    case "str":
      pAttr = "Сила"
      break;
    case "int":
      pAttr = "Інтелект"
      break;
    default:
      pAttr = "Cant find attr";
  }

  return pAttr;
}

function attack_type(type) {
  let AttackType = "";
  switch (type) {
    case "Melee":
      AttackType = "Ближній бій";
      break;
    case "Ranged":
      AttackType = "Дальній бій"
      break;
    default:
      AttackType = "Cant find attack type";
  }

  return AttackType;
}

module.exports = {
  primary_attr,
  attack_type
}