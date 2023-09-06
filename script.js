window.addEventListener('DOMContentLoaded', () => {
    // ==================Start script=========================
    const burger = document.querySelector('.menu__item'),
        menu = document.querySelector('.nav__menu');


    function showBurger() {
        burger.classList.toggle ('menu__item_active');
        if (menu.classList.contains('hide')) {
            menu.classList.remove('hide');
            menu.classList.add('show');
        }
        menu.classList.add('hide');
        menu.classList.remove('show');
    }

    burger.addEventListener('click', () => {
        showBurger();
    })
// =======================Finish script========================
});