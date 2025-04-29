window.addEventListener('scroll', () => {
    const buttonUp = document.querySelector('#home-button');
    buttonUp.classList.toggle('home-button-show', window.scrollY > 115);
})