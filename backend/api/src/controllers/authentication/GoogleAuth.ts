import { UserRepository } from './../../repository/UserRepository';
import { Request, Response } from 'express';
// import { GoogleAuthService } from '../../services/authentication/GoogleAuthService';

export class GoogleAuthController {
  async execute(req: Request, res: Response) {
    const userRepository = new UserRepository();
    // const service = new GoogleAuthService(userRepository)

    // await service.execute()
  }
}
