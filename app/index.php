<?php

$dbuser = $_ENV['MYSQL_USER'];
$dbpass = $_ENV['MYSQL_PASSWORD'];

$redis = new Redis();

try{
	$redis->connect('desafiodevops_redis_1', 6379);
} catch (Exception $e) {
	echo $e->getMessage();
}


try {
	if($redis->exists('1'))
		echo $redis->get('1');
	else {

		$pdo = new PDO("mysql:host=mariadb;dbname=devops", $dbuser, $dbpass);
		$statment = $pdo->prepare("SELECT * FROM pessoa");
		$statment->execute();
		$pessoa = $statment->fetchAll(PDO::FETCH_OBJ);

		echo json_encode($pessoa);
	}

} catch (PDOException $e) {
	echo $e->getMessage();
}
