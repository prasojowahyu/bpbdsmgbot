// Isi dengan web App URL yang di dapat saat deploy
var webAppUrl = "https://script.google.com/macros/s/AKfycbxNc1jpEVJGWNCePsfw7-fEljQvmDMso31mXN5mCm9LAGfLq1o/exec";

function setWebHook() {
    var result = tg.request('setWebhook', {
        url: webAppUrl
    });
    Logger.log(result);
}