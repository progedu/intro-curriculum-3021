'use strict';
const http = require('http');
const auth = require('http-auth');
const router = require('./lib/router');

/*******************
 　ログファイル出力
 *******************/
const fs = require('fs');

//アクセスログファイル
const FileName_AccessLog = "./log/Access.log";

//サーバーエラーログファイル
const FileName_ServerErrorLog = "./log/ServerError.log";

//クライアントエラーログファイル
const FileName_ClientErrorLog = "./log/ClientError.log";


const basic = auth.basic({
  realm: 'Enter username and password.',
  file: './users.htpasswd'
});

const server = http.createServer(basic, (req, res) => {
  const now = new Date();
  //出力ログ
  const accessLog = `[${now}] Requested by ${req.connection.remoteAddress} \n`;
  fs.appendFile(FileName_AccessLog, accessLog, "utf8", () => { });
  router.route(req, res);
}).on('error', (e) => {
  //出力ログ
  const accessLog = `${e} \n`;
  fs.appendFile(FileName_ServerErrorLog, accessLog, "utf8", () => { });
  console.error('Server Error', e);
}).on('clientError', (e) => {
  //出力ログ
  const accessLog = `${e} \n`;
  fs.appendFile(FileName_ServerErrorLog, accessLog, "utf8", () => { });
  console.error('Client Error', e);
});

const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});