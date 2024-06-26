<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Página de Bem-vindo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Bem-vindo, <?php echo htmlspecialchars($username); ?>!</h1>
        <p>Você está logado com sucesso.</p>
        <nav>
            <ul>
                <li><a href="perfil.php">Perfil</a></li>
                <li><a href="configuracoes.php">Configurações</a></li>
                <li><a href="dashboard.php">Dashboard</a></li>
                <li><a href="logout.php">Sair</a></li>
            </ul>
        </nav>
        <div class="dashboard">
            <h2>Dashboard</h2>
            <!-- Adicione gráficos, tabelas, ou outros dados relevantes aqui -->
            <p>Conteúdo do dashboard.</p>
        </div>
        <div class="settings">
            <h2>Configurações</h2>
            <p>Configurações do usuário.</p>
        </div>
    </div>
</body>
</html>
