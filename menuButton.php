<?php 
	require 'header.php';
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

	#Sub-Menu: Sosial Media
	$bot->cmd('Sosial Media', function() {
		//redirect telegram ke web bpbd srg
		$keyboard[] = [
			['text' => '🟡Instagram', 'url' => 'https://www.instagram.com/bpbd_semarang/'],
			['text' => '🟢 Twitter', 'url' => 'https://twitter.com/BPBD_Semarang'],
			['text' => '🔵 Facebook', 'url' => 'https://www.facebook.com/bpbd.semarang'],
			['text' => '🔴 Youtube', 'url' => 'https://www.youtube.com/channel/UCx3mUCT3iKzFQ2T0oHrZQUQ/'],
		];
		$option		= [
			'reply_markup'	=> ['inline_keyboard' => $keyboard],
		];
		return Bot::sendMessage('Silakan akses link sosial media official dibawah', $option);
		
	});

	#Sub-Menu: Contact
	//send to email
	$bot->cmd('Contact', function() {
		//redirect telegram ke web bpbd srg
		// $keyboard[] = [
		// 	['mailto' => '📬 Email', 'email' => 'emailpribados@gmail.com'],
		// ];
		
		$contact	= '[Silakan kirim email anda kesini](mailto:jojowahyu98@gmail.com)';
		$option		= [
			'parse_mode' => 'Markdown',
		];
		return Bot::sendMessage($contact, $option);
		
	});
?>