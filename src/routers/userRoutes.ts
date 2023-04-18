import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/io/', UserController.socket);

export default router;