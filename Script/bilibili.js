/***********************************

> 應用名稱：B站大会员
> 軟件版本：6.63.0
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 更新時間：2022-03-28
> 通知頻道：https://t.me/ddgksf2021
> 問題反饋：https://t.me/ddgksf2013_bot
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣
 
[rewrite_local]

# ～ B站大会员（2022-03-17）@ddgksf2013
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn|net|org)).*(playurl|player|reply)?\.(v3|v2|v1)\.(View|Reply|Play(URL|View|Conf)).*$ url script-response-body https://raw.githubusercontent.com/Ansned/use-self/main/Script/bilibili.js

[mitm] 

hostname = api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, *.bili*.*, app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net

***********************************/

var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = 'Buvid=Y2430C29359256014C2CA9BE7E3A7F2C7F29; DedeUserID=400825589; DedeUserID__ckMd5=74eca1c0cd603ce4; SESSDATA=ee58b01c%2C1682511135%2Cd0ff99a2; bili_jct=1e95c4430eab718c65bdb0e561234b09; sid=gpy3j09s';
$done({headers : modifiedHeaders});
