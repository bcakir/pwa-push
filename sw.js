self.addEventListener("push", function (event) {
    console.log("Push event received");

    var pushData = event.data? JSON.parse(event.data.text()): {
        title: "Patron Cildirdi!",
        body: "%90 indirim, hemde sana ozel",
        icon: "http://img03.blogcu.com/images/s/a/n/sancaktepeses/patron__ildirdi_1243956048.jpg"
    };

    event.waitUntil(
        self.registration.showNotification(pushData.title, {
            body: pushData.body,
            icon: pushData.icon
        })
    );
});