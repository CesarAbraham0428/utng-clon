const button = document.getElementById('button');
const menu = document.querySelector('.menu');
const menuItem = document.querySelector('.menu__item');

button.addEventListener('click', () => {
    menu.classList.toggle('menu--activate');
    menuItem.classList.toggle('menu__item--activate');
});

// Detectar cambios en el tamaño de la pantalla y desactivar el menú si es necesario
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1130) {
        menu.classList.remove('menu--activate');
        menuItem.classList.remove('menu__item--activate');
    }
});
 

