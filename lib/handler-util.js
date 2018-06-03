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

function handleBadRequest(req, res){
  console.info('コメント: handler-util---handleBadRequest---start');
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  console.info('コメント: handler-util---handleBadRequest---end');
  res.end('未対応のメソッドです');
}

module.exports = {
  handleLogout: handleLogout,
  handleNotFound:handleNotFound,
  handleBadRequest:handleBadRequest
};
