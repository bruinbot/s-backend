import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import botRouter from './routes/bots';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
	res.json('Welcome to BruinBot API!');
});

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Successfully connected to mongoose instance!');
	})
	.catch((err) => {
		console.log('Failed to connect to mongoose instance');
		console.log('Error:\n', err);
	});

app.use(botRouter);

export { app };
