import express from 'express';
import userRoutes from './routers/userRoutes';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});