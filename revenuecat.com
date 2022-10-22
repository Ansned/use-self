[Script]
http-response ^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers\/(\$RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+))$ script-path=https://raw.githubusercontent.com/Ansned/Cuttlefish/master/Script/revenuecat.js,timeout=10, tag=合集
http-request ^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers\/(\$RCAnonymousID%)?([\u4E00-\u9FA5A-Za-z0-9-_]+)) script-path=https://raw.githubusercontent.com/Ansned/Cuttlefish/master/Script/bytq.js,script-update-interval=0
http-response https:\/\/buy\.itunes\.apple\.com\/verifyReceipt script-path=https://raw.githubusercontent.com/Ansned/Cuttlefish/master/Script/verifyReceipt.js


hostname = api.revenuecat.com,buy.itunes.apple.com
