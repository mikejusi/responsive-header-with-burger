let burger = document.querySelector('.burger');
let nav__link = document.querySelector('.nav__link');

burger.onclick = function(){
    burger.classList.toggle('active__burger');
    nav__link.classList.toggle('active__panel');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
}