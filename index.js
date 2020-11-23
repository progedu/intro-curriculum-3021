'use strict';
//3章22節 認証された投稿の一覧表示機能

const http = require('http');
const auth = require('http-auth');
const router = require('./lib/router');

const basic = auth.basic({
  realm: 'Enter username and password.',
  file: './users.htpasswd'
});

const server = http.createServer(basic, (req, res) => {
  router.route(req, res);
}).on('error', (e) => {
  console.error('Server Error', e);
}).on('clientError', (e) => {
  console.error('Client Error', e);
});

const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});