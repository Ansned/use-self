let obj = JSON.parse($response.body);

obj.license = "premium"
$done({body: JSON.stringify(obj)});
