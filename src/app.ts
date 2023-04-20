import express from 'express';
import cors from 'cors';

import routes from './routers/userRoutes';
const app = express();

app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});
app.use('/api', routes);

export default app;
