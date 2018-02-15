// 厳密モード
'use strict';
// ログアウト処理
function handleLogout(req, res) {
    // レスポンスヘッダに401(Unauthorized)を書き込みログアウトを実装する
    res.writeHead(401, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    // ログアウトした旨をレスポンスに書き出して終了
    res.end('ログアウトしました');
}
// ページが存在しなかった時の処理
function handleNotFound(req, res) {
    // レスポンスヘッダに404 - Not Foundを書き込む
    res.writeHead(404, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    // ページが見つからなかった旨をレスポンスに書き出して終了
    res.end('ページが見つかりません');
}
// /postsにPUTなどGET,POST以外のメソッドでアクセスされた時の処理
function handleBadRequest(req, res) {
    // レスポンスヘッダに400 - Bad Requestを書き込む
    res.writeHead(400, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    // 未対応のメソッドである旨をレスポンスに書き出して終了
    res.end('未対応のメソッドです');
}
// 関数をモジュールに登録する
module.exports = {
    handleLogout: handleLogout,
    handleNotFound: handleNotFound,
    handleBadRequest: handleBadRequest
};
