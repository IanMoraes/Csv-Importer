import express, { Express } from 'express';
import filesRouter from './routes/filesRouter';
import usersRouter from './routes/usersRouter';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors({
  origin: process.env.ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use('/api/files', filesRouter)
app.use('/api/users', usersRouter)


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});