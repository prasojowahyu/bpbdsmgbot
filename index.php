<?php
	require_once 'vendor/autoload.php';
	$bot = new PHPTelebot('1167185320:AAEpswmETV0XF1egPH24dCKrCwnnWaFDRlw', '@bpbdsemarang_6php1bot'); // Bot username is optional, its required for handle command that contain username (/command@username) like on a group.
	
	// Simple command
	$bot->cmd('/start', 'Hello there :)');
	$bot->cmd('/ping', 'PONG!!');

	//run run run!!
	$bot->run();

?>