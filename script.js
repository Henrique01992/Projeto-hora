function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    // Formata a hora para exibir sempre com dois dígitos
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    msg.innerHTML = `Agora são <strong>${hora}:${minutos}:${segundos}</strong> `;

    if (hora >= 0 && hora < 12) {
        // BOM DIA !
        msg.innerHTML += '<strong><p>Bom Dia!</p></strong>';
        img.src = 'imagens/manha.jpg';
        document.body.style.backgroundColor = 'rgb(224, 175, 39)';
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE !
        msg.innerHTML += '<strong><p>Boa Tarde!</p></strong>';
        img.src = 'imagens/tarde.jpg';
        document.body.style.backgroundColor = 'rgb(156, 109, 65)';
    } else {
        // BOA NOITE !
        msg.innerHTML += '<strong><p>Boa Noite!</p></strong>';
        img.src = 'imagens/noite.jpg';
        document.body.style.backgroundColor = 'rgba(51, 21, 37, 0.88)';
    }
}

// Chama a função carregar assim que a página for carregada
carregar();

// Atualiza a função carregar a cada segundo (1000 milissegundos)
setInterval(carregar, 1000);

 