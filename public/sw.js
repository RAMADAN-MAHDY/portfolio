self.addEventListener("push", function (event) {
    const data = event.data ? event.data.json() : {};

    const options = {
        body: data.message || "📩 لديك إشعار جديد من رمضان!",
        icon: "/icon.png", // ضع أيقونة مناسبة للإشعار
        badge: "/badge.png", // أيقونة صغيرة للإشعار
        data: { url: data.url || "https://ramadan-three.vercel.app/ContactMe" }, // تخزين الرابط لفتحه لاحقًا
        actions: [
            { action: "open_url", title: "📂 عرض التفاصيل" },
            { action: "close", title: "❌ إغلاق" }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title || "🔔 إشعار جديد", options)
    );
});

self.addEventListener("notificationclick", function (event) {
    event.notification.close();

    if (event.action === "open_url" && event.notification.data.url) {
        event.waitUntil(clients.openWindow(event.notification.data.url));
    } else {
        event.waitUntil(clients.openWindow("https://ramadan-three.vercel.app/ContactMe"));
    }
});
