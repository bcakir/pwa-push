var webPush = require("web-push");

webPush.setGCMAPIKey(process.env.GCM_API_KEY);

var subscription = {}; // Subscription object from frontend
webPush.sendNotification(subscription.endpoint, {
    userPublicKey: subscription.keys.p256dh,
    userAuth: subscription.keys.auth,
    payload: JSON.stringify({title: "test", body: "test", icon: "http://img03.blogcu.com/images/s/a/n/sancaktepeses/patron__ildirdi_1243956048.jpg"})
}).then(function (value) {
    console.log(value)
}).catch(function (err) {
    console.log(err);
});
