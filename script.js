window.addEventListener('DOMContentLoaded', () => {
    // ==================Start script=========================
    const burger = document.querySelector('.menu__item'),
        menu = document.querySelector('.nav__menu');


    function showBurger() {
        burger.classList.toggle ('menu__item_active');
        menu.classList.toggle('nav__menu_active');
        if (!menu.classList.contains('nav__menu_active')) {
            document.body.style.overflow = 'hidden';
        }
        document.body.style.overflow = '';
        
    }

    burger.addEventListener('click', () => {
        showBurger();
    })
// =======================Finish script========================
});