'use strict';

function handleLogout(req, res) { // /logoutリクエスト
  res.writeHead(401, {
    'Content-Type': 'text/plain',
    'charset': 'utf-8'
  });
  res.end('ログアウトしました');
}

function handleNotFound(req, res) {// /実装されていないリクエスト
  res.writeHead(404, {
    'Content-Type': 'text/plain',
    'charset': 'utf-8'
  });
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res) { // 未対応HTTP
  res.writeHead(400, {
    'Conten-Type': 'text/plain',
    'charset': 'utf-8'
  });
  res.end( '未対応のメソッドです' )
}

module.exports = { //ここに追加しないと使えない
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest: handleBadRequest
};
