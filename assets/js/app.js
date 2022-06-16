const menu_hamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('header nav ul');
const cv_download = document.querySelector('.header-content a');
const technologies_topics = document.querySelectorAll('.technologies-topics div');

const typed = new Typed('#type-area', {
    strings: ['Desenvolvedor Web Front-End', 'Programador e Web Designer'],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 1200,
    startDelay: 400,
    loop: true
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type:'progressbar'
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    }
});

VanillaTilt.init(cv_download);

menu_hamburger.addEventListener('click', () => {
    menu_hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-active');
});

window.addEventListener('scroll', () => {
    const calc = Math.ceil((scrollY - 975) / 200);
    let topicOn = calc >= 0 ? calc : 0;
    topicOn = topicOn >= 8 ? 8 : topicOn;

    technologies_topics.forEach(tec => {
        if(tec != technologies_topics[topicOn]) tec.classList.remove('on');
    });

    technologies_topics[topicOn].className = 'on';
});