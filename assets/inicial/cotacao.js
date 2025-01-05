async function atualizarCotacoes() {
    try {
        const resposta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
        const dados = await resposta.json();
        const dolar = dados.USDBRL.bid;
        const euro = dados.EURBRL.bid;
        const bitcoin = dados.BTCBRL.bid;
        const cotacaoTexto = `
            $ Dólar: R$ ${parseFloat(dolar).toFixed(2)}ㅤㅤ
            € Euro: R$ ${parseFloat(euro).toFixed(2)}ㅤㅤ
            ₿ Bitcoin: R$ ${parseFloat(bitcoin).toFixed(0)}
        `;
        document.getElementById('cotacoes').innerHTML = cotacaoTexto;
    } catch (error) {
        document.getElementById('cotacoes').innerHTML = 'Erro ao carregar cotações.';
    }
}
atualizarCotacoes();
setInterval(atualizarCotacoes, 60000);  // Atualiza a cada 60 segundos