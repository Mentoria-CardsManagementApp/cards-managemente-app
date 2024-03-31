import { Express } from 'express';
import { authenticationRouter } from './authentication';

export const initRoutes = (app: Express) => {
  app.use('/api/v1/auth', authenticationRouter);
};
