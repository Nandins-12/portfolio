const menu_hamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('header nav ul');
const cv_download = document.querySelector('.header-content a');
const technologies_topics = document.querySelectorAll('.technologies-topics div');
const scroll_areas = document.querySelectorAll('#about, #technologies, #skills,  #portfolio, #contact');
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

    darkModeControl() {
        //Dark-mode control with localStorage
        if(localStorage.length != 0) {
            if(localStorage.getItem('dark-mode') == 'on') {
                document.body.classList.toggle('dark-mode');
            } 
        }
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

    menuButtons() {
        // click events in the menu buttons
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

                    if(window.innerWidth < 800) pageControl.toggleMenu(); 
                });
            } else {
                li.addEventListener('click', () => {
                    document.body.classList.toggle('dark-mode');
                    document.body.classList.contains('dark-mode') ? localStorage.setItem('dark-mode', 'on') : localStorage.setItem('dark-mode', 'off');
                    if(window.innerWidth < 800) pageControl.toggleMenu(); 

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
                });
            }
        });
    },

    eventListeners() {
        menu_hamburger.addEventListener('click', pageControl.toggleMenu);

        document.querySelector('#about .about-content h2 span').addEventListener('click', () => {
            window.scroll({
                top: 600 + scroll_areas[0].clientHeight + scroll_areas[1].clientHeight + scroll_areas[2].clientHeight + scroll_areas[3].clientHeight,
                behavior: 'smooth'
            })
        });

        document.querySelectorAll('footer .navs nav:nth-child(2) ul li').forEach((li, index) => {
            li.addEventListener('click', () => {
                let scrolls = [
                    600,
                    600 + scroll_areas[0].clientHeight,
                    600 + scroll_areas[0].clientHeight + scroll_areas[1].clientHeight + scroll_areas[2].clientHeight,
                    600 + scroll_areas[0].clientHeight + scroll_areas[1].clientHeight + scroll_areas[2].clientHeight + scroll_areas[3].clientHeight
                ];
                            
                window.scroll({top: scrolls[index], behavior: 'smooth'});
            });
        });

        document.querySelectorAll('#portfolio .portfolio-content .card .card-content i.fa-angle-down').forEach((arrow, index) => {
            const cards = document.querySelectorAll('#portfolio .portfolio-content .card');

            arrow.addEventListener('click', () => {
                cards.forEach(card => {
                    if(card != cards[index])card.classList.remove('active');
                });

                arrow.parentElement.parentElement.parentElement.classList.toggle('active');
            });
        });

        document.querySelectorAll('.input-group input, .input-group textarea').forEach(el => {
            el.addEventListener('focus', () => {
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
            });

            el.addEventListener('blur', () => {
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
            });
        });
    }
};

const App = {
    init() {
        pageControl.libs.vanillaTilt();
        pageControl.menuButtons();
        pageControl.darkModeControl();
        pageControl.effectTechnologiesTopics(callbackEffectTechnology);
        pageControl.eventListeners();
        pageControl.libs.swiper = pageControl.getSwiper();

        // fix responsive
        window.addEventListener('resize', () => {
            pageControl.eventListeners();
            pageControl.effectTechnologiesTopics(callbackEffectTechnology);
            pageControl.libs.swiper = pageControl.getSwiper();
        });
    }
};

App.init();