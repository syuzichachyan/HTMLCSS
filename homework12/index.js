const hamburger = document.getElementsByClassName('hamburger')?.[0];
const mobileNav = document.getElementsByClassName('mobile-nav')?.[0];

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});
