<?php 
    //event forward
	$bot->on('channel_forward', function( $fwd ) {
		//ketika ada channel respon forward dari twitter, ambil pesan
		$msg	= Bot::message(); //ambil dari respon bot
		$isi	= $msg['text']; //ambil isi teks respon(json)

		//kirim ulang isi teks
		Bot::sendMessage($isi);
	});

?>