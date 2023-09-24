window.addEventListener('DOMContentLoaded', () => {
    // ==================Start script=========================
    const burger = document.querySelector('.burger__menu'),
        menu = document.querySelector('.nav__menu'),
        photo = document.querySelectorAll('.about__photo__img')
        leftArrow = document.querySelector('.arrow__left'),
        rigthArrow = document.querySelector('.arrow__right');


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

    function changePhoto() {
        for (let i = 0; i < photo.length; i++) {
            if (!photo[i].classList.contains('hide')) {
                photo[i].classList.add('hide');
                return photo[i + 1].classList.remove('hide');
            }
        }
    }

    // setInterval(changePhoto, 3000)


    
    // =======================Finish script========================
});