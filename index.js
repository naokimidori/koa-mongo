import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from "koa-graphql";
import { buildSchema } from "graphql";
import { nanoid } from 'nanoid';

const app = new Koa();
const router = new Router();

const schema = buildSchema(`
  type User {
    id: ID!
    name: String
    age: Int
  }
  type Query {
    user: User
  }
`);

const rootValue = {
  user: () => ({
    id: nanoid(),
    name: '张三',
    age: 19 
  })
}

router.all('/_graphql_', graphqlHTTP({
  schema,
  rootValue,
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
