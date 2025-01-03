async function atualizarCotacoes() {
    try {
        const resposta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
        const dados = await resposta.json();

        const dolar = dados.USDBRL.bid;
        const euro = dados.EURBRL.bid;
        const bitcoin = dados.BTCBRL.bid;

        document.getElementById('dolar').innerText = `R$ ${parseFloat(dolar).toFixed(2)}`;
        document.getElementById('euro').innerText = `R$ ${parseFloat(euro).toFixed(2)}`;
        document.getElementById('bitcoin').innerText = `R$ ${parseFloat(bitcoin).toFixed(0)}`;
    } catch (error) {
        document.getElementById('dolar').innerText = 'Erro';
        document.getElementById('euro').innerText = 'Erro';
        document.getElementById('bitcoin').innerText = 'Erro';
    }
}

atualizarCotacoes();
setInterval(atualizarCotacoes, 60000);  // Atualiza a cada 60 segundos