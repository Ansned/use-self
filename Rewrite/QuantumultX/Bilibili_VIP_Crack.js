/*
脚本功能：哔哩哔哩解锁大会员
软件版本：7.7.0
更新时间：2022-12-02
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 哔哩哔哩大会员

^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili\.\w{3,9}\..+\/(View|Play(URL|View|Conf|erOnline)|MainList|ViewProgress)$ url script-request-header ClydeTime/tttt.js
[mitm] 
hostname = *.bilibili.com, 124.239.240.*, 101.89.57.66, 218.94.210.66, 240e:b1:9801:206:11:0:0:*

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
var modifiedheaders ={"Cookie":"DedeUserID=54343099; DedeUserID__ckMd5=492068d79771a5f4; SESSDATA=217bf1b6%2C1685203095%2C49d34ab1; bili_jct=b6f0a6f809194077b6afb3cccf7f831e; sid=8h2cq0cc","Authorization":"identify_v1 610d63542f5d67faf5cfe34c97ee48b1","User-Agent":"bili-universal/70700200 os/ios model/iPhone X mobi_app/iphone osVer/15.4.1 network/2","x-bili-locale-bin":"Eg4KAnpoEgRIYW5zGgJDTg==","x-bili-device-bin":"CAEQqJnbIRokWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoIaVBob25lIFhSBjE1LjQuMWoFNy43LjByQDlFQjgzOTk0NzY2RUE5ODVERjRGNEM2QkEzNDc3QzBGMjAyMjAzMDMwMDIwMjdFMTRBMDY0NzJDNzc3NDM3RTR4vfXU98sw","x-bili-metadata-bin":"CiA2MTBkNjM1NDJmNWQ2N2ZhZjVjZmUzNGM5N2VlNDhiMRIGaXBob25lGgVwaG9uZSComdshKgVhcHBsZTIkWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGOgNpb3M=","x-bili-fawkes-req-bin":"CgZpcGhvbmUSBHByb2QaCDc1NzY0ODkz"};
var uid = Number(cookie2object(headers.Cookie).DedeUserID);
let uids = [UID:400825589];
let result = uids.includes(uid);
if (result) {
	headers['Cookie'] = modifiedheaders.Cookie;
	headers['Authorization'] =  modifiedheaders.Authorization;
	headers['User-Agent'] = modifiedheaders['User-Agent'];
	headers['x-bili-locale-bin'] = modifiedheaders['x-bili-locale-bin'];
	headers['x-bili-device-bin'] = modifiedheaders['x-bili-device-bin'];
	headers['x-bili-metadata-bin'] = modifiedheaders['x-bili-metadata-bin'];
	headers['x-bili-fawkes-req-bin'] = modifiedheaders['x-bili-fawkes-req-bin'];
}
$done({ 'headers': headers });
