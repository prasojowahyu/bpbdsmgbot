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

//reply tags
function sendMsgReplyTag(msg, pesan) {
    //inisiasi message id yg bakal direply
    let msg_id = msg.message_id;

    //kalo pesannya mereply pesan lain, message id nya diupdate
    if (msg.reply_to_message) {
        msg_id = msg.reply_to_message.message_id;
    }

    let data = {
        chat_id: msg.chatid,
        text: pesan,
        reply_to_message_id: msg_id
    }
    let r = tg.request('sendMessage', data);
    return r;
}

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


// fungsi timeConverter, untuk merubah timestamp ke waktu yang bisa dibaca manusia
// kadang perlu di x1000 dari timestamp biasa (timestampnya telegram)

// jika timeConverter(UNIX_timestamp) berarti timestamp biasa yang akan di x1000
// jika timeConverter(UNIX_timestamp, true) berarti akan dikali ribuan 

function timeConverter(UNIX_timestamp, ribuan) {
    ribuan = (typeof ribuan == 'undefined') ? false : true;

    let a = new Date(UNIX_timestamp);
    if (ribuan) {
        a = new Date(UNIX_timestamp * 1000);
    }

    //buat index bulan
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];

    // ambil pecahan waktu masing-masing
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

    // gabungkan ke dalam variable time
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}
