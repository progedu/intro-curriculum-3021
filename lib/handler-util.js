'use strict';
const cotentType = {
  'Content-Type': 'text/plain; charset=utf-8'
};

function handleLogout(req, res) {
  res.writeHead(401, cotentType);
  res.end('ログアウトしました');
}

function handleNotFound(req, res) {
  res.writeHead(404, cotentType);
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res){
  res.writeHead(404, cotentType);
  res.end('未対応のメソッドです');
}

module.exports = {
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest: handleBadRequest
};
