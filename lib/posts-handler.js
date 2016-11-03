'use strict';
const jade = require('jade');
const util = require('./handler-util');
const contents = [];

function handle(req, res) {

var hiduke = new Date();

var year = hiduke.getFullYear();
var month = hiduke.getMonth() + 1;
var week = hiduke.getDay();
var day = hiduke.getDate();
var hour = hiduke.getHours() + 9;
var min = hiduke.getMinutes();
var sec = hiduke.getSeconds();

if(hour > 24){
  week = week + 1;
    if(week > 6){
      week = week - 7;
    }
  day = day + 1;
  hour = hour - 24;
}
if(hour < 10){
  hour = "0" + hour;
}

if(min < 10){
  min = "0" + min;
}

var yobi = new Array("日", "月", "火", "水", "木", "金", "土");
var myMsg = year + "年" + month + "月" + day + "日(" + yobi[week] + ")時刻" + hour + "時" + min + "分" + sec + "秒 ";

  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'charset': 'utf-8'
      });
      res.end(jade.renderFile('./views/posts.jade', { contents: contents }));
      break;
    case 'POST':
      req.on('data', (data) => {
        const decoded = decodeURIComponent(data);
        const content = decoded.split('content=')[1];
        console.info('投稿されました: ' + content);
        contents.push(myMsg + content);
        console.info('投稿された全内容: ' + contents + '\n');
        handleRedirectPosts(req, res);
      });
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  }
}

function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

module.exports = {
  handle: handle
};
