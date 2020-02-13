<?php

$dbuser = $_ENV['MYSQL_USER'];
$dbpass = $_ENV['MYSQL_PASSWORD'];

try {
	$pdo = new PDO("mysql:host=mariadb;dbname=devops", $dbuser, $dbpass);
	$statment = $pdo->prepare("SELECT * FROM pessoa");
	$statment->execute();
	$pessoa = $statment->fetchAll(PDO::FETCH_OBJ);

	echo json_encode($pessoa);

} catch (PDOException $e) {
	echo $e->getMessage();
}
