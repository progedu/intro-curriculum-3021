// 厳密モード
'use strict';
// jadeモジュール呼び出し
const jade = require('jade');
// 自作のhandler-utilモジュール呼び出し
const util = require('./handler-util.js');
// 投稿された内容
const contents = [];
/**
 * /postsのURLにリクエストがあった場合に実行する関数
 * リクエストしたHTTPメソッドによって処理を分岐する
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
function handle(req, res) {
    switch (req.method) {
        // GETメソッドでアクセスされた場合は投稿フォームを表示する
        case 'GET':
            // 'hi'と書き出して終了
            // res.end('hi');
            /**
             * レスポンスヘッダにステータスコードとヘッダ情報を書き出す
             * 第一引数：ステータスコード(200は成功)
             * 第二引数：ヘッダ情報のオブジェクト
             */
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            // jadeファイルに渡す変数情報{jadeでの変数名: jsでの変数名}
            let jadeOptions = { contents: contents };
            /** 
             * jadeファイルをhtml形式に変換する
             * 第一引数：jadeファイルのアドレス
             * 第二引数：変数情報のオブジェクト
            */
            let html = jade.renderFile('./views/posts.jade', jadeOptions);
            // jadeから変換されたHTMLを書き出して終了
            res.end(html);
            break;
        // POSTメソッドでアクセスされた場合は書き込み処理を行う
        case 'POST':
            // POSTされたデータを受け取る配列（分割されて送信されることがあるため）
            let body = [];
            // データが送られてくると'data'イベントが起こるので、bodyにデータを格納していく
            req.on('data', (chunk) => {
                body.push(chunk);
            });
            /** 
             * リダイレクトとログを行う処理
            */
            let redirectAndLog = function () {
                // 配列を結合して、文字列に変換する
                body = Buffer.concat(body).toString();
                // URIエンコードされた形でデータが送信されてくるのでデコードしてやる
                const decoded = decodeURIComponent(body);
                // 'content={投稿内容}'の形式になっているので、{投稿内容}の部分だけを取り出す
                const content = decoded.split('content=')[1];
                // 標準出力にログを書き出す
                console.info('投稿されました: ' + content);
                // ログに投稿内容を追加
                contents.push(content);
                // これまでの投稿内容を標準出力に書き出す
                console.info('投稿された全内容：' + contents);
                // リダイレクトを行う
                handleRedirectPosts(req, res);
            };
            // データをすべて受け取ると'end'イベントが起こるので、リダイレクトとログ処理を行う
            req.on('end', redirectAndLog);
            break;
        // POST, GET以外のメソッドでアクセスされた場合
        default:
            // handler-utilモジュールでBadRequest処理を行う
            util.handleBadRequest(req, res);
            break;
    }
}
/**
 * リダイレクト処理の実装
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
function handleRedirectPosts(req, res) {
    // レスポンスヘッダにステータスコードと'Location'プロパティをセットすることでリダイレクトを実現する
    // 同じURLにリダイレクトを行う場合はステータスコード303を使用する
    res.writeHead(303, {
        'Location': '/posts'
    });
    // 書き出し終了
    res.end();
}

// このモジュールに関数を登録する
module.exports = {
    handle: handle
};