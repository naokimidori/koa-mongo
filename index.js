import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from "koa-graphql";
import schema from './schema';

const app = new Koa();
const router = new Router();

router.all('/_graphql_', graphqlHTTP({
  schema,
  graphiql: true,
}));

router.get('/', async ctx => {
  ctx.body = `<h1>Hello World!</h1>`
})

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server start on 5000')
})
