const limits = new Map();

const defaultReplyFn = (ctx, msg) => ctx.reply(msg);
const defaultKeyFn = (ctx) => ctx.from.id;

const options = {
  timeout: 5000,
  replyfn: defaultReplyFn,
  keyfn: defaultKeyFn
}

const limitsMiddleware = (opts = {}) => async (ctx, next) => {
  const config = Object.assign(options, opts);

  const { timeout, replyfn, keyfn } = config;

  const value = keyfn(ctx);
  const getBlocketUser = limits.get(value);

  if (getBlocketUser) {
    return replyfn(ctx, getBlocketUser);
  }
  else {
    limits.set(value, `Дозволено 1 повідомлення в ${timeout} мілісекунд`);
    setTimeout(() => {
      limits.delete(value);
    }, timeout);
  }

  await next()
};

export default limitsMiddleware;