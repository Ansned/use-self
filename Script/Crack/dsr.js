var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
"request_date":"2022-11-25T08:24:36Z","request_date_ms":1669364676288,"subscriber":{"entitlements":{"pro":{"expires_date":"2029-09-28T08:16:50Z","grace_period_expires_date":null,"product_identifier":"happy_449_1y","purchase_date":"2022-11-25T08:16:50Z"}},"first_seen":"2022-11-25T07:48:08Z","last_seen":"2022-11-25T07:48:08Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:aa2f101349304c6b93079c6630333097","original_application_version":"928","original_purchase_date":"2022-11-25T07:46:55Z","other_purchases":{},"subscriptions":{"happy_449_1y":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2029-12-28T08:16:50Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-11-25T08:16:51Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-11-25T08:16:50Z","refunded_at":null,"store":"app_store","unsubscribe_detected_at":null}

body = JSON.stringify(obj);
$done({body});
