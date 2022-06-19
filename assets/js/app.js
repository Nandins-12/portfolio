const menu_hamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('header nav ul');
const cv_download = document.querySelector('.header-content a');
const technologies_topics = document.querySelectorAll('.technologies-topics div');
const scroll_areas = document.querySelectorAll('#about, #technologies, #skills,  #portfolio, #contact');

if(localStorage.length != 0) {
    if(localStorage.getItem('dark-mode') == 'on') {
        document.body.classList.toggle('dark-mode');
    } 
}

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

document.querySelectorAll('.input-group input, .input-group textarea').forEach(el => {
    const label = el.parentNode.firstElementChild;
    el.addEventListener('focus', () => {
        label.style.transform = 'translateY(-65%)';
        label.style.padding = '6px 6px 4px 6px';
        label.style.borderRadius = '16px';
        label.style.color = '#fff';
        label.style.fontSize = '0.8em';
    });
    el.addEventListener('blur', () => {
        if(!el.value) {
            label.style.padding = '0';
            label.style.borderRadius = '0';
            label.style.color = 'rgba(255, 255, 255, 0.75)';
            label.style.transform = 'translateY(10px)';
            label.style.fontSize = '1em';
        }
    });
});

function toggleMenu() {
    menu_hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-active');
}

menu_hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('header nav ul li').forEach((li, index) => {
    if(index != 4) {
        li.addEventListener('click', () => {
            let scrolls = [
                600,
                600 + scroll_areas[0].clientHeight,
                600 + scroll_areas[0].clientHeight + scroll_areas[1].clientHeight + scroll_areas[2].clientHeight,
                600 + scroll_areas[0].clientHeight + scroll_areas[1].clientHeight + scroll_areas[2].clientHeight + scroll_areas[3].clientHeight
            ];
                           
            window.scroll({top: scrolls[index], behavior: 'smooth'})
            
            toggleMenu();
        });
    } else {
        li.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.body.classList.contains('dark-mode') ? localStorage.setItem('dark-mode', 'on') : localStorage.setItem('dark-mode', 'off');
            
        })
    }
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