/******************************

脚本功能：哔哩哔哩+解锁大会员
下载地址：https://is.gd/flDAic
特别说明：共享会员—随时失效！
软件版本：7.1.2
脚本作者：彭于晏💞
更新时间：2022-10-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]
13
14
# ～ B站大会员（2022-03-17）@ddgksf2013
15
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn|net|org)).*(playurl|player|reply)?\.(v3|v2|v1)\.(View|Reply|Play(URL|View|Conf)).*$ url script-response-body https://raw.githubusercontent.com/Ansned/use-self/main/Script/Bili.js
16
17
[mitm] 
18
19
hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

*******************************/

var _0x33d2=['UMOVw7TDsA==','buvid3=8890E136-BBAA-096A-6B19-377ECC55F76905746infoc; nostalgia_conf=-1; b_lsid=48F4E91D_1841DEA4F6C; _uuid=67E101095A-BBB3-9AC10-B4A5-FEA4DDFD3551005874infoc; buvid4=38C4BB62-3B0E-D037-7515-83AE4E6BFF2A09081-022102817-GXFOIaD8gdhKsD8MeIV45w==; fingerprint=0a7d147035834d8329dbe1989ccbe7e4; buvid_fp_plain=undefined; SESSDATA=97910f6f,1682501236,27a27*a1; bili_jct=38aa684ae181c04d3ec9ff20f0a694c2; DedeUserID=400825589; DedeUserID__ckMd5=74eca1c0cd603ce4; sid=81xtjn50; PVID=1; buvid_fp=0a7d147035834d8329dbe1989ccbe7e4;
