import fs from 'fs';
import path from 'path';
import serve from 'koa-send';

export const indexController = ctx => {
  ctx.body = 'a';
};

const webHtmlLoader = () =>
  fs.readFileSync(path.resolve(__dirname, '../../public/dist/index.html'), {
    encoding: 'utf-8'
  });

const webHtml = webHtmlLoader();

export const appController = ctx => {
  ctx.type = 'text/html; charset=utf-8';
  ctx.body = process.env.NODE_ENV === 'development' ? webHtmlLoader() : webHtml;
};

export const staticController = ctx =>
  serve(ctx, ctx.path.slice(7), {
    root: path.resolve(__dirname, '../../public'),
    maxAge: 1000 * 60 * 60 * 24
  });
