'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create mongoose schema for how a list should be structured
var ListSchema = new Schema({
	title: String,
	order: Number,
	id: Number
});

module.exports = mongoose.model('Lists', ListSchema);