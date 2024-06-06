document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'clicked' class from all menu items
            menuItems.forEach(i => i.classList.remove('clicked'));
            // Add 'clicked' class to the clicked item
            item.classList.add('clicked');
        });
    });
});

function openLink(url) {
    window.location.href = url;
}

function openLink(button, url) {
    window.open(url, '_blank');
    // Obtener todos los botones de la lista
    var buttons = document.querySelectorAll('.menu button');
    // Restablecer el tamaño de todos los botones
    buttons.forEach(function(btn) {
        btn.style.transform = 'scale(1)';
    });
    // Aumentar el tamaño del botón seleccionado
    button.style.transform = 'scale(1.2)';
}

function toggleLike(button) {
    button.classList.toggle('liked');
    alert('¡Gracias por tu like!');
}

// JavaScript para manejar el menú desplegable en dispositivos móviles

// Seleccionamos el botón de menú y la lista de menú
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

// Agregamos un evento de clic al botón de menú
menuToggle.addEventListener('click', function() {
    // Toggle (alternar) la clase 'active' al botón de menú y la lista de menú
    this.classList.toggle('active');
    menuList.classList.toggle('active');

    // Cambiar el atributo 'aria-expanded' del botón de menú para indicar el estado del menú
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
});