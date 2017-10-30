'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

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
          // ２行目の
          // const util = require('./handler-util'); 
          // を借りて、コピーして posts-handler に貼り付ける予定が、
          // ここで、util.handleBadRequest(req,res); をしてしまっていました。
      break;
  }
}

module.exports = {
  route: route
};