<?php

	$mailArr[] = array(
		"datum" => "2014-05-01",
		"betreff" => "betreff 1",
		"absender" => "ex@mple.de",
		"nachricht" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
		);
		
	$mailArr[] = array(
		"datum" => "2014-05-02",
		"betreff" => "betreff 2",
		"absender" => "foo@bar.com",
		"nachricht" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
		);
		
	$mailArr[] = array(
		"datum" => "2014-05-03",
		"betreff" => "betreff 3",
		"absender" => "max@muster.net",
		"nachricht" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
		);
		
	$mailArr[] = array(
		"datum" => "2014-05-04",
		"betreff" => "betreff 4",
		"absender" => "bundes@kanzler.org",
		"nachricht" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
		);
		
	$mailArr[] = array(
		"datum" => "2014-05-05",
		"betreff" => "betreff 5",
		"absender" => "aaa@bbb.ccc",
		"nachricht" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
		);
		
	$emails = json_encode($mailArr);
	
	echo $emails;

?>