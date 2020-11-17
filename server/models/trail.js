const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	origin: {
		type: String,
		required: true
	},
	destination: {
		type: String,
		required: true
	},
	waypoints: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	comments: {
		type: Array,
		required: true
	},
	photos: {
		type: Array,
		required: false,
		default: []
	},
	userVerified: {
		type: Number,
		required: false,
		default: 0
	},
	length: {
		type: Number,
		required: true
	},
	elevation: {
		type: Number,
		required: true
	},
	duration: {
		type: Number,
		required: false,
		default: 0
	},
	trailType: {
		type: String,
		required: true
	},
	terrain: {
		type: String,
		required: true
	},
	currentCondition: {
		type: String,
		required: false,
		default: 'None Available'
	},
	trafficLevels: {
		type: String,
		required: false,
		default: 'No information available'
	},
	waterSources: {
		type: String,
		required: false,
		default: 'No information available'
	}
});

const Trail = mongoose.model('Trail', trailSchema);

module.exports = Trail;
