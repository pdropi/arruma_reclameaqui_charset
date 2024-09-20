let contador = 0;
const verificarClasse = setInterval(() => {
    if (document.querySelector('.ra-widget-reputation-text') && document.querySelector('.ra-widget-reputation-stamp')) {
        const texto_reputacao = document.getElementsByClassName('ra-widget-reputation-text')[0];
		texto_reputacao.innerHTML = texto_reputacao.innerHTML.replace('Ã§Ã£','çã');

		const img_reputacao = document.getElementsByClassName('ra-widget-reputation-stamp')[0];
		img_reputacao.title = img_reputacao.title.replace('Ã§Ã£','çã');
		img_reputacao.alt = img_reputacao.alt.replace('Ã§Ã£','çã');
        clearInterval(verificarClasse);
    }
    contador++;
    if (contador >= 20) {
        clearInterval(verificarClasse);
    }
}, 500);
