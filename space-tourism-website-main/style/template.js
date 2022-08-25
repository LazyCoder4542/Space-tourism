const openIcon = document.querySelector('.header').querySelector('.hamburger');
const navigationBar = document.querySelector('.navigation-bar');
const closeIcon = navigationBar.querySelector('.close');
openIcon.addEventListener('click', () => {
    navigationBar.style.transform = 'translateX(0)'
});
closeIcon.addEventListener('click', () => {
    navigationBar.style.transform = 'translateX(100%)'
});
console.log(Array.from(document.images))