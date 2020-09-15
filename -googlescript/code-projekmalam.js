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
                let pesan = "👋🏻 Hai, Silakan pilih menu disini..";
                // berisi button menu utama
                let keyboard = [
                    ['Kabar Terbaru', 'Website'],
                    ['Sosial Media', 'Contact']
                ]
                // panggil fungsi sendMsgKeyboard yang dibuat sebelumnya
                return sendMsgKeyboard(msg.chat.id, pesan, keyboard);
            }

            //keyboard pake var
            var strHome = '👋🏻 Hai Hai Hai, Silakan pilih menu disini..';
            var kbHome  =   [ 
                [ 'Kabar Terbaru', 'Website' ],
                [ 'Sosial Media', 'Contact' ] 
            ];

                ////SUB MENU
                //[Kabar Terbaru]
                if (/^Kabar Terbaru/i.exec(msg.text)) {
                    // pesan buat dikirim
                    let pesan = "Kabar Terbaru Untuk:";
                    // berisi button menu utama
                    let keyboard = [
                        ['Bencana', 'Cuaca'],
                        ['Home']
                    ]
                    
                    return sendMsgKeyboard(msg.chat.id, pesan, keyboard);
                }
                    ////Sub Menu [Kabar Terbaru]
                    //[Bencana]
                    if (/^Bencana/i.exec(msg.text)) {
                        let pesan = "Dapatkan update berita up-to-date dari BPBD Kota Semarang, Aktifkan notifikasi di Channel ini: \nhttps://t.me/BPBD_Semarang/";
                        return sendMsgKeyboard(msg.chat.id, pesan);
                    }
                    //[Cuaca]
                    if (/^Cuaca/i.exec(msg.text)) {
                        let pesan = "Informasi Cuaca terbaru di Kota Semarang, \nSumber: bmkg \nhttps://www.bmkg.go.id/cuaca/prakiraan-cuaca.bmkg?Kota=Semarang&AreaID=501262&Prov=35";
                        return sendMsgKeyboard(msg.chat.id, pesan);
                    }
                    //[Home]
                    if (/^Home/i.exec(msg.text)) {
                        return tg.sendMsgKeyboard(msg.chat.id, strHome, kbHome);
                    }
                    ///END//SUB-MENU///////////////////////////////////////////

                //[Website]
                if (/^Website/i.exec(msg.text)) {
                    let pesan = "Silakan Akses Link di Bawah:";
                    let keyboard = [
                        [{  "text": "🌐 Web BPBD Kota Semarang",
                            "url": "https://bpbd.semarangkota.go.id/" }, 
                        ]
                    ];
                    return sendMsgKeyboardInline(msg.chat.id, pesan, keyboard);
                }

                //[Sosial Media]
                if (/^Sosial Media/i.exec(msg.text)) {
                    let pesan = "Silakan Akses Link Sosial Media Resmi di Bawah:";
                    let keyboard = [
                        [{
                            "text": "🟡 Instagram",
                            "url": "https://www.instagram.com/bpbd_semarang/"
                        }, ],
                        [{
                            "text": "🟢 Twitter",
                            "url": "https://twitter.com/BPBD_Semarang"
                        }, ],
                        [{
                            "text": "🔵 Facebook",
                            "url": "https://www.facebook.com/bpbd.semarang"
                        }, ],
                        [{
                            "text": "🔴 Youtube",
                            "url": "https://www.youtube.com/channel/UCx3mUCT3iKzFQ2T0oHrZQUQ/"
                        }, ],
                    ];
                    return sendMsgKeyboardInline(msg.chat.id, pesan, keyboard);
                }

                //[Contact]
                if (/^Contact/i.exec(msg.text)) {
                    let pesan = "Silakan kirimkan laporan kejadian, masukan, atau saran ke kontak berikut";
                    let keyboard = [
                        [{
                            "text": "📢 WhatsApp BPBD Semarang",
                            "url": "https://api.whatsapp.com/send?phone=628122010051"
                        }, ]
                    ];
                    return sendMsgKeyboardInline(msg.chat.id, pesan, keyboard);
                }
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


