import { Request, Response } from 'express';
import { GoogleAuthenticationService } from '../../services/authentication/google-auth';

export class GoogleAuthenticationController {
  async execute(req: Request, res: Response) {
    console.log('req.user', req.user);
    const service = new GoogleAuthenticationService();
    const data = await service.execute({
      googleId: (req.user as { googleId: string }).googleId,
    });
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const oneWeekInMs = oneDayInMs * 7;
    // res.setHeader('Set-Cookie', [
    //   `accessToken=${data.accessToken}; HttpOnly; Path=/; Max-Age=${oneDayInMs}; SameSite=None; Secure`,
    //   `refreshToken=${data.refreshToken}; HttpOnly; Path=/; Max-Age=${oneWeekInMs}; SameSite=None; Secure`]);
    res.cookie('accessToken', data.accessToken, {
      httpOnly: true,
      path: '/',
      maxAge: oneDayInMs,
      sameSite: 'none',
      secure: true,
    });
    res.cookie('refreshToken', data.refreshToken, {
      httpOnly: true,
      path: '/',
      maxAge: oneWeekInMs,
      sameSite: 'none',
      secure: true,
    });
    return res.redirect('http://localhost:4200/alternative-success');
  }
}
