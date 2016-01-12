'use strict';
let postsHandler = require('./posts-handler');
let util = require('./handler-util')

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route: route
}