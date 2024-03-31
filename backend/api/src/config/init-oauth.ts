import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { AppError } from '../utils/AppError';

export function initOAuth() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      // eslint-disable-next-line
      function (accessToken, refreshToken, profile, done) {
        if (!profile) {
          console.log('profile', profile);
          const error = new AppError({
            statusCode: 401,
            message: 'Not authorized',
          });
          return done(error);
        }
        console.log('ACHIEVED HERE');
        // console.log(accessToken, refreshToken, profile._json);
        // const isEmailVerified = profile._json.email_verified
        const user = {
          googleId: profile.id,
          email: profile._json.email,
          name: profile.displayName,
          avatar: profile._json.picture,
        };
        done(null, user);
      }
    )
  );
}
