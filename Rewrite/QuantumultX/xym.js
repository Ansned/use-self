/******************************
脚本功能：
脚本作者：Ksn1314
更新时间：2022-11-28
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
［Rewrite_local］
^https://api.revenuecat.com/.+/(receipts|subscribers/($RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+))$ url script-response-body https://raw.githubusercontent.com/Ansned/use-self/main/Script/Crack/xym.js
https://buy.itunes.apple.com/verifyReceipt url script-response-body https://raw.githubusercontent.com/Ansned/use-self/main/Script/Crack/xym.js
［MITM］

hostname = api.revenuecat.com,buy.itunes.apple.com

*********************************/
