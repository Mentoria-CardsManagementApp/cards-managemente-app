import { rateLimiter } from './config/rate-limiter';
import errorHandlerGlobal from './middlewares/ErrorHandlerGlobal';
import { initOAuth } from './config/init-oauth';
import { app } from './app';
import { cors } from './config/cors';
import { initRoutes } from './routes';
// import passport from 'passport';
import cookieParser from 'cookie-parser';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(cookieParser());
app.use(cors);
app.use(rateLimiter);

initOAuth();
initRoutes(app);
// app.use('/', (req, res) => {
//   res.send('Hello World');
// })
// app.use('/auth/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:4200/failure', session: false }), (req, res) => {
//   console.log('req.user', req.user);
//   return res.redirect('http://localhost:4200/success');
// });
app.use(errorHandlerGlobal);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
