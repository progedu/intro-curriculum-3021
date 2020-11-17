'use strict';

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('<html><body><p>未対応のメソッドです</p><br /><a href="./posts">戻る</a></body><html>');
}


module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest
};
