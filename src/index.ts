import express, { Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors'
import userRoutes from './routers/userRoutes';

const app = express();
const httpServer = createServer(app);
/*const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});*/

app.use(express.json());

const corsOptions = {
	origin: '*'
};
app.use(cors(corsOptions));

function socketMiddleware(req, res, next: NextFunction) {
	//req.io = io;
	req.io = {Server, httpServer}
	next();
}



app.use('/api', socketMiddleware, userRoutes);
httpServer.listen(3000, () => {
	console.log('Server listening on port 3000!');
});
