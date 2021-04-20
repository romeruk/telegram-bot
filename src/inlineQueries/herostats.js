import axios from 'axios';
import { primary_attr, attack_type } from '../helpers/listheroeshelper';
import { limitsMiddleware } from '../Middleware/index';
import debug from '../helpers/debug';
import normalizeString from '../helpers/normalizeString';

const herostats = (bot) => {
  bot.inlineQuery(/^herostats: \d+$/, limitsMiddleware(), async (ctx) => {
    const { query } = ctx.inlineQuery;
    const dataCount = 50;
    let page = parseInt(query.split(':')[1], 10) || 1;

    //no sense to do api reguest if page > 3, because there 130 heroes avaible in dota 2
    if (page < 4) {
      try {
        const heroes_stats = await axios.get(
          `${process.env.OPEN_DOTA_BASE_API_URL}/heroStats?api_key=${process.env.OPEN_DOTA_KEY}`
        );

        const data = heroes_stats.data.slice(
          (page - 1) * dataCount,
          page * dataCount
        );

        let result = data.map((hero, i) => {
          return {
            type: 'article',
            id: String(i),
            title: hero.localized_name,
            input_message_content: {
              message_text: normalizeString`
              <b>Назва героя:</b> ${hero.localized_name}
              <b>Основний атрибут:</b> ${primary_attr(hero.primary_attr)}
              <b>Базова швидкість руху:</b> ${hero.move_speed}
              <b>Тип атаки:</b> ${attack_type(hero.attack_type)}
              <b>Базова сила:</b> ${hero.base_str}
              <b>Базова спритність:</b> ${hero.base_agi}
              <b>Базовий інтелект:</b> ${hero.base_int}
              <b>Іграбельні позиції:</b> ${hero.roles.join()}`,
              parse_mode: 'HTML',
            },
            thumb_url: `https://api.opendota.com${hero.icon}`,
          };
        });

        return ctx.answerInlineQuery(result);
      } catch (error) {
        debug(error);
      }
    }
  });
};

export default herostats;
