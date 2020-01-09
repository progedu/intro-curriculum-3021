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
  res.end(`やあ （´・ω・｀)
  ようこそ、バーボンハウスへ。
  このテキーラはサービスだから、まず飲んで落ち着いて欲しい。
  
  うん、「また」なんだ。済まない。
  仏の顔もって言うしね、謝って許してもらおうとも思っていない。
  
  でも、このスレタイを見たとき、君は、きっと言葉では言い表せない
  「ときめき」みたいなものを感じてくれたと思う。
  殺伐とした世の中で、そういう気持ちを忘れないで欲しい
  そう思って、このスレを立てたんだ。
  
  じゃあ、注文を聞こうか。
  
  ２典･･･バーボンハウスexit参照`);
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のメソッドです');
}

module.exports = {
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest
};
