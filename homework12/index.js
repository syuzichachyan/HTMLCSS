const initNavBar = () => {

    const hamburger = document.getElementsByClassName('hamburger')?.[0];
    const mobileNav = document.getElementsByClassName('mobile-nav')?.[0];

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });

}

const initSlide = () => {
    new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 29,
        freeMode: true,
        pagination: {
            clickable: true,
        },
    });
}

initSlide()
initNavBar()
