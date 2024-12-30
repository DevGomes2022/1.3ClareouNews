<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
    
    $destinatario = "formulario@clareounews.com"; // Altere para seu email
    $assunto = "Mensagem do Formulário";
    $corpo = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";
    $headers = "From: $email";
    
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "<p>Mensagem enviada com sucesso!</p>";
    } else {
        echo "<p>Falha ao enviar mensagem.</p>";
    }
}
?>
