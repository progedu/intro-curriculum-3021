'use strict';

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain',
    'charset': 'utf-8'
  });
  res.end('ログアウトしました');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain',
    'charset': 'utf-8'
  });
  res.end('ページがみつかりません');
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain',
    'charset': 'utf-8'
  });
  res.end(req.method + 'は未対応のメソッドです');
}

module.exports = {
  handleLogout        : handleLogout,
  handleNotFound      : handleNotFound,
  handleRedirectPosts : handleRedirectPosts,
  handleBadRequest    : handleBadRequest
};
