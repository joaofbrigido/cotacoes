export default function lightMode() {
  const btnLightMode = document.querySelector('.light-mode');
  const body = document.querySelector('.body');
  const footer = document.querySelector('.footer');
  const info = document.querySelector('.info');
  const linkPortifolio = document.querySelector('.link-portifolio');
  const svgIcon = document.querySelector('.svg-icon');

  const toggleColorMode = () => {
    body.classList.toggle('light-mode-on');
    footer.classList.toggle('light-mode-on');
    info.classList.toggle('light-mode-on');
    linkPortifolio.classList.toggle('light-mode-on');
    svgIcon.classList.toggle('light-mode-on');
  }
  btnLightMode.addEventListener('click', toggleColorMode);
}