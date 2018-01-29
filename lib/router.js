'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      const number = postsHandler.handle(req, res);
      if (number === 400) util.handleBadRequest(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);
      break;
    default:
      util.handleNotFound(req, res);
  };
}

module.exports = {
  route: route
};