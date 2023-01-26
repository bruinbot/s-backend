import mongoose from 'mongoose';
import Location from './map.model';

const Schema = mongoose.Schema;
const Model = mongoose.Model;

// represent an item and how many the bot holds
const inventoryArticle = new Schema({
	item: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Item',
		required: true,
	},
	quantity: {
		type: Number,
		default: 0,
	},
});

// mongodb schema for a bruintbot :D
const botSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	location: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
		enum: ['Idle', 'InTransit'],
		default: 'Idle',
	},
	path: {
		type: [Location.schema],
	},
	queue: {
		type: [Location.schema],
	},
	inventory: {
		type: inventoryArticle,
		required: true,
	},
});

const botModel = new Model('bots', botSchema);

export default botModel;
