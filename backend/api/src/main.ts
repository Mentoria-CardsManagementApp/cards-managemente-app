import express from 'express';
import cors from 'cors';

import { limiter } from './middlewares/rateLimiter';
import errorHandlerGlobal from './middlewares/ErrorHandlerGlobal';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(limiter);

const allowedOrigins = ['http://localhost:3005', 'http://localhost:4002'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }

      return callback(null, true);
    },
  })
);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use(errorHandlerGlobal);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
