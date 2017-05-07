'use strict';
const responseHeader = {
  'Content-Type': 'text/plain; charset=utf-8'
};

function handleBadRequest(req, res) {
  res.writeHead(400, responseHeader);
  res.end('未対応のメソッドです');
}

function handleLogout(req, res) {
  res.writeHead(401, responseHeader);
  res.end('ログアウトしました');
}

function handleNotFound(req, res) {
  res.writeHead(404, responseHeader);
  res.end('ページがみつかりません');
}

module.exports = {
  handleBadRequest: handleBadRequest,
  handleLogout: handleLogout,
  handleNotFound: handleNotFound
};
