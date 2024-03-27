import express from 'express';
import * as Sentry from '@sentry/browser';
import errorHandlerGlobal from './middlewares/ErrorHandlerGlobal';

Sentry.init({
  dsn: 'https://87a75cc2f6df79411893e12edd9cfbd0@o4506985147596800.ingest.us.sentry.io/4506985278865408',
  release: process.env.npm_package_version,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['http://localhost:3005'],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use(errorHandlerGlobal);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
