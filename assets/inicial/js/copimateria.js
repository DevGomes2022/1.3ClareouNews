// Pega todas as matérias da seção de origem
const noticias = document.querySelectorAll('.noticia');
const secoesDestino = document.querySelectorAll('.nova-secao');

// Itera sobre as notícias e cola nos destinos correspondentes
noticias.forEach((noticia, index) => {
    const titulo = noticia.querySelector('.titulo').innerText;
    const imagemSrc = noticia.querySelector('.imagem').src;
    const linkNoticia = noticia.querySelector('.link-noticia').href;

    // Cola nos elementos destino (por índice correspondente)
    if (secoesDestino[index]) {
        secoesDestino[index].querySelector('.novo-titulo').innerText = titulo;
        secoesDestino[index].querySelector('.nova-imagem').src = imagemSrc;
        secoesDestino[index].querySelector('.novo-link').href = linkNoticia;
    }
});