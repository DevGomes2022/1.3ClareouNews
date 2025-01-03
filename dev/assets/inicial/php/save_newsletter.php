<?php
$servername = "localhost";
$username = "clareo68_ADM";
$password = "34054558Ke.";
$dbname = "clareo68_newsletter";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];

// Prepara a query SQL
$sql = "INSERT INTO newsletter (name, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $email);

try {
    $stmt->execute();
    echo "Inscrição realizada com sucesso!";
} catch (mysqli_sql_exception $e) {
    if ($e->getCode() == 1062) {
        echo "Esse email já foi cadastrado.";
    } else {
        echo "Erro ao se inscrever: " . $stmt->error;
    }
}

$stmt->close();
$conn->close();
?>
