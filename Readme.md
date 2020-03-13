# Telegram bot

Приклад телеграм бота

## Getting Started

Доступні команди

<details>
  <summary>/roll</summary>
  <p>Рандомне значення від 1 до 100</p>
</details>
<details>
  <summary>/roll < from-to > </summary>
  <p>Рандомне значення в заданому діапазоні (/roll 1-1000)</p>
  <p>Max: 2147483647 Min: 1</p>
</details>
<details>
  <summary>/pos</summary>
  <p>Рандомно призначає позицію (Dota 2)</p>
</details>
<details>
  <summary>/question</summary>
  <p>Рандомне запитання по тематиці Dota 2</p>
</details>
<details>
  <summary>@Ecc1bot herostats: < page > </summary>
  <p>Видає список героїв Dota 2 при нажимані на якого показує його стати (!!! OPENDOTA API !!!)</p>
  <p>Приклад @Ecc1bot herostats: 1, доступно 3 сторінки</p>
</details>
<details>
  <summary>/coronavirus або /covid19</summary>
  <p>Показує ситуацію з коронавірусом</p>
</details>
<details>
  <summary>/covid19 < country > </summary>
  <p>Показує ситуацію з коронавірусом в країні</p>
  <p>Приклад /covid19 Ukraine</p>
</details>

### Prerequisites

Для використання необхідно вставновити наступні змінні середовища:
Файл .env

```
API_TOKEN="бот токен"
URL="heroku url або інший"
PORT=порт
MODE="dev"
OPEN_DOTA_KEY="api.opendota.com ключ"
OPEN_DOTA_BASE_API_URL="https://api.opendota.com/api"
```

### Installing

Встановлення залежностей:

```
npm install
```

### Run in dev mod

Запуск в режимі розробки (nodemon):

```
npm run dev
```

## Deployment

Завантажте на хостинг та виконайте команду
Необхідно встановити URL та MODE змінні середовища

```
npm run start
```

## Built With

- [telegraf](https://telegraf.js.org/#/) - Modern telegram bot framework
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [cheerio](https://github.com/cheeriojs/cheerio) - Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
