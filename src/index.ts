import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';
import userRoutes from './routers/userRoutes';

const app = express();
const httpServer = createServer(app);

type Resquet = {
	oi: Socket
}

interface IConvertHostory {
	socketId: string,
	url: string,
	itemStatus: string
}



function socketMiddleware(req: Resquet, res, next) {
	req.io = { Server, httpServer };
	next();
}

const convertHistory: Array<IConvertHostory> = []

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/api', socketMiddleware, userRoutes);

httpServer.listen(3000, () => {
	console.log('Server listening on port 3000!');
});
