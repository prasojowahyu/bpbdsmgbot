/////////////////////////////ALL FUNCTIONS

////SET WEBHOOK HANDLER
// Isi dengan web App URL yang di dapat saat deploy
var webAppUrl = "https://script.google.com/macros/s/AKfycbxGN5QCEJF4JlvX9vGKpIH69mfsFOegE44-SXCMAgcbuEzbGCA/exec";

function setWebHook() {
    var result = tg.request('setWebhook', {
        url: webAppUrl
    });
    Logger.log(result);
}

////DELETE WEBHOOK HANDLER
function deleteWebhook() {
    var result = tg.request('deleteWebhook', {
        url: webAppUrl
    });
    Logger.log(result);
}

////SEND KEYBOARD
// membuat fungsi kirim keyboard
function sendMsgKeyboard(chatid, pesan, keyboard) {
    let data = {
        chat_id: chatid,
        text: pesan,
        parse_mode: 'HTML',
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: keyboard
        }
    }
    let r = tg.request('sendMessage', data);
    return r;
}

////KEYBOARD INLINE
// fungsi untuk mengirim pesan dengan keyboard inline
function sendMsgKeyboardInline(chatid, pesan, keyboard) {
    let data = {
        chat_id: chatid,
        text: pesan,
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: keyboard
        }
    }
    let r = tg.request('sendMessage', data);
    return r;
}
