import axios from 'axios';
import { primary_attr, attack_type } from "../helpers/listheroeshelper";

const herostats = (bot) => {
  bot.inlineQuery(/^herostats: \d+$/, async (ctx) => {
    const { query } = ctx.inlineQuery;
    const dataCount = 50;
    let page = parseInt(query.split(':')[1], 10) || 1;

    //no sense to do api reguest if page > 3, becose there 130 heroes avaible in dota 2
    if (page < 4) {

      const heroes_stats = await axios.get(`${process.env.OPEN_DOTA_BASE_API_URL}/heroStats?api_key=${process.env.OPEN_DOTA_KEY}`);

      const data = heroes_stats.data.slice((page - 1) * dataCount, page * dataCount);


      let result = data.map((hero, i) => {
        return {
          type: "article",
          id: String(i),
          title: hero.localized_name,
          input_message_content: {
            message_text: `<b>Назва героя:</b> ${hero.localized_name}\n<b>Основний атрибут:</b> ${primary_attr(hero.primary_attr)}\n<b>Базова швидкість руху:</b> ${hero.move_speed}\n<b>Тип атаки:</b> ${attack_type(hero.attack_type)}\n<b>Базова сила:</b> ${hero.base_str}\n<b>Базова спритність:</b> ${hero.base_agi}\n<b>Базовий інтелект:</b> ${hero.base_int}\n<b>Іграбельні позиції:</b> ${hero.roles.join()}`,
            parse_mode: "HTML"
          },
          thumb_url: `https://api.opendota.com${hero.icon}`
        }
      });

      return ctx.answerInlineQuery(result);
    }

  });
}

export default herostats;