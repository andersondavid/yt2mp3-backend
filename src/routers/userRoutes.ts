import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.post('/start/', UserController.startService);

router.post('/io/', UserController.socket);

export default router;