'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  // switch (req.method) {
  //   case 'GET':
  //     break;
  //     case 'POST':
  //     break;  
  //   default:
  //     util.handleBadRequest(req, res);
  //     break;
  // }
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
};