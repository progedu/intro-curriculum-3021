'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);    // 401
      break;
    default:
      util.handleNotFound(req, res);  // 404
      break;
  }
}

module.exports = {
  route
};