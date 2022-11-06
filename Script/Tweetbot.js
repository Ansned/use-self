/******************************
脚本功能：Tweetbot解锁订阅
软件版本：7.1.1
脚本作者：
更新时间：2022-11-6
*******************************
[rewrite_local]
https://push.tapbots.com/tweetbot/5/verify_subscription url script-response-body https://raw.githubusercontent.com/Ansned/use-self/main/Script/Tweetbot.js

[mitm]

hostname = push.tapbots.com

*****************************/

let obj = JSON.parse($response.body);

obj["expires_at"]= 3476097520,
obj["can_trial"]= true,

$done({body: JSON.stringify(obj)});


