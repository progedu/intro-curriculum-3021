'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      if (req.method === "GET" || req.method === "POST") {
        postsHandler.handle(req, res);
      } else {
        util.handleBadRequest(req, res);
      }
      break;
    case '/logout':
      if (req.method === "GET") {
        util.handleLogout(req, res);
      } else {
        util.handleBadRequest(req, res);
      }
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};