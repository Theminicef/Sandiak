// Cambio de color en el navegador al scrollear hacia abajo

window.addEventListener('scroll', () => {
	document.querySelector('nav').classList.toggle('window-scroll',  window.scrollY > 0)

});








// Esconder y mostrar el menu de navegacion 
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
	menu.style.display = 'flex';
})