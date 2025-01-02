function toggleMenu() {
    var menu = document.getElementById("lateral-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

const path = window.location.pathname;
const page = path.split("/").pop();

if (page === 'index.html') {
    document.getElementById('inicial').classList.add('active');
} else if (page === 'economia.html') {
    document.getElementById('economia').classList.add('active');
} else if (page === 'bitcoin.html') {
    document.getElementById('bitcoin').classList.add('active');
} else if (page === 'politica.html') {
    document.getElementById('politica').classList.add('active');
} else if (page === 'mundo.html') {
    document.getElementById('mundo').classList.add('active');
} else if (page === 'contatos.html') {
    document.getElementById('contatos').classList.add('active');
} else if (page === 'sobre.html') {
    document.getElementById('sobre').classList.add('active');
}  else if (page === 'privacidade.html') {
    document.getElementById('privacidade').classList.add('active');
}