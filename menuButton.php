<?php 
    //berisi syntax untuk submenu button di index
    
    #Kabar Terbaru
	//isi dari menu button Kabar
	$bot->cmd('Kabar Terbaru', function() {
		//inisialisasi
		$text		= "Kabar Terbaru Untuk: \n";

		//menu button
		$keyboard[]	= ['Semua Kabar', 'Bencana', 'Cuaca'];

		//telebot plugin
		$option		= [
			'reply_markup' => ['keyboard'=> $keyboard,
			'resize_keyboard'=> true
			]
		];

		return Bot::sendMessage($text, $option);
	});

?>