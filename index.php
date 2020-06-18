<?php
	require_once 'vendor/autoload.php'; 
	$bot = new PHPTelebot('940226436:AAFlrS5O19tMDWpCq-3YM2eMJb4CL16nqsU', '@BPBD_Semarangbot'); // Bot username is optional, its required for handle command that contain username (/command@username) like on a group.
	require 'menuButton.php';

	// Simple command
	$bot->cmd('/ping', 'PONG!!');

	//command tampilkan waktu sekarang (WIB)
	$bot->cmd('/time', function ($text) {
		$text	= 'Waktu Sekarang, pukul ' . date('H:i:s') . ' WIB. Tanggal,' . date('d M Y');
		return Bot::sendMessage($text);
	});

	#Start
	//menu button /start diatas keyboard
	$bot->cmd('/start|Home', function() {
		//inisialisasi
		//$msg	= Bot::message(); //ambil dari respon bot
		//$nama	= $msg['id']['first_name']; //ambil dari array respon dari event di grup(json)
		$text		= "👋🏻 Hai, Silakan pilih menu disini.. \n";

		//menu button
		$keyboard[]	= ['Kabar Terbaru', 'Website'];
		$keyboard[]	= ['Sosial Media', 'Contact'];

		//telebot plugin
		$option		= [
			'reply_markup' => ['keyboard'=> $keyboard,
			'resize_keyboard'=> true
			]
		];

		return Bot::sendMessage($text, $option);
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

		//sambutan kalo ada member baru dalam grup
		$greet 	= 'Halo Selamat Bergabung, <b>' . $nama . '</b>!';
		$greet	.= "\n\nIni adalah grup BPBD Kota Semarang, berikut adalah perintah untuk menjalankan bot BPBD Semarang \n";
		$greet	.= "/start = inisialisasi bot \n";
		$greet	.= "/time = untuk lihat waktu sekarang \n\n";
		$greet	.= "Silahkan dicoba, <b>" . $nama . "</b> \n";
		$greet	.= "Aktifkan notifikasi di channel BPBD Semarang agar mendapatkan info terbaru dari BPBD Kota Semarang";

		$keyboard[] = [
			['text' => 'Channel BPBD Semarang', 'url' => 'https://t.me/BPBD_Semarang/'],
		];

		$option = [
			'parse_mode' => 'html',
			'reply_markup' => ['inline_keyboard'=> $keyboard,
			'resize_keyboard'=> true,
		];

		//send greetings
		Bot::sendMessage($greet, $option, $keyboard);
	});





	//baris paling bawah

	//run run run!!
	$bot->run();

?>
