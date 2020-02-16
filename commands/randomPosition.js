const randomPosition = (bot) => {
  bot.command("pos", (ctx) => {
    const players = ['Нова Генерація', 'LOM', 'Универсальный солдат'];
    let positions = [1, 2, 3, 4, 5];
    let msg = '';

    for (let player of players) {
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
      msg += `<b>${player}: ${randomPosition}</b>\n`;

      positions = positions.filter(item => item !== randomPosition);
    }

    return ctx.reply(msg, {
      parse_mode: "HTML"
    });
  });
};

export default randomPosition;