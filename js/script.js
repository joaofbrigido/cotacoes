function dinamicContent() {
    const containerInfo = document.querySelector('.info');
    const cotacoes = document.querySelectorAll('.cotacao');
    const infos = document.querySelectorAll('.info-content');
    const placeHolder = document.querySelector('.place-holder');
    const activeClass = 'ativo';
    containerInfo.classList.add('anima');

    function animaInfo() {
        containerInfo.classList.add('anima');
        setTimeout(() => {
            containerInfo.classList.remove('anima');
        }, 410);
    }
    animaInfo();

    function changeContent(index) {
        infos.forEach(info => {
            info.classList.remove(activeClass);
        })
        placeHolder.style.display = 'none';
        infos[index].classList.add(activeClass);
        animaInfo();
    }

    cotacoes.forEach((cotacao, index) => {
        cotacao.addEventListener('click', () => changeContent(index));
    })
}

dinamicContent();