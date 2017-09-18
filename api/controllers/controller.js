'use strict';
var mongoose = require('mongoose'),
  Card = mongoose.model('Cards'),
  List = mongoose.model('Lists');

// global variable for assigning unique card id
var currCardId = 1;
// global variable for assigning unique list id
var currListId = 1;
// global variable for assigning unique list order
var currListOrder = 1;

/***** CARD CONTROLLER *****/
// add a new card with the given title, description, and listId
exports.createCard = function(req, res) {
  var newCard = new Card({
    title: req.body.title,
    description: req.body.description,
    listId: req.body.listId,
    id: currCardId
  });
  currCardId = currCardId + 1;
  newCard.save(function(err, card) {
    if (err) { res.send(err); }
    res.json(card);
  });
};

// get the title and description of a card by its id
exports.getCard = function(req, res) {
  Card.find({ id: req.body.cardId }, function(err, card) {
    if (err) { res.send(err); }
    res.json(card);
  });
};

// delete a card by its id
exports.deleteCard = function(req, res) {
  Card.remove({ id: req.body.cardId }, function(err, card) {
    if (err) { res.send(err); }
    res.json({ message: 'Card successfully deleted' });
  });
};

/***** LIST CONTROLLER *****/
// add a new list with the given title
exports.createList = function(req, res) {
  var newList = new List({
    title: req.body.title,
    order: currListOrder,
    id: currListId
  });
  currListId = currListId + 1;
  currListOrder = currListOrder + 1;
  newList.save(function(err, list) {
    if (err) { res.send(err); }
    res.json(list);
  });
};

// get the title and order of a list by its id
exports.getList = function(req, res) {
  List.find({ id: req.body.listId }, function(err, list) {
    if (err) { res.send(err); }
    res.json(list);
  });
};

// delete a list by its id
exports.deleteList = function(req, res) {
  List.remove({ id: req.body.listId }, function(err, card) {
    if (err) { res.send(err); }
    res.json({ message: 'List successfully deleted' });
  });
};

// change the order of a list by its id
exports.changeListOrder = function(req, res) {
  var listWithOrder = List.find({ order: req.body.order });
  if (listWithOrder != null) {
    res.json({ message: 'Error: cannot change order to order that already exists' });
  }
  List.findOneAndUpdate({ id: req.body.listId }, { order: req.body.order }, {new: true}, function(err, list) {
    if (err) { res.send(err); }
    res.json(list);
  });
};