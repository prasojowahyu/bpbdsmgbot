<?php 
	
    //berisi syntax untuk submenu button di index
    
    #Sub-Menu: Kabar Terbaru
	//isi dari menu button Kabar
	$bot->cmd('Kabar Terbaru', function() {
		//inisialisasi
		$text		= "Kabar Terbaru Untuk: \n";

		//menu button
		$keyboard[]	= ['Semua', 'Bencana', 'Cuaca'];
		$keyboard[] = ['Home'];

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

	#Sub-Menu: Website
	$bot->cmd('Website', function() {
		//redirect telegram ke web bpbd srg
		$keyboard[] = [
			['text' => '🌐 Web BPBD Semarang', 'url' => 'https://bpbd.semarangkota.go.id'],
		];
		$option		= [
			'reply_markup'	=> ['inline_keyboard' => $keyboard],
		];
		return Bot::sendMessage('Silakan akses link dibawah', $option);
		
	});

?>