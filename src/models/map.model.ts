import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.Model;

const locationSchema = new Schema({
	latitude: {
		type: Number,
		required: true,
	},
	longitude: {
		type: Number,
		required: true,
	},
});

const Location = new Model('Location', locationSchema);

export default Location;
