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
            ABOUT SWIPER
=========================================*/

const aboutSwiper = new Swiper(".aboutSwiper", {

    loop: true,

    speed: 1200,

    effect: "fade",

    fadeEffect: {
        crossFade: true
    },

    autoplay: {

        delay: 3500,

        disableOnInteraction: false

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true

    }

});


/*=========================================
        STATISTICS COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.innerText);

        let current = 0;

        const increment = target / 120;

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*=========================================
        IMAGE HOVER ZOOM
=========================================*/

const images = document.querySelectorAll(".aboutSwiper img");

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


/*=========================================
      FLOATING EXPERIENCE CARD
=========================================*/

const experienceBox = document.querySelector(".experience-box");

if (experienceBox) {

    window.addEventListener("scroll", () => {

        const offset = window.pageYOffset;

        experienceBox.style.transform =
            `translateY(${offset * 0.04}px)`;

    });

}


/*=========================================
         BUTTON HOVER EFFECT
=========================================*/

const aboutBtn = document.querySelector(".about-btn");

if (aboutBtn) {

    aboutBtn.addEventListener("mouseenter", () => {

        aboutBtn.style.boxShadow =
            "0 18px 40px rgba(198,166,106,.25)";

    });

    aboutBtn.addEventListener("mouseleave", () => {

        aboutBtn.style.boxShadow = "none";

    });

}


/*=========================================
      FEATURE ITEMS ANIMATION
=========================================*/

const featureItems = document.querySelectorAll(".feature");

featureItems.forEach((item, index) => {

    item.style.transitionDelay = `${index * 0.1}s`;

});


/*=========================================
         IMAGE PARALLAX
=========================================*/

const aboutImage = document.querySelector(".about-image");

window.addEventListener("scroll", () => {

    if (!aboutImage) return;

    const scrollValue = window.scrollY;

    aboutImage.style.transform =
        `translateY(${scrollValue * 0.05}px)`;

});