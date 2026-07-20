// ========================================
// AOS INITIALIZATION
// ========================================

AOS.init({

    duration: 1000,

    once: true,

    offset: 50

});



// ========================================
// SWIPER HERO SLIDER
// ========================================

const currentSlide = document.querySelector(".current-slide");

const progressBar = document.querySelector(".counter-progress");


const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 1200,

    effect: "fade",

    fadeEffect: {

        crossFade: true

    },

    autoplay: {

        delay: 4000,

        disableOnInteraction: false

    },

    navigation: {

        nextEl: ".hero-next",

        prevEl: ".hero-prev"

    },

    keyboard: {

        enabled: true

    },

    on: {

        init: function () {

            updateSliderCounter(this);

        },

        slideChange: function () {

            updateSliderCounter(this);

        }

    }

});






/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", function(e){

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// ========================================
// SLIDER COUNTER
// ========================================

function updateSliderCounter(swiper) {

    const realIndex = swiper.realIndex + 1;

    const totalSlides = 3;


    currentSlide.textContent =
        String(realIndex).padStart(2, "0");


    const progress =
        (realIndex / totalSlides) * 100;


    progressBar.style.width =
        `${progress}%`;

}



// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar =
    document.querySelector(".main-navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});






// ========================================
// CLOSE MOBILE NAVBAR AFTER LINK CLICK
// ========================================

const navbarCollapse =
    document.querySelector("#mainMenu");


document
    .querySelectorAll("#mainMenu .nav-link:not(.dropdown-toggle)")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992) {

                const bootstrapCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);


                if (bootstrapCollapse) {

                    bootstrapCollapse.hide();

                }

            }

        });

    });






/*=========================================
            AOS INITIALIZATION
=========================================*/

AOS.init({

    duration: 1000,

    easing: "ease-in-out",

    once: true,

    offset: 80

});








/*=========================================
            AOS
=========================================*/

AOS.init({

    duration: 1000,

    once: true,

    easing: "ease-in-out",

    offset: 80  

});


/*=========================================
        SERVICES SWIPER
=========================================*/

const servicesSwiper = new Swiper(".servicesSwiper", {

    loop: true,

    speed: 1000,

    spaceBetween: 30,

    grabCursor: true,

    autoplay: {

        delay: 2500,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".servicesSwiper .swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        0: {

            slidesPerView: 1

        },

        576: {

            slidesPerView: 1.2

        },

        768: {

            slidesPerView: 2

        },

        992: {

            slidesPerView: 3

        },

        1400: {

            slidesPerView: 3

        }

    }

});






const designStyleSwiper = new Swiper(".designStyleSwiper", {

    loop: true,

    speed: 900,

    spaceBetween: 30,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".designStyleSwiper .swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        0: {

            slidesPerView: 1

        },

        768: {

            slidesPerView: 2

        },

        1200: {

            slidesPerView: 3

        }

    }

});









