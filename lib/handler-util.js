'use strict';

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('401 Unauthorized: ログアウトしました');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('404 Not Found: ページがみつかりません');
}

function handleBadRequest(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  })
  res.end('400 Bad Request: 未対応のメソッドです')
}

module.exports = {
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest: handleBadRequest
};
