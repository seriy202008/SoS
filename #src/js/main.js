import Swiper from "swiper/bundle";
const swiper = new Swiper('.about--swiper', {
    effect: "cards",
    grabCursor: true,
    slidesPerGround: 1,
    cardsEffect: {
        rotate: false,
    },

});



let dropdown = document.querySelector('.dropdown');
let burger = document.querySelector('.burger');

document.addEventListener('click', function (e) {
    if (e.target.closest('.dropdown--btn')) {
        dropdown.classList.toggle('_active');
    }
    if (e.target.closest('.dropdown--item')) {
        dropdown.classList.remove('_active');
        dropdown.querySelector('.dropdown--item-hidden').classList.remove('dropdown--item-hidden');
        e.target.closest('.dropdown--item').classList.add('dropdown--item-hidden');
        dropdown.querySelector('.dropdown--btn').textContent = e.target.closest('.dropdown--item').textContent;
    }
    if (e.target.closest('.burger--btn')) {
        burger.classList.toggle('_active');
    }
    if (e.target.closest('.burger--link')) {
        burger.classList.remove('_active');
    }
    if (!e.target.closest('.dropdown') && !e.target.closest('.burger')) {
        burger.classList.remove('_active');
        dropdown.classList.remove('_active');
    }
});
window.addEventListener('scroll', function () {
    burger.classList.remove('_active');
    dropdown.classList.remove('_active');
});

let links = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const linkID = link.getAttribute('href').slice(1);
        document.getElementById(linkID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    });
}