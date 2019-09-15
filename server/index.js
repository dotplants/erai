import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import chalk from 'chalk';

import { version } from '../package.json';
import { logInfo, logWarn } from './utils/logger';
import router from './routes';

// Bootstrap
logInfo(chalk.bold('Erai-Server v' + version));
logInfo('by Team .Plants (@dotplants) and contributors 💕');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', ms + 'ms');

  (ms >= 1000 || ctx.status >= 400 ? logWarn : logInfo)(
    `(${ctx.status}) ${ctx.method} ${ctx.url} - ${ms}ms`
  );
});

app.use(async (ctx, next) => {
  if (process.env.NODE_ENV === 'development') {
    ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    ctx.set('Pragma', 'no-cache');
    ctx.set('Expires', 0);
  }

  await next();
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 1203;

app.listen(port);

logInfo('Running on ' + chalk.bold('http://localhost:' + port));

if (process.env.NODE_ENV === 'development') {
  logWarn('Development Build - Do NOT use on Production!!');
}
