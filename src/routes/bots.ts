import express from 'express';

const botRouter = express.Router();

async function getBots(req: any, res: any) {
	console.log('Getting info from the bot...');
	res.end();
}

async function createBot(req: any, res: any) {
	console.log('Creating a new bot...');
	res.end();
}

async function deleteBot(req: any, res: any) {
	console.log('Deleting a bot...');
	res.end();
}

async function updateBot(req: any, res: any) {
	console.log('Updating a bot...');
	res.end();
}

botRouter
	.route('/bot')
	.get(getBots)
	.post(createBot)
	.delete(deleteBot)
	.put(updateBot);

export default botRouter;
