let slideIndex = 0;
let timeout;

function showSlides() {
    const slides = document.querySelectorAll('.banner-slide');
    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Exibe o slide atual
    slides[slideIndex].style.display = "block";

    // Limpa qualquer timeout anterior e define um novo para a transição automática
    clearTimeout(timeout);
    timeout = setTimeout(showSlides, 10000); // Muda a imagem a cada 10 segundos
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.banner-slide');
    // Atualiza o slideIndex
    slideIndex += n;

    // Garantir que o slideIndex esteja dentro do intervalo correto
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Volta para o primeiro slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Vai para o último slide
    }

    // Exibe o slide atualizado
    showSlides();
}

// Inicia o carrossel e exibe o primeiro slide
showSlides();