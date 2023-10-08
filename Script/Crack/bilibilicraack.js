/*
脚本功能：哔哩哔哩解锁大会员
软件版本：6.90.0
更新时间：2022-10-31
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 哔哩哔哩大会员
^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili\.\w{3,9}\..+\/(View|Play(URL|View|Conf|erOnline)|MainList|ViewProgress)$ url script-request-header tttt.js
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
var modifiedheaders = {"Cookie":"DedeUserID=54343099; DedeUserID__ckMd5=492068d79771a5f4; SESSDATA=53e30d20%2C1710842706%2C5aaae892CjDYc80Lvrc9hd7haAjwtrdcKfD2w5NXrarjqfDI6nDAdDEejNV4zlKmdfaikTVpDvASVjJmdV9aSHhMVFBRaV9YYzVQbTZnQ0hTRHZTaDdmVFhZWWxtNW9uWjBodWdrQ1RfRU1QLW85c0xHZGl2c2Q2dEI4aExTTEVfTUx2WkEyVEctUzVOd2F3IIEC; bili_jct=f056f3ee5fc381a8bd3766ec6cfb8451; sid=gclqjr9v","Authorization":"identify_v1 419085a446a80610abb3cd3331268392CjDYc80Lvrc9hd7haAjwtrdcKfD2w5NXrarjqfDI6nDAdDEejNV4zlKmdfaikTVpDvASVjJmdV9aSHhMVFBRaV9YYzVQbTZnQ0hTRHZTaDdmVFhZWWxtNW9uWjBodWdrQ1RfRU1QLW85c0xHZGl2c2Q2dEI4aExTTEVfTUx2WkEyVEctUzVOd2F3IIEC","User-Agent":"bili-universal/70700200 os/ios model/iPhone X mobi_app/iphone osVer/15.4.1 network/2","x-bili-locale-bin":"Eg4KAnpoEgRIYW5zGgJDTg==","x-bili-device-bin":"CAEQqJnbIRokWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoIaVBob25lIFhSBjE1LjQuMWoFNy43LjByQDlFQjgzOTk0NzY2RUE5ODVERjRGNEM2QkEzNDc3QzBGMjAyMjA4MTIwOTU5NTcxMTFFQTQ4NkMwOEY5RUEyOEN4vfXU98sw","x-bili-metadata-bin":"CtwBNDE5MDg1YTQ0NmE4MDYxMGFiYjNjZDMzMzEyNjgzOTJDakRZYzgwTHZyYzloZDdoYUFqd3RyZGNLZkQydzVOWHJhcmpxZkRJNm5EQWRERWVqTlY0emxLbWRmYWlrVFZwRHZBU1ZqSm1kVjlhU0hoTVZGQlJhVjlZWXpWUWJUWm5RMGhUUkhaVGFEZG1WRmhaV1d4dE5XOXVXakJvZFdkclExUmZSVTFRTFc4NWMweEhaR2wyYzJRMmRFSTRhRXhUVEVWZlRVeDJXa0V5VkVjdFV6Vk9kMkYzSUlFQxIGaXBob25lGgVwaG9uZSComdshKgVhcHBsZTIkWkY0QUQyRjdFQTNEN0Q0MjRCMTBCNjFCRjhBQjg4MDJGN0VGOgNpb3M=","x-bili-fawkes-req-bin":"CgZpcGhvbmUSBHByb2QaCDIxNDRmNzEx"};
var uid = Number(cookie2object(headers.Cookie).DedeUserID);
let uids = [400825589, 137208118, 3493083748502332, 3493076226017893];
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
