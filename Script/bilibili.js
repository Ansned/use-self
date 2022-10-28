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
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn|net|org)).*(playurl|player|reply)?\.(v3|v2|v1)\.(View|Reply|Play(URL|View|Conf)).*$ url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Crack/blvip.js

[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = 'buvid3=8890E136-BBAA-096A-6B19-377ECC55F76905746infoc; nostalgia_conf=-1; b_lsid=48F4E91D_1841DEA4F6C; _uuid=67E101095A-BBB3-9AC10-B4A5-FEA4DDFD3551005874infoc; buvid4=38C4BB62-3B0E-D037-7515-83AE4E6BFF2A09081-022102817-GXFOIaD8gdhKsD8MeIV45w==; fingerprint=0a7d147035834d8329dbe1989ccbe7e4; buvid_fp_plain=undefined; SESSDATA=97910f6f,1682501236,27a27*a1; bili_jct=38aa684ae181c04d3ec9ff20f0a694c2; DedeUserID=400825589; DedeUserID__ckMd5=74eca1c0cd603ce4; sid=81xtjn50; PVID=1; buvid_fp=0a7d147035834d8329dbe1989ccbe7e4;
