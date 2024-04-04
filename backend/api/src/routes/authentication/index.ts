import { Router } from 'express';
import { GoogleAuthController } from '../../controllers/authentication/GoogleAuth';

export const router = Router();

router.post('/google/oauth/token', new GoogleAuthController().execute);
