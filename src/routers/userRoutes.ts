import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/io/', UserController.socket);
router.get('/hello/', (req, res) => {
	res.send('hello world')
});

export default router;