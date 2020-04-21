'use strict';

const handleLogout = (req, res) => {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました');
}

const handleNotFound = (req, res) => {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりません');
}

const handleBadRequest = (req, res) => {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のメソッドです。');
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest
};
