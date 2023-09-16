/*
脚本功能：哔哩哔哩解锁大会员
软件版本：7.7.0
更新时间：2022-12-02
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 哔哩哔哩大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn|net|org)).*(playconf|player|reply)\.(v3|v2|v1)\.(ViewP|Reply|Play(URL|View|Conf)).*$ url script-request-header https://Ansned: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@raw.githubusercontent.com/Ansned/use-self/main/Rewrite/QuantumultX/Bilibili_VIP_Crack.js

[mitm] 

hostname = api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, *.bili*.*, app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net


