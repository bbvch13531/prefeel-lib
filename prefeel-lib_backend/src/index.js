require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// load environment variables
const {
  PORT: port
} = process.env;

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(ctx => {
  ctx.body = 'Hello prefeel-lib';
});

app.listen(port, () => {
  console.log(`The server is listening to port ${port}`);
});
