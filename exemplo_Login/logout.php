<?php
session_start();
session_unset();
session_destroy(); // Destroi a sessão
header("Location: login.php"); // Redireciona para a página de login
?>
