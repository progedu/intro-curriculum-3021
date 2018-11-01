'use strict';
const pug = require('pug');
const contents = [];
const util = require('./handler-util');

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
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
        let content = {};//ユーザー名、日付、投稿を収めるオブジェクト
        content.date = new Date();//日付を格納
        content.user = req.user;//ユーザー名を格納
        content.body = decoded.split('content=')[1];//投稿内容を格納
        console.info('投稿されました：' + content.date + '：' + content.user + '：' + content.body);
        contents.push(content);
        console.info('これまでのすべての投稿');
        contents.forEach(value => { //一覧を表示
          console.info(`${value.user}:${value.date}:${value.body}`);
        });

        handleRedirectPosts(req, res);
      });
      break;
    default:
      util.handleBadRequest(req, res);
      console.info('Bad Request from: ' + req.user);
      break;
  }
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

module.exports = {
  handle: handle
};
