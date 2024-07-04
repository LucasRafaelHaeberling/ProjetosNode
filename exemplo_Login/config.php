<?php
    $host = 'localhost';
    $db = 'login_system';
    $user = 'root';
    $pass = '';
    $charset = 'utf8mb4';

    $dns = "mysql:host=$host;dbname=$db;charset=$charset";
    $options = [
        PDO::ATTR_ERRMODE           =>PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    try {
        $pdo = new PDO($dns, $user, $pass, $options);
    } catch (\PDOException $e) {
        throw new \Exception($e->getMessage(), (int)$e->getCode());
    }
?>
