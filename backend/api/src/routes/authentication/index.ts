import { Router } from 'express';
import passport from 'passport';
import { GoogleAuthenticationController } from '../../controllers/authentication/google';

const authenticationRouter = Router();

authenticationRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  }),
  new GoogleAuthenticationController().execute
);

export { authenticationRouter };
