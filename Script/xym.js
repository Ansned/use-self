var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "receipt"{
    "receipt_type":"Production",
    "adam_id":1537380441,
    "app_item_id":1537380441, 
    "bundle_id":"com.JinyuMeng.WillItRain", 
    "application_version":"139",
    "download_id":501554296307006491, 
    "version_external_identifier":850015395, 
    "receipt_creation_date":"2022-11-12 08:10:32 Etc/GMT",
    "receipt_creation_date_ms":"1668240632000", 
    "receipt_creation_date_pst":"2022-11-12 00:10:32 America/Los_Angeles",
    "request_date":"2022-11-12 08:13:41 Etc/GMT", 
    "request_date_ms":"1668240821937",
    "request_date_pst":"2022-11-12 00:13:41 America/Los_Angeles",
    "original_purchase_date":"2022-07-08 04:57:08 Etc/GMT",
    "original_purchase_date_ms":"1657256228000",
    "original_purchase_date_pst":"2022-07-07 21:57:08 America/Los_Angeles", 
    "original_application_version":"139", 
    "in_app":[{
    "quantity":"1", 
    "product_id":"com.WillItRain.Monthly", 
    "transaction_id":"510001074899081", 
    "original_transaction_id":"510001074899081", 
    "purchase_date":"2022-11-12 08:10:30 Etc/GMT", 
    "purchase_date_ms":"1668240630000", 
    "purchase_date_pst":"2022-11-12 00:10:30 America/Los_Angeles",
    "original_purchase_date":"2022-11-12 08:10:31 Etc/GMT", 
    "original_purchase_date_ms":"1668240631000", 
    "original_purchase_date_pst":"2022-11-12 00:10:31 America/Los_Angeles", 
    "expires_date":"2029-09-09 17:07:45 Etc/GMT", 
    "expires_date_ms":"4092647115000",
    "expires_date_pst":"2029-09-09 09:07:45 America/Los_Angeles", 
    "web_order_line_item_id":"510000496398085", 
    "is_trial_period":"false", 
    "is_in_intro_offer_period":"false",
     "in_app_ownership_type":"PURCHASED"
    }]
}, 
  "latest_receipt_info"[{
    "quantity":"1", 
    "product_id":"com.WillItRain.Monthly",
    "transaction_id":"510001074899081", 
    "original_transaction_id":"510001074899081", 
    "purchase_date":"2022-11-12 08:10:30 Etc/GMT",
    "purchase_date_ms":"1668240630000",
     "purchase_date_pst":"2022-11-12 00:10:30 America/Los_Angeles", 
    "original_purchase_date":"2022-11-12 08:10:31 Etc/GMT", 
    "original_purchase_date_ms":"1668240631000",
    "original_purchase_date_pst":"2022-11-12 00:10:31 America/Los_Angeles",
    "expires_date":"2029-09-09 17:07:45 Etc/GMT", 
    "expires_date_ms":"4092647115000",
    "expires_date_pst":"2029-09-09 09:07:45 America/Los_Angeles", 
    "web_order_line_item_id":"510000496398085", 
    "is_trial_period":"false", 
    "is_in_intro_offer_period":"false",
    "in_app_ownership_type":"PURCHASED", 
    "subscription_group_identifier":"20858526"}], 
    "latest_receipt":"",
    "pending_renewal_info"[{
    "auto_renew_product_id":"com.WillItRain.Monthly",
    "product_id":"com.WillItRain.Monthly", 
    "original_transaction_id":"510001074899081", 
    "auto_renew_status":"1"
  }], 
    "status":0
}

body = JSON.stringify(obj);
$done({body});
