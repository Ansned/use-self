/*
脚本功能：哔哩哔哩解锁大会员
软件版本：6.90.0
更新时间：2022-10-31
使用声明：⚠此脚本仅供学习与交流，
        请勿转载与贩卖！⚠⚠⚠
*******************************
[rewrite_local]

# > 哔哩哔哩大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn|net|org)).*(playconf|player|reply)\.(v3|v2|v1)\.(ViewP|Reply|Play(URL|View|Conf)).*$ url script-request-header https://raw.githubusercontent.com/Ansned/use-self/main/Rewrite/QuantumultX/Bilibili_VIP_Crack.js
[mitm] 
hostname = api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, *.bili*.*, app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net
*/

var headers = $request['headers'];
modifiedheaders = {"Cookie":"DedeUserID=400825589; DedeUserID__ckMd5=74eca1c0cd603ce4; SESSDATA=94f07604%2C1683279553%2C2f030bb2; bili_jct=93edf2bfc736888a54daed6717c7b1d8; sid=7sf1fjbu","Authorization":"identify_v1 37094169d0046c0edc7f6a1422790bb2","User-Agent":"bili-inter/70000100 os/ios model/iPhone XR mobi_app/iphone_i osVer/15.6.1 network/2","x-bili-locale-bin":"Eg4KAnpoEgRIYW5zGgJUVw==","x-bili-device-bin":"CA4Q5LuwIRokWTI0MzBDMjkzNTkyNTYwMTRDMkNBOUJFN0UzQTdGMkM3RjI5IghpcGhvbmVfaSoDaW9zMgVwaG9uZToFYXBwbGVCBUFwcGxlSglpUGhvbmUgWFJSBjE1LjYuMWoGMy4xNC4wckAwQTMwQUY3ODk1ODk4NjVGQ0EwODVGNEM2QzY5NURDRTIwMjEwNzExMjMwMzM5NjRFMDQ5QUMxNUMxNDRDNkIyeJW9/+7BMA==","x-bili-metadata-bin":"CiAzNzA5NDE2OWQwMDQ2YzBlZGM3ZjZhMTQyMjc5MGJiMhIIaXBob25lX2kaBXBob25lIOS7sCEqBWFwcGxlMiRZMjQzMEMyOTM1OTI1NjAxNEMyQ0E5QkU3RTNBN0YyQzdGMjk6A2lvcw==","x-bili-fawkes-req-bin":"CghpcGhvbmVfaRIEcHJvZBoQZmZmZmZmZmYxOTNhNWFhMA=="};

headers['Cookie'] = modifiedheaders.Cookie;
headers['Authorization'] =  modifiedheaders.Authorization;
headers['User-Agent'] = modifiedheaders['User-Agent'];
headers['x-bili-locale-bin'] = modifiedheaders['x-bili-locale-bin'];
headers['x-bili-device-bin'] = modifiedheaders['x-bili-device-bin'];
headers['x-bili-metadata-bin'] = modifiedheaders['x-bili-metadata-bin'];
headers['x-bili-fawkes-req-bin'] = modifiedheaders['x-bili-fawkes-req-bin'];

$done({ 'headers': headers });
