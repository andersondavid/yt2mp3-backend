import { createServer } from 'http';
import { Server } from 'socket.io';
import configs from './configs/';

import app from './app';
import socket from './services/socket';

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

httpServer.listen(configs.app.port, () => {
	console.log('Server listening on port 3000!');
});

socket(io);
