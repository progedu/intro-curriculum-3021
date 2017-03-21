'use strict';
const jade = require('jade');
const contents = [];

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'charset': 'utf-8'
      });
      res.end(jade.renderFile('./views/posts.jade', { contents: contents }));
      break;
    case 'POST':
      req.on('data', (data) => {
        const decoded = decodeURIComponent(data);
        const content = decoded.split('content=')[1];
        console.info('投稿されました: ' + content);
        contents.push(content);
        console.info('投稿された全内容: ' + contents);
        handleRedirectPosts(req, res);
      });
      break;
    default:
      handleBadRequest(req, res);
      break;
  }
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/html',
    'charset': 'utf-8'
  });
  res.end('未対応のメゾッド');
}

module.exports = {
  handle: handle
};
