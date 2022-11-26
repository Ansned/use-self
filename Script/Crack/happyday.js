var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
"pro":{
              "expires_date":"2029-05-26T05:05:04Z",
              "product_identifier":"happy_449_1y",
              "purchase_date":"2022-11-25T08:16:50Z"
    }
},
obj.subscriber.subscriptions ={
      "happy_449_1y":{
              "billing_issues_detected_at":null,
              "expires_date":"2029-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-11-25T08:16:51Z",
              "period_type":"normal",
              "purchase_date":"2022-11-25T08:16:50Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
     }
}  
body = JSON.stringify(obj); 
$done({body});
