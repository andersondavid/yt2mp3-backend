import { createServer } from 'http';
import { Server } from 'socket.io';
const port = process.env.PORT || 3000;

import app from './app';
import socket from './services/socket';

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

httpServer.listen(port, () => {
	console.log(`Server running at ${port}`);
});

socket(io);
