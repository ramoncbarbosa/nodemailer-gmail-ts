import express from 'express';
import dotenv from 'dotenv';
import emailRoutes from './routes/emailRoutes';

dotenv.config({path: '../.env'});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', emailRoutes);

app.listen(PORT, () => {
  console.log(`Rodando na Porta: ${PORT}`);
});
