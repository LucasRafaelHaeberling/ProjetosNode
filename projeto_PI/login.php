<?php
session_start();

// Configuração do banco de dados
$host = 'sql209.byetcluster.com';
$db = 'if0_36715592_Login';
$user = 'if0_36715592';
$pass = 'CyX1bOPsHC8MG';

// Conectando ao banco de dados usando mysqli
$conn = new mysqli($host, $user, $pass, $db);

// Verificando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $conn->real_escape_string($_POST['username']);
    $password = $conn->real_escape_string($_POST['password']);
    
    // Consulta para verificar as credenciais do usuário
    $sql = "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Usuário encontrado
        $_SESSION['username'] = $username;
        
        // Redireciona para a página inicial ou página protegida
        header("Location: bemvindo.php");
        exit(); // Sempre use exit() após redirecionar para garantir que o script pare de ser executado
    } else {
        // Usuário não encontrado
        echo "Usuário ou senha inválidos.";
    }
}

$conn->close();
?>
