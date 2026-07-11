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

        delay: 6000,

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
// ACTIVE NAVIGATION
// ========================================

const navLinks =
    document.querySelectorAll(".main-navbar .nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );


        if (!this.classList.contains("dropdown-toggle")) {

            this.classList.add("active");

        }

    });

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