import express, { Request } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import userRoutes from './routers/userRoutes';

const app = express();
const httpServer = createServer(app);
interface MyRequest extends Request {
	io: object
}

function socketMiddleware(req: MyRequest, res, next) {
	req.io = { Server, httpServer };
	next();
}

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/api', socketMiddleware, userRoutes);

httpServer.listen(3000, () => {
	console.log('Server listening on port 3000!');
});
