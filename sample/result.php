<?php
	$string=$_GET["result"];
	var_dump($string);
	$fp=fopen('./recieve.log','a');
	@fwrite($fp, $string);
	fclose($fp);
/*
	$string=$_POST["new_id"]."\n::".$_POST["fbid"]."\n::".$_POST["os"]."\n::".$_POST["before_id"];
	var_dump($string);
	$fp=fopen('./recieve.log', 'a');
	@fwrite($fp, $string);
	fclose($fp);

