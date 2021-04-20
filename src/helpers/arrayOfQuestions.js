export const variants = {
  0: 'first',
  1: 'second',
  2: 'third',
  3: 'fourth',
};

export const questions = [
  {
    question: 'When does the first night start?',
    answerOptions: [
      'At minute 4:00',
      'At minute 5:00',
      'At minute 6:00',
      'At minute 10:00',
    ],
    rightAnswer: variants[0],
  },
  {
    question: 'How Many Players Have Played Dota 2 in 2018?',
    answerOptions: ['12 millions', '24 millions', '28 millions', '32 millions'],
    rightAnswer: variants[1],
  },
  {
    question: 'In what year was the Grimstroke added?',
    answerOptions: ['2017', '2018', '2019', '2020'],
    rightAnswer: variants[1],
  },
  {
    question: 'В якому патчі добавили нейтральні предмети ?',
    answerOptions: ['7.21', '7.22', '7.23', '7.24'],
    rightAnswer: variants[2],
  },
  {
    question: 'Хто переміг в The Frankfurt Major 2015?',
    answerOptions: ['OG', 'Secret', 'Evil Geniuses', 'EHOME'],
    rightAnswer: variants[0],
  },
  {
    question: 'Хто переміг в The Boston Major 2016?',
    answerOptions: ['Evil Geniuses ', 'Ad Finem', 'OG', 'Digital Chaos'],
    rightAnswer: variants[2],
  },
  {
    question: 'Хто переміг в ESL One Katowice 2018?',
    answerOptions: ['Fnatic', 'Vici Gaming', 'Team Liquid', 'Virtus.pro'],
    rightAnswer: variants[3],
  },
  {
    question: 'Нейтральні предмети 1 розряду випадають з: ',
    answerOptions: ['3 хвилини', '5 хвилини', '7 хвилини', '10 хвилини'],
    rightAnswer: variants[2],
  },
  {
    question: 'TELESCOPE додає до основної дальності атаки: ',
    answerOptions: [
      '125 дальності атаки',
      '150 дальності атаки',
      '175 дальності атаки',
      '200 дальності атаки',
    ],
    rightAnswer: variants[0],
  },
  {
    question:
      'Какая из приведенных пассивных способностей не работает на здания?',
    answerOptions: [
      'Curse of Avernus (пассивка Abaddon)',
      'Phantom Rush (пассивка Phantom Lancer)',
      'Mortal Strike (крит Wraith King)',
      'Return (пассивка Centaur)',
    ],
    rightAnswer: variants[2],
  },
  {
    question: 'Какую из приведенных способностей нельзя избежать блинком?',
    answerOptions: [
      'Ensnare (сетка Naga Siren)',
      'Stifling Dagger (даггер Phantom Assassin)',
      'Viper Strike (ульт Viper)',
      'Unstable Concoction (бомба Alchemist)',
    ],
    rightAnswer: variants[3],
  },
  {
    question:
      'Получит ли иллюзия героя бонус к скорости атаки, если он купит предмет Moon Shard?',
    answerOptions: ['Да', 'Нет'],
    rightAnswer: variants[0],
  },
  {
    question:
      'Если герой под действием способности Flux персонажа Arc Warden подойдет к нейтральному крипу, то:',
    answerOptions: [
      'Действие Flux прекратится до тех пор, пока герой вновь не останется один или эффект заклинания не закончится',
      'Flux продолжит работать',
      'Flux перестанет работать',
    ],
    rightAnswer: variants[0],
  },
  {
    question:
      'Стакаются ли эффекты предметов Solar Crest и Medallion of Courage на цели?',
    answerOptions: [
      'Да, дебаффы полностью стакаются',
      'Да, но оба дебаффа действуют в два раза слабее',
      'Нет, действует только первый дебафф. После окончания его действия начинает работать второй',
    ],
    rightAnswer: variants[0],
  },
  {
    question: 'Можно ли убить Рошана ультимейтом Axe?',
    answerOptions: [
      'Да',
      'Да, но Рошан получит на 55% меньше урона из-за магического сопротивления',
      'Нет',
    ],
    rightAnswer: variants[0],
  },
  {
    question: 'Стакается ли талант на вампиризм с Desolator?',
    answerOptions: [
      'Да, если талант был изучен при отсутствии Desolator в инвентаре',
      'Да, и талант, и Desolator полностью работают',
      'Нет, работает только талант',
      'Нет, работает только Desolator',
    ],
    rightAnswer: variants[1],
  },
  {
    question:
      'Кто может избежать урона от способности Rupture персонажа Bloodseeker?',
    answerOptions: [
      'Anti-Mage с предметом Aether Lens',
      'Любой герой с предметами Aether Lens и Blink Dagger',
      'Queen of Pain при блинке на максимальную дистанцию и быстром шаге в сторону',
      'Все три варианта верны',
    ],
    rightAnswer: variants[3],
  },
  {
    question:
      'Enigma в BKB использует свой ультимейт. Прервется ли каст, если на неё кинуть сетку Тролля?',
    answerOptions: [
      'Да',
      'Нет, но после окончания Black Hole Enigma не сможет двигаться, пока сетка не закончится',
      'Нет, способность нейтрального существа не работает на юнитов с иммунитетом к магии',
    ],
    rightAnswer: variants[0],
  },
  {
    question:
      'Действует ли заклинание Global Silence на Lifestealer, который находится в герое с помощью способности Infest?',
    answerOptions: ['Да', 'Нет'],
    rightAnswer: variants[1],
  },
  {
    question:
      'Какой из перечисленных предметов нельзя использовать во время способности Ball Lighting персонажа Storm Spirit?',
    answerOptions: [
      "Eul's Scepter of Divinity",
      'Blink Dagger',
      'Black King Bar',
      'Все эти предметы можно использовать',
    ],
    rightAnswer: variants[3],
  },
  {
    question:
      'Действуют ли предметы Ring of Health, Void Stone и Perseverance, если их передать в инвентарь союзника?',
    answerOptions: [
      'Да, полностью действуют',
      'Да, но при передаче Perseverance действует только регенерация. Урон не увеличивается',
      'Нет, не действуют',
    ],
    rightAnswer: variants[0],
  },
  {
    question: 'Действует ли способность Chronosphere на курьеров?',
    answerOptions: ['Да', 'Нет', 'Только на курьеров вражеской команды'],
    rightAnswer: variants[1],
  },
  {
    question: 'З якої хвилини випадають предмети 5 розряду?',
    answerOptions: [
      'З 40 хвилини',
      'З 50 хвилини',
      'З 60 хвилини',
      'З 70 хвилини',
    ],
    rightAnswer: variants[2],
  },
];
