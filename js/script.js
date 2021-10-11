let transparentLayer = document.querySelector('.transparent-layer');
let menuToggle = document.querySelector('#menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper');

menuToggle.addEventListener('click', (e) => {
    menuWrapper.classList.toggle('visible');
    transparentLayer.classList.toggle('visible');
    e.stopPropagation();
})

transparentLayer.addEventListener('click', () => {
    if (menuWrapper.classList.contains('visible')) {
        menuWrapper.classList.toggle('visible');
        transparentLayer.classList.toggle('visible');
    }
})