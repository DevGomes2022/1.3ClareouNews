async function pegarCotacoes() {
    try {
        const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL');
        const dados = await resposta.json();

        document.getElementById('moedadolar').innerText = `R$ ${parseFloat(dados.USDBRL.bid).toFixed(2)}`;
        document.getElementById('moedaeuro').innerText = `R$ ${parseFloat(dados.EURBRL.bid).toFixed(2)}`;
        
        // Corrigindo o caminho para a cotação do Bitcoin
        if (dados.BTCBRL) {
            document.getElementById('moedabitcoin').innerText = `R$ ${parseFloat(dados.BTCBRL.bid).toFixed(2)}`;
        } else {
            document.getElementById('moedabitcoin').innerText = 'N/A';
        }
    } catch (erro) {
        console.error('Erro ao obter cotações:', erro);
        document.getElementById('moedadolar').innerText = 'Erro';
        document.getElementById('moedaeuro').innerText = 'Erro';
        document.getElementById('moedabitcoin').innerText = 'Erro';
    }
}

pegarCotacoes();
setInterval(pegarCotacoes, 60000);  // Atualiza a cada 1 minuto