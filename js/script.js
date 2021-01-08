function dinamicContent() {
    const containerInfo = document.querySelector('.info');
    const cotacoes = document.querySelectorAll('.cotacao');
    const infos = document.querySelectorAll('.info-content');
    const activeClass = 'ativo';

    // Começar com Animação e primeiro conteúdo.
    containerInfo.classList.add('anima');
    infos[0].classList.add(activeClass);
    cotacoes[0].classList.add(activeClass);

    function animaInfo() {
        containerInfo.classList.add('anima');
        setTimeout(() => {
            containerInfo.classList.remove('anima');
        }, 310);
    }
    animaInfo();

    function cotacaoAtiva(index) {
        cotacoes.forEach((cotacao) => {
            cotacao.classList.remove(activeClass);
        });
        cotacoes[index].classList.add(activeClass);
    }

    function changeContent(index) {
        infos.forEach(info => {
            info.classList.remove(activeClass);
        });
        infos[index].classList.add(activeClass);
        animaInfo();
        cotacaoAtiva(index);
    }

    cotacoes.forEach((cotacao, index) => {
        cotacao.addEventListener('click', () => changeContent(index));
    });
}

dinamicContent();

function fetchCotacoes() {
    const usd = document.querySelector('[data-usd]');
    const eur = document.querySelector('[data-eur]');
    const btc = document.querySelector('[data-btc]');
    const ibov = document.querySelector('[data-ibov]');
    const selic = document.querySelector('[data-selic]');
    const cdi = document.querySelector('[data-cdi]');

    url = 'https://api.hgbrasil.com/finance?format=json-cors&key=bffa8439';

    fetch(url)
        .then(resp => resp.json())
        .then(cotaJson => {
            console.log(cotaJson.results);
        })
}

fetchCotacoes();
