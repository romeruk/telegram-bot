import util from 'util';
const sleep = util.promisify(setTimeout);

const limits = new Map();

const defaultReplyFn = (ctx, msg) => console.log(msg);
const defaultKeyFn = (ctx) => ctx.from.id;

const options = {
  timeout: 1500,
  replyfn: defaultReplyFn,
  keyfn: defaultKeyFn,
};

const limitsMiddleware = (opts = {}) => async (ctx, next) => {
  const config = Object.assign({}, options, {
    ...opts,
  });
  const { timeout, replyfn, keyfn } = config;

  const value = keyfn(ctx);
  const getBlockedUser = limits.get(value);

  if (getBlockedUser) {
    return replyfn(ctx, getBlockedUser);
  } else {
    limits.set(value, `Дозволено 1 повідомлення в ${timeout} мілісекунд`);
    await sleep(timeout);
    limits.delete(value);
  }

  await next();
};

export default limitsMiddleware;
