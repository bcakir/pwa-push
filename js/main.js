window.addEventListener("load", function(event) {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(initializeState);
    } else {
        console.warn("Service worker not supported");
    }

    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.getSubscription()
            .then(function(subscription) {
                console.log(JSON.stringify(subscription));
            })
            .catch(function(err) {
                console.warn("Error during getSubscription(). ", err);
            });
    });
});

function initializeState() {
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        console.warn("Notification not supported");
        return;
    }

    if (Notification.permission === 'denied') {
        console.warn("User blocked subscription");
        return;
    }

    if (!("PushManager" in window)) {
        console.warn("Push not supported");
        return;
    }

    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
        console.log("Subscribe");
        serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
            .then(function(subscription) {
                console.log(subscription);
            })
            .catch(function(err) {
                console.warn("Error during subscribe(). ", err);
            });
    });
}