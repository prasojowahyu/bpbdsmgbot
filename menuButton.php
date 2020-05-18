<?php 
    //berisi syntax untuk submenu button di index
    
    #Sub-Menu: Kabar Terbaru
	//isi dari menu button Kabar
	$bot->cmd('Kabar Terbaru', function() {
		//inisialisasi
		$text		= "Kabar Terbaru Untuk: \n";

		//menu button
		$keyboard[]	= ['Semua', 'Bencana', 'Cuaca'];

		//telebot plugin
		$option		= [
			'reply_markup' => ['keyboard'=> $keyboard,
			'resize_keyboard'=> true
			]
		];

		return Bot::sendMessage( $text, $option );
	});
		#Item-Menu: Semua
		$bot->cmd('Semua', function() {
			//add caption
			$option		= [
				'caption'	=> 'THISISCAPTION'
			];
			//ambil id file gambar dari json file yg dikirim user lewat tele
			$photo_id	= 'AgACAgUAAxkBAAMrXsHg7ltBB81Y05hpUUIVXxWpFb0AAsqpMRufVRBWor5uB0lOAdM5bxprdAADAQADAgADbQADkJoAAhkE';
			
			return Bot::sendPhoto( $photo_id, $option );
		});

?>