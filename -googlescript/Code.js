//bot token
var token = '1161949998:AAH84066MIi1YZDPUjWzZ56tFKK4Ta1gj58';

// buat objek baru kita kasih nama tg
var tg = new telegram.daftar(token);

// fungsi buat handle hanya menerima pesan berupa POST, kalau GET keluarkan pesan error
function doGet(e) {
  return HtmlService.createHtmlOutput("Hanya data POST yang kita proses yak!");
}

// fungsi buat handle pesan POST
function doPost(e) {

  // Memastikan pesan yang diterima hanya dalam format JSON  
  if(e.postData.type == "application/json") {
    
    // Kita parsing data yang masuk
    var update = JSON.parse(e.postData.contents);
    
    // Jika data pesan update valid, kita proses
    if (update) {
      prosesPesan(update);
    }
  } 
}

// fungsi utama kita buat handle segala pesan
function prosesPesan(update) {
  // proses buat handle callback
  if (update.callback_query) {
    
    var cb = update.callback_query;
    
    if ( /me_say/i.exec(cb.data) ){
      let pesan = "Halo!";
      return tg.request('answerCallbackQuery', { callback_query_id: cb.id, text: pesan });
    }
    
    if ( /me_click/i.exec(cb.data) ){
      let pesan = "Tombol di click!";
      return tg.kirimPesan(cb.message.chat.id, pesan, 'HTML');
    }
    
  }
  
  // detek klo ada pesan dari user
  if (update.message) { 

    // penyederhanaan variable
    var msg = update.message;

    // jika user ketik /ping, bot akan jawab Pong!
    if ( /\/ping/i.exec(msg.text) ){
      return tg.kirimPesan(msg.chat.id, '<b>Pong!</b>', 'HTML');
    }

    // eh ini saya tambahkan lagi, jika user klik start
    if ( /\/start/i.exec(msg.text) ){
      
      // pesan buat dikirim
      let pesan = "Halo, saya bot.\n\nSilakan pilih menu keyboard ini ya";
      
      // buat 1 keyboard, berisi perintah /ping, dan tambahin ID
      // dengan 2 baris
      let keyboard = [ 
        ['/ping', 'ID', 'Dice'],
        ['⏰ Time', '👤 About']
      ]

      
      // panggil fungsi sendMsgKeyboard yang dibuat sebelumnya
      return sendMsgKeyboard(msg.chat.id, pesan, keyboard);
    }


    // kalau nanti mau kembangin sendiri menjadi bot interaktif, code nya taruh disini
    // atau buatkan fungsi tersendiri saja buat handle nya biar ga bertumpuk panjang
    
    // Merespon penambahan tag 
    // Dengan format: /+tag #namatag isi
    var pola = /^(\/\+tag (#\w+)\s).{1,}/i;
    if (pola.exec(msg.text) ) {
       // pisah nama tag dan isi pesan
      var cocok = msg.text.match(pola);
      var tagName = cocok[2];
      var tagValue = msg.text.replace(cocok[1],"");
      var pesanTag = tagTambah(tagName, tagValue);
      return tg.kirimPesan(msg.chat.id, pesanTag);
    }
    
    // respon #tag dan menampilkan isinya
    // ini menggunakan regex yang awam susah paham, intinya klo ada hashtag ( 1 kata yang depannya ada # nya ) :
    var pola = /^#\w+$/i;
    if (pola.exec(msg.text) ) {
      var pesanTag = tagCari(msg.text);
      if (pesanTag) {
            return sendMsgReplyTag(msg, pesanTag);
      }
    }

    // Merespon penghapusan tag 
    // Dengan format: /-tag #namatag
    var pola = /^\/-tag (#\w+)$/i;
    if (pola.exec(msg.text) ) {
       // ambil nama tag nya aja
      var cocok = msg.text.match(pola);
      var tagName = cocok[1];
      var pesanTag = hapusTag(tagName);
      return tg.kirimPesan(msg.chat.id, pesanTag);
    }
    // Merespon list tag 
    // Dengan format: /tags
    var pola = /^\/tags$/i;
    if (pola.exec(msg.text) ) {
      var pesanTag = tagList();
      return tg.kirimPesan(msg.chat.id, pesanTag);
    }    
    
    // mengidentifikasi user: ID nya, nama, dan bahasa yang dipergunakan
    
    if (/id/i.exec(msg.text) ){
      let you = "🔖 ID Kamu: <code>"+msg.from.id+"</code>";
      
      //mendefinisikan nama user
      let nama = msg.from.first_name;
      // jika punya last name, kita tambahkan juga
      if (msg.from.last_name) { 
        nama += " " + msg.from.last_name;
      }
      
      you += "\n\nNama: "+nama;
      you += "\nBahasa: "+msg.from.language_code;
      
      
      return tg.kirimPesan(msg.chat.id, you, 'HTML');
    }
    
    //ketika time dipilih, jalankan proses ini
    if ( /^⏰ time/i.exec(msg.text) ){
      let d = new Date(); 
      let timeStamp = d.getTime();
      let pesan = "Waktu pesan adalah: <code>";
      pesan += timeConverter(msg.date, true) + '</code>';

      pesan += "\n\nWaktu BOT sekarang adalah: <code>";
      pesan += timeConverter(timeStamp) + '</code>';
  
      return tg.kirimPesan(msg.chat.id, pesan, 'HTML');
    }
    if ( /^👤 About/i.exec(msg.text) ){
      let pesan= "🤖 <b>Bot Testing</b>\n\noleh <a href='https://t.me/prasojowahyu'>si Mimin</a>\nRamadhan 1441H / Mei 2020.\nApa kabar semuanya baik?";
      
      let keyboard = 
          [
            [ 
              { "text": "Hai", "callback_data": "me_say" }, 
              { "text": "Click", "callback_data": "me_click" }
            ],
            [
              { "text": "🌐 Blog", "url": "https://youtube.com/" }, 
            ]
          ];
      return sendMsgKeyboardInline(msg.chat.id, pesan, keyboard);
    }

    
    if ( /\/hi/i.exec(msg.text) ){
      return tg.kirimPesan(msg.chat.id, "MANTAPLAH!", 'HTML');
    }
    
    //ini ga pake / (slash)
    if ( /hi/i.exec(msg.text) ){
      return tg.kirimPesan(msg.chat.id, "ASIAP!", 'HTML');
    }
    
    if ( /^Dice/i.exec(msg.text) ) {
      return tg.request("sendDice", {chat_id: msg.chat.id} );
    }
    
  }

  
  // Nah ini, fungsi utama buat handle user yang masuk ke grup
  // deteksi ada event user baru atau gak:
  if (update.message.new_chat_member) { 
    
    // penyederhanaan variable
    var msg = update.message;
    
    //definisikan dulu nama user yang masuk
    var nama = msg.new_chat_member.first_name;
    // jika punya last name, kita tambahkan juga
    if (msg.new_chat_member.last_name) { 
      nama += " " + msg.new_chat_member.last_name;
    }
    
    // Merangkai ucapan selamatnya di variable teks
    var teks = "Selamat datang, "+nama+ ". Semoga kamu betah di sini ya!";
    
    // selanjutnya kirim pesannya ke chat id grup nya
    var result = tg.kirimPesan(msg.chat.id, teks, 'HTML');
    return result;
  }
}
