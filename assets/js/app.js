const menu_hamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('header nav ul');
const cv_download = document.querySelector('.header-content a');
const technologies_topics = document.querySelectorAll('.technologies-topics div');
const scroll_areas = document.querySelectorAll('#about, #technologies, #skills,  #portfolio');
const submit_form_contact = document.querySelector('form button');

const callbackEffectTechnology = () => {
    const calc = Math.ceil((scrollY - 975) / 200);
    // let topicOn = calc >= 0 ? calc : 0;
    // topicOn = topicOn >= 8 ? 8 : topicOn;
    let topicOn = calc;

    technologies_topics.forEach(tec => {
        if(tec != technologies_topics[topicOn]) tec.classList.remove('on');
        if(typeof technologies_topics[topicOn] != 'undefined') {
            technologies_topics[topicOn].className = 'on';
        }
    });
};

const pageControl = {
    libs: {
        //Typed JS (lib)
        typed: new Typed('#type-area', {
            strings: ['Desenvolvedor Web Front-End', 'Programador e Web Designer'],
            typeSpeed: 70,
            backSpeed: 30,
            backDelay: 1200,
            startDelay: 400,
            loop: true
        }),
        //Swiper JS (lib)
        swiper: null,
        // VanillaTilt (lib)
        vanillaTilt() {
            if(window.innerWidth >= 800) {
                VanillaTilt.init(cv_download, {
                    scale: 1.05
                });
                
                VanillaTilt.init(submit_form_contact, {
                    max: 10
                });
            }
        }
    },

    labelEvents: {
        focus(el) {
            const label = el.parentNode.firstElementChild;

            if(window.innerWidth < 800) {
                if(!document.body.classList.contains('dark-mode')) {
                    label.style.transform = 'translateY(-65%)';
                    label.style.padding = '6px 6px 4px 6px';
                    label.style.borderRadius = '16px';
                    label.style.color = '#fff';
                    label.style.fontSize = '0.8em';
                } else {
                    label.style.transform = 'translateY(-65%)';
                    label.style.padding = '6px 6px 4px 6px';
                    label.style.borderRadius = '16px';
                    label.style.color = '#fff';
                    label.style.fontSize = '0.8em';
                }
            } else {
                if(!document.body.classList.contains('dark-mode')) {
                    label.style.transform = 'translateY(-65%)';
                    label.style.padding = '6px 6px 4px 6px';
                    label.style.borderRadius = '16px';
                    label.style.color = '#0096C7';
                    label.style.fontSize = '0.8em';
                } else {
                    label.style.transform = 'translateY(-65%)';
                    label.style.padding = '6px 6px 4px 6px';
                    label.style.borderRadius = '16px';
                    label.style.color = '#fff';
                    label.style.fontSize = '0.8em';
                }
            }
        },

        blur(el) {
            const label = el.parentNode.firstElementChild;

            if(window.innerWidth < 800) {
                if(!document.body.classList.contains('dark-mode')) {
                    if(!el.value) {
                        label.style.padding = '0';
                        label.style.borderRadius = '0';
                        label.style.color = 'rgba(255, 255, 255, 0.75)';
                        label.style.transform = 'translateY(10px)';
                        label.style.fontSize = '1em';
                    }
                } else {
                    if(!el.value) {
                        label.style.padding = '0';
                        label.style.borderRadius = '0';
                        label.style.color = 'rgba(255, 255, 255, 0.75)';
                        label.style.transform = 'translateY(10px)';
                        label.style.fontSize = '1em';
                    }
                }
            } else {
                if(!document.body.classList.contains('dark-mode')) {
                    if(!el.value) {
                        label.style.padding = '0';
                        label.style.borderRadius = '0';
                        label.style.color = 'rgba(0, 150, 199, 0.75)';
                        label.style.transform = 'translateY(13px)';
                        label.style.fontSize = '1em';
                    }
                } else {
                    if(!el.value) {
                        label.style.padding = '0';
                        label.style.borderRadius = '0';
                        label.style.color = 'rgba(255, 255, 255, 0.75)';
                        label.style.transform = 'translateY(13px)';
                        label.style.fontSize = '1em';
                    }
                }
            }
        }
    },

    initDarkMode() {
        //Dark-mode control with localStorage
        if(localStorage.length != 0) {
            if(localStorage.getItem('dark-mode') == 'on') {
                document.body.classList.toggle('dark-mode');
            } 
        }
    },

    darkModeControl() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.contains('dark-mode') ? localStorage.setItem('dark-mode', 'on') : localStorage.setItem('dark-mode', 'off');
        if(window.innerWidth < 800) pageControl.toggleMenu();
    },

    effectTechnologiesTopics(callback) {
        // effect on technologies topics
        if(window.innerWidth < 800) {
            window.addEventListener('scroll', callback, true);
        } else {
            window.removeEventListener('scroll', callback, true);
            technologies_topics.forEach(tec => {
                tec.classList.remove('on');
            });
        }
    },

    getSwiper() {
        const swiper = document.querySelector('.swiper').swiper;

        if (window.innerWidth < 800) {
            if(typeof swiper != 'undefined') swiper.destroy(true, true);
            new Swiper('.swiper', {
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
            if(typeof swiper != 'undefined') swiper.update();
        } else if(window.innerWidth < 910) {
            if(typeof swiper != 'undefined') swiper.destroy(true, true);
            new Swiper('.swiper', {
                spaceBetween: 20,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev'
                }
            });
            if(typeof swiper != 'undefined') swiper.update();
        } else if(window.innerWidth < 1080) {
            if(typeof swiper != 'undefined') swiper.destroy(true, true);
            new Swiper('.swiper', {
                spaceBetween: 20,
                slidesPerView: 2,
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev'
                }
            });
            if(typeof swiper != 'undefined') swiper.update();
        } else {
            if(typeof swiper != 'undefined') swiper.destroy(true, true);
            new Swiper('.swiper', {
                spaceBetween: 20,
                slidesPerView: 3,
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev'
                }
            });
            if(typeof swiper != 'undefined') swiper.update();
        }
    },

    toggleMenu() {
        // function that changes the mobile menu
        menu_hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-active');
    },

    labelsControl() {
        document.querySelectorAll('.input-group label').forEach(label => {
            if(window.innerWidth < 800) {
                if(!document.body.classList.contains('dark-mode')) {
                    label.style.padding = '0';
                    label.style.borderRadius = '0';
                    label.style.color = 'rgba(255, 255, 255, 0.75)';
                    label.style.transform = 'translateY(10px)';
                    label.style.fontSize = '1em';
                } else {
                    label.style.padding = '0';
                    label.style.borderRadius = '0';
                    label.style.color = 'rgba(255, 255, 255, 0.75)';
                    label.style.transform = 'translateY(10px)';
                    label.style.fontSize = '1em';
                }
            } else {
                if(!document.body.classList.contains('dark-mode')) {
                    label.style.padding = '0';
                    label.style.borderRadius = '0';
                    label.style.color = 'rgba(0, 150, 199, 0.75)';
                    label.style.transform = 'translateY(13px)';
                    label.style.fontSize = '1em';
                } else {
                    label.style.padding = '0';
                    label.style.borderRadius = '0';
                    label.style.color = 'rgba(255, 255, 255, 0.75)';
                    label.style.transform = 'translateY(13px)';
                    label.style.fontSize = '1em';
                }
            }
        });
    },

    scrollPage(index) {
        let scroll = null;

        if(window.innerWidth > 800) {
            switch(index) {
                case 1:
                    scroll = 600;
                    break;
                case 2:
                    scroll = 600 + (scroll_areas[0].clientHeight + 200);
                    break;
                case 3:
                    scroll = 600 + (scroll_areas[0].clientHeight + 200) + (scroll_areas[1].clientHeight + scroll_areas[2].clientHeight + 200);
                    break;
                case 4:
                    scroll = 600 + (scroll_areas[0].clientHeight + 200) + (scroll_areas[1].clientHeight + scroll_areas[2].clientHeight + 200) + scroll_areas[3].clientHeight;
                    break;
            }
        } else {
            switch(index) {
                case 1:
                    scroll = 600;
                    break;
                case 2:
                    scroll = 600 + (scroll_areas[0].clientHeight + 50);
                    break;
                case 3:
                    scroll = 600 + (scroll_areas[0].clientHeight + 50) + (scroll_areas[1].clientHeight + scroll_areas[2].clientHeight + 20);
                    break;
                case 4:
                    scroll = 600 + (scroll_areas[0].clientHeight + 50) + (scroll_areas[1].clientHeight + scroll_areas[2].clientHeight + 20) + scroll_areas[3].clientHeight;
                    break;
            }
        }

        window.scroll({
            top: scroll,
            behavior: 'smooth'
        })
    },

    eventListeners() {
        // enables the menu or disables it in mobile view
        menu_hamburger.addEventListener('click', pageControl.toggleMenu);

        // scroll to the contact area
        document.querySelector('#about .about-content h2 span').addEventListener('click', () => {
            pageControl.scrollPage(4);
        });

        // scroll to page sections
        document.querySelectorAll('footer .navs nav:nth-child(2) ul li').forEach((li, index) => {
            li.addEventListener('click', () => {
                pageControl.scrollPage(index + 1);
            });
        });

        // click events in the menu buttons
        document.querySelectorAll('header nav ul li').forEach((li, index) => {
            if(index != 4) {
                li.addEventListener('click', () => {
                    pageControl.scrollPage(index + 1);
                    if(window.innerWidth < 800) pageControl.toggleMenu(); 
                });
            } else {
                li.addEventListener('click', () => {
                    pageControl.darkModeControl();
                    pageControl.labelsControl();
                });
            }
        });

        // enables the card view
        document.querySelectorAll('#portfolio .portfolio-content .card .card-content i.fa-angle-down').forEach((arrow, index) => {
            const cards = document.querySelectorAll('#portfolio .portfolio-content .card');

            arrow.addEventListener('click', () => {
                cards.forEach(card => {
                    if(card != cards[index])card.classList.remove('active');
                });

                arrow.parentElement.parentElement.parentElement.classList.toggle('active');
            });
        });

        // label transitions 
        document.querySelectorAll('.input-group input, .input-group textarea').forEach(el => {
            el.addEventListener('focus', () => {
                pageControl.labelEvents.focus(el);
            });

            el.addEventListener('blur', () => {
                pageControl.labelEvents.blur(el);
            });
        });
    }
};

const App = {
    init() {
        pageControl.libs.vanillaTilt();
        pageControl.initDarkMode();
        pageControl.effectTechnologiesTopics(callbackEffectTechnology);
        pageControl.eventListeners();
        pageControl.libs.swiper = pageControl.getSwiper();

        // fix responsive
        window.addEventListener('resize', () => {
            pageControl.effectTechnologiesTopics(callbackEffectTechnology);
            pageControl.libs.swiper = pageControl.getSwiper();
        });
    }
};

App.init();