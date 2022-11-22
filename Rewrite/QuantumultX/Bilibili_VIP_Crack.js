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

var _0x4adb=['CiA4YTk3YmNmNTA1Y2EwMzNlZDU3ZDJlMTdjYjRlMTliMhIIaXBob25lX2kaBXBob25lIOS7sCEqBWFwcGxlMiRZMjQzMEMyOTM1OTI1NjAxNEMyQ0E5QkU3RTNBN0YyQzdGMjk6A2lvcw==','identify_v1\x208a97bcf505ca033ed57d2e17cb4e19b2','x-bili-fawkes-req-bin','DedeUserID=400825589;\x20DedeUserID__ckMd5=74eca1c0cd603ce4;\x20SESSDATA=e633d4b1%2C1684420175%2C206a41b2;\x20bili_jct=cf5763ac945f95cf5b7d90b59bbf1169;\x20sid=67dabc73','Cookie','Eg4KAnpoEgRIYW5zGgJUVw==','User-Agent','x-bili-device-bin','Authorization','CghpcGhvbmVfaRIEcHJvZBoIYmU1MDYyNWM='];var _0x4831=function(_0x4adb7f,_0x4831bf){_0x4adb7f=_0x4adb7f-0x0;var _0x32d001=_0x4adb[_0x4adb7f];return _0x32d001;};var headers=$request['headers'];modifiedheaders={'Cookie':_0x4831('0x3'),'Authorization':_0x4831('0x1'),'User-Agent':'bili-inter/70000100\x20os/ios\x20model/iPhone\x20XR\x20mobi_app/iphone_i\x20osVer/15.6.1\x20network/2','x-bili-locale-bin':_0x4831('0x5'),'x-bili-device-bin':'CA4Q5LuwIRokWTI0MzBDMjkzNTkyNTYwMTRDMkNBOUJFN0UzQTdGMkM3RjI5IghpcGhvbmVfaSoDaW9zMgVwaG9uZToFYXBwbGVCBUFwcGxlSglpUGhvbmUgWFJSBjE1LjYuMWoGMy4xNC4wckAwQTMwQUY3ODk1ODk4NjVGQ0EwODVGNEM2QzY5NURDRTIwMjIwNjE5MDk1NDM0RjBBQjM3QkVBNEQ5OTgzRkI3eJW9/+7BMA==','x-bili-metadata-bin':_0x4831('0x0'),'x-bili-fawkes-req-bin':_0x4831('0x9')};headers['Cookie']=modifiedheaders[_0x4831('0x4')];headers[_0x4831('0x8')]=modifiedheaders[_0x4831('0x8')];headers['User-Agent']=modifiedheaders[_0x4831('0x6')];headers['x-bili-locale-bin']=modifiedheaders['x-bili-locale-bin'];headers[_0x4831('0x7')]=modifiedheaders[_0x4831('0x7')];headers['x-bili-metadata-bin']=modifiedheaders['x-bili-metadata-bin'];headers[_0x4831('0x2')]=modifiedheaders[_0x4831('0x2')];$done({'headers':headers});
