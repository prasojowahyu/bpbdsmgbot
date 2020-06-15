<?php 
    //berisi syntax untuk submenu button di index
    
    #Sub-Menu: Kabar Terbaru
	//isi dari menu button Kabar
	$bot->cmd('Kabar Terbaru', function() {
		//inisialisasi
		$text		= "Kabar Terbaru Untuk: \n";

		//menu button
		$keyboard[]	= ['Bencana', 'Cuaca'];
		$keyboard[] = ['Home'];

		//telebot plugin
		$option		= [
			'reply_markup' => ['keyboard'=> $keyboard,
			'resize_keyboard'=> true
			]
		];

		return Bot::sendMessage( $text, $option );
	});
		#Item-Menu: Bencana
		$bot->cmd('Bencana', function() {
			$url	= "https://t.me/BPBD_Semarang/";
			$text	= "Dapatkan update terbaru dari BPBD Kota Semarang, Aktifkan notifikasi di Channel ini: \n" .$url;
			return Bot::sendMessage( $text, $url );
		});
		
		#Item-Menu: Cuaca
		$bot->cmd('Cuaca', function() {
			$link	= "https://www.bmkg.go.id/cuaca/prakiraan-cuaca.bmkg?Kota=Semarang&AreaID=501262&Prov=35";
			$url	= "Informasi Cuaca terbaru di Kota Semarang, \nSumber: bmkg \n" .$link;
			
			return Bot::sendMessage( $url );
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
		];
		$keyboard[] = [
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
		
		$keyboard[] = [
			['text' => '🌐 WhatsApp BPBD Semarang', 'url' => 'https://api.whatsapp.com/send?phone=628122010051'],
		];
		$option		= [
			'reply_markup'	=> ['inline_keyboard' => $keyboard],
		];
		return Bot::sendMessage('Silakan kirimkan laporan kejadian, masukan, atau saran ke kontak berikut', $option);
	});
?>
