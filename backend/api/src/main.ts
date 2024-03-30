import express from 'express';
import errorHandlerGlobal from './middlewares/ErrorHandlerGlobal';
import { findUserById } from './repository/user-repository';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use(errorHandlerGlobal);
async function test() {
  const aa = await findUserById('1');
}
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
