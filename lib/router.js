// 厳密モード
'use strict';
// 自作のposts-handlerモジュール呼び出し
const postsHandler = require('./posts-handler.js');
// 自作のhandler-utilモジュール呼び出し
const util = require('./handler-util.js');
/**
 * リクエストされたURLによって処理を振り分ける（ルーティング）
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
function route(req, res) {
  switch (req.url) {
    // /postsのURLにリクエストがあった場合
    case '/posts':
      // posts-handlerモジュールで投稿処理を行う
      postsHandler.handle(req, res);
      break;
    // /logoutのURLにリクエストが有った場合
    case '/logout':
      // handler-utilモジュールでログアウト処理を行う
      util.handleLogout(req, res);
      break;
    // それ以外のURLにリクエストが有った場合
    default:
      // handler-utilモジュールでNot Found処理を行う
      util.handleNotFound(req, res);
      break;
  }
}
// このモジュール関数をに登録する
module.exports = {
  route: route
};