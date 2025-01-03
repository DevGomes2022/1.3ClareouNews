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

// Consulta emails do banco de dados
$sql = "SELECT name, email FROM newsletter";
$result = $conn->query($sql);

// Cria ou abre o arquivo txt
$file = fopen("newsletter_export.txt", "w");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $line = $row['name'] . " - " . $row['email'] . "\n";
        fwrite($file, $line);
    }
    echo "Exportação concluída!";
} else {
    echo "Nenhum dado encontrado.";
}

fclose($file);
$conn->close();
?>
