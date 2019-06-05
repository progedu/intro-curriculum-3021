'use strict';

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('ログアウトしました!<br><a href="./posts">投稿一覧ページ</a>');
}

function handleNotFound(req, res){
  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('404 Not Found<br>そんなページはねぇよ！<br><a href="./posts">投稿一覧ページ</a>')
}

function handleBadRequest(req, res){
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('400 BadRequest<br>そんなリクエストはやめろよ！<br><a href="./posts">投稿一覧ページ</a>')
}
module.exports = {
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest: handleBadRequest
};
