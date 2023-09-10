window.addEventListener('DOMContentLoaded', () => {
    // ==================Start script=========================
    const burger = document.querySelector('.burger__menu'),
        menu = document.querySelector('.nav__menu');


    function showBurger() {
        burger.classList.toggle('burger__menu_active');
        menu.classList.toggle('nav__menu_active');
        if (!menu.classList.contains('nav__menu_active')) {
            document.body.style.overflowX = 'hidden';
        }
        document.body.style.overflowX = '';

    }

    burger.addEventListener('click', () => {
        showBurger();
    })
    // =======================Finish script========================
});