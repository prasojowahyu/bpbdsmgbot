<?php
	require_once 'vendor/autoload.php';
	$bot = new PHPTelebot('1167185320:AAEpswmETV0XF1egPH24dCKrCwnnWaFDRlw', '@bpbdsemarang_6php1bot'); // Bot username is optional, its required for handle command that contain username (/command@username) like on a group.

	// Simple command
	$bot->cmd('/start', 'Hello there :)');
	$bot->cmd('/ping', 'PONG!!');

	//command tampilkan waktu sekarang (WIB)
	$bot->cmd('/time', function ($text) {
		$text	= 'Waktu Sekarang, pukul ' . date('H:i:s') . ' WIB. Tanggal,' . date('d M Y');
		return Bot::sendMessage($text);
	});

	//event bot
	$bot->on('new_chat_member', function() {
		//ketika ada user respon, kasih pesan, sekaligus sapa usernamenya
		$msg	= Bot::message(); //ambil dari respon bot
		$nama	= $msg['new_chat_member']['first_name']; //ambil dari array respon dari event di grup(json)

		//sapa pake nama belakang sekalian kalo ada
		if ( isset($msg['new_chat_member']['last_name']) ) {
			$nama	.= ' '. $msg['new_chat_member']['last_name'];
		}

		$greet 	= 'Halo Selamat Bergabung, <b>' . $nama . '</b>!';
		$greet	.= "\n\nIni adalah grup percobaan bot, mohon maaf kalau mengganggu notifikasimu ya, hehe :V \n";
		$greet	.= "Kalo mau coba, silakan bisa cobain perintah ini: \n";
		$greet	.= "/start = inisialisasi bot \n";
		$greet	.= "/ping = tes response user ke bot \n";
		$greet	.= "/time = untuk lihat waktu sekarang \n\n"
		$greet	.= "Silahkan dicoba, <b>" . $nama . "</b>";

		//text bold untuk username yg baru gabung
		$option = [
			'parse_mode' => 'html'
		];

		//send greetings
		Bot::sendMessage($greet, $option);
	});

	//baris paling bawah

	//run run run!!
	$bot->run();

?>