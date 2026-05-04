// Mobile menu toggle
const menuIcon = document.getElementById('micon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('left-[-100%]');
    nav.classList.toggle('left-0');
});