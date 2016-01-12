'use strict';
let http = require('http');
let auth = require('http-auth');
let router = require('./lib/router');

let basic = auth.basic({
  realm: 'Enter username and password.',
  file: './users.htpasswd'
});

let server = http.createServer(basic, (req, res) => {
  router.route(req, res);
}).on('error', (e) => {
  console.error('Server Error', e);
}).on('clientError', (e) => {
  console.error('Client Error', e);
});

let port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});