'use strict';

const pug = require('pug');
const util = require('./handler-util');
const contents = [];

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHeader(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(pug.renderFile('./views/posts.pug', { contents: contents }));
      break;
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        const content = decoded.split('content=')[1];
        console.info(`投稿されました: ${content}`);
        contents.push(content);
        console.info(`投稿内容: ${contents}`);
        handleRedirectPost(req, res);
      });
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  }
}

function handleRedirectPost(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

module.exports = {
  handle: handle
};