'use strict';
module.exports = function(app) {
  var pennlabs = require('../controllers/controller');

  // card routes
  app.route('/card')
  	.get(pennlabs.listAllCards)
    .post(pennlabs.createCard);

  app.route('/card/:cardId')
    .get(pennlabs.getCard)
    .delete(pennlabs.deleteCard);

  // list routes
  app.route('/list')
  	.post(pennlabs.createList);

  app.route('/list/:listId')
  	.get(pennlabs.getList)
  	.delete(pennlabs.deleteList);

  app.route('/editlist/:listId')
  	.post(pennlabs.changeListOrder);
};