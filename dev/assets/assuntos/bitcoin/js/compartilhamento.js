function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text} - ${url}`;
    window.open(whatsappUrl, '_blank');
}

function shareAnywhere() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        })
        .then(() => console.log('Compartilhado com sucesso!'))
        .catch((error) => console.error('Erro ao compartilhar:', error));
    } else {
        alert('Seu navegador não suporta compartilhamento nativo.');
    }
}