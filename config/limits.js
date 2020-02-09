
const limitConfig = {
  window: 3000,
  limit: 1,
  onLimitExceeded: (ctx, next) => ctx.reply('Rate limit exceeded')
}

const questionLimitConfig = {
  window: 10 * 1000,
  limit: 1,
  keyGenerator: function (ctx) {
    return ctx.chat.id
  },
  onLimitExceeded: (ctx, next) => ctx.reply('Question rate limit exceeded.')
}

module.exports = {
  limitConfig,
  questionLimitConfig
}