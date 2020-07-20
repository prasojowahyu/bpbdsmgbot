// lib MHczUHrzvBLV1HsUn5XkOIfvg_do21SJR

////GLOBAL VAR
// regist token
var token = '1386325447:AAGb4qirmo7-ADVBuIuUmZ0deS1eOrBe4ic';
// buat objek baru kita kasih nama tg
var tg = new telegram.daftar(token);

////BASE HANDLER
// fungsi buat handle hanya menerima pesan berupa POST, kalau GET keluarkan pesan error
function doGet(e) {
    return HtmlService.createHtmlOutput("Hanya data $_POST");
}

// fungsi buat handle pesan POST
function doPost(e) {
    // Memastikan pesan yang diterima hanya dalam format JSON  
    if (e.postData.type == "application/json") {
        // parsing data yang masuk
        var update = JSON.parse(e.postData.contents);
        // Jika data pesan update valid, kita proses
        if (update) {
            prosesPesan(update);
        }
    }
}

//////////////////////////////////////////////////////////////////////////////
////PROSES PESAN MASUK
// fungsi utama kita buat handle segala pesan
function prosesPesan(update) {
    // detek klo ada pesan dari user
    if (update.message) {
        // penyederhanaan variable
        var msg = update.message;

        ////BASIC COMMAND
        // jika ada pesan berupa text
        if (msg.text) {
            //////////////////////////////////////////////////////////////////
            ////COMMAND REGEX
            // jika user ketik /ping, bot akan jawab Pong!
            if (/\/ping/i.exec(msg.text)) {
                return tg.kirimPesan(msg.chat.id, '<b>Pong!</b>', 'HTML'); //parse mode HTML
            }
            // jika user ketik /help, bot akan tampilkan panduan
            if (/\/help/i.exec(msg.text)) {
                return tg.kirimPesan(msg.chat.id, '<b>HELP ON THE WAY</b>', 'HTML'); //parse mode HTML
            }
            // command tanpa / (harus disable privasi)
            if (/check/i.exec(msg.text)) {
                return tg.kirimPesan(msg.chat.id, 'CHECK Re-CHECK!', 'HTML');
            }

            //////////////////////////////////////////////////////////////////
            ////BUTTONS
            //MAIN MENU
            if (/\/start/i.exec(msg.text)) {
                // pesan buat dikirim
                let pesan = "Kabar Terbaru Untuk:";
                // berisi button menu utama
                let keyboard = [
                    ['Kabar Terbaru', 'Website'],
                    ['Sosial Media', 'Contact']
                ]
                // panggil fungsi sendMsgKeyboard yang dibuat sebelumnya
                return sendMsgKeyboard(msg.chat.id, pesan, keyboard);
            }



            // kalau nanti mau kembangin sendiri menjadi bot interaktif, code nya taruh disini
            // atau buatkan fungsi tersendiri saja buat handle nya biar ga bertumpuk panjang
            // -- mulai custom text --
            // akhir deteksi pesan text
        }

        ////GROUP HANDLER
        // Nah ini, fungsi handle user yang masuk ke grup
        // deteksi ada event user baru atau gak:
        if (msg.new_chat_member) {
            //definisikan dulu nama user yang masuk
            var nama = msg.new_chat_member.first_name;
            // jika punya last name, kita tambahkan juga
            if (msg.new_chat_member.last_name) {
                nama += " " + msg.new_chat_member.last_name;
            }
            // Merangkai ucapan selamatnya di variable teks
            var teks = "Selamat datang, " + nama + ". nnn";
            // selanjutnya kirim pesannya ke chat id grup nya
            // pesan tanpa parse mode HTML / Markdown
            // tambahkan sendiri jika ingin format text
            return tg.kirimPesan(msg.chat.id, teks);
        }
    }

}


