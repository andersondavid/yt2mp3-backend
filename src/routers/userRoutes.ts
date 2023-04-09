import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.post('/start/', UserController.startService);

export default router;