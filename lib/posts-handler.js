'use strict';
const jade = require('jade');
const handlerUtil = require('./handler-util');
const contents = [];

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(jade.renderFile('./views/posts.jade', { contents: contents }));
      break;
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        const content = decoded.split('content=')[1];
        console.info('投稿されました: ' + content);
        contents.push(content);
        console.info('投稿された全内容: ' + contents);
        handleRedirectPosts(req, res);
      });
      break;
    default:
      handlerUtil.handleBadRequest(req,res);
      break;
  }
}

module.exports = {
  handle: handle
};
