/*
脚本功能：哔哩哔哩解锁大会员
软件版本：7.7.0
更新时间：2022-12-02
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 哔哩哔哩大会员

^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn|net|org)).*(playconf|player|reply)\.(v3|v2|v1)\.(ViewP|Reply|Play(URL|View|Conf)).*$ url script-request-header https://raw.githubusercontent.com/Ansned/use-self/main/Rewrite/QuantumultX/Bilibili_VIP_Crack.js
[mitm] 

hostname = api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, *.bili*.*, app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net

*/

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

const cookie2object = (cookie) => {
  var obj = {};
  var arr = cookie.split("; ");
  arr.forEach(function (val) {
    var brr = val.split("=");
    obj[brr[0]] = brr[1];
  });
  return obj;
};

var headers = $request['headers'];
var modifiedheaders = {"Cookie":"DedeUserID=54343099; DedeUserID__ckMd5=492068d79771a5f4; SESSDATA=bf67508b%2C1685590493%2C63442ec2; bili_jct=440fdb025ca0b5c1474bad93be1660ac; sid=n4iy5u82","Authorization":"identify_v1 4b188da45eb374194c5d7398d046a3c2","User-Agent":"bili-universal/70700200 os/ios model/iPhone X mobi_app/iphone osVer/15.4.1 network/2","x-bili-locale-bin":"Eg4KAnpoEgRIYW5zGgJDTg==","x-bili-device-bin":"CAEQqJnbIRokWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoIaVBob25lIFhSBjE1LjQuMWoFNy43LjByQDlFQjgzOTk0NzY2RUE5ODVERjRGNEM2QkEzNDc3QzBGMjAyMTA3MDQxMzQzNTNCMjlENzg5N0UxRUI2QjJDNDV4vfXU98sw","x-bili-metadata-bin":"CiA0YjE4OGRhNDVlYjM3NDE5NGM1ZDczOThkMDQ2YTNjMhIGaXBob25lGgVwaG9uZSComdshKgVhcHBsZTIkWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGOgNpb3M=","x-bili-fawkes-req-bin":"CgZpcGhvbmUSBHByb2QaEGZmZmZmZmZmYzUxYTQ1OWU="};

var uid = Number(cookie2object(headers.Cookie).DedeUserID);
let uids = [400825589,3493083748502332];
let result = uids.includes(uid);
if (result) {
headers['Cookie'] = modifiedheaders.Cookie;
headers['Authorization'] =  modifiedheaders.Authorization;
headers['User-Agent'] = modifiedheaders['User-Agent'];
headers['x-bili-locale-bin'] = modifiedheaders['x-bili-locale-bin'];
headers['x-bili-device-bin'] = modifiedheaders['x-bili-device-bin'];
headers['x-bili-metadata-bin'] = modifiedheaders['x-bili-metadata-bin'];
headers['x-bili-fawkes-req-bin'] = modifiedheaders['x-bili-fawkes-req-bin'];

$done({ 'headers': headers });
