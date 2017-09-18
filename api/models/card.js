'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create mongoose schema for how a card should be structured
var CardSchema = new Schema({
	title: String,
	description: String,
	listId: Number,
	id: Number
});

module.exports = mongoose.model('Cards', CardSchema);