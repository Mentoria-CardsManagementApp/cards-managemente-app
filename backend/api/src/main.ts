import express from 'express';
import cors from 'cors';

import { limiter } from './middlewares/rateLimiter';
import errorHandlerGlobal from './middlewares/ErrorHandlerGlobal';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(limiter);

const allowedOrigins = ['http://localhost:3005', 'http://localhost:4002'];

app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }

      return callback(null, true);
    },
  }));

app.use(errorHandlerGlobal);

enum ExitStatus {
  Failure = 1,
  Success = 0
}

process.on('unhandledRejection', (reason, promise) => {
  error(
    `App exiting due to an unhandled promise: ${promise} and reason ${reason}`
  )

  throw reason
})

process.on('uncaughtException', (error) => {
  error(`App exiting due to an uncaught exception: ${error}`)
  process.exit(ExitStatus.Failure)
})

try {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello API' });
  });

  const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']
  exitSignals.map((sig) => process.on(sig, async () => {
    try {
      await server.close();
      error(`App exited with success`)
      process.exit(ExitStatus.Success)
    } catch(error) {
      error(`App exited with error ${error}`)
      process.exit(ExitStatus.Failure)
    }
  }))
} catch(error) {
  //como evidenciar o erro?
  error(`App exited with error ${error}`)
  process.exit(ExitStatus.Failure)
}

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
