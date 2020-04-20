'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  if (req.method === 'GET' || res.method === 'POST') {
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
  util.handleBadRequest(req, res);
}

module.exports = {
  route
};