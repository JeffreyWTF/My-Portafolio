const toggle = document.getElementById('toggle-menu');
const nav = document.querySelector('nav');
const body = document.body;

toggle.addEventListener('click', () => {
    nav.classList.toggle('expanded');
    body.classList.toggle('menu-expanded');
    toggle.textContent = nav.classList.contains('expanded') ? '<' : '>';
    toggle.style.left = nav.classList.contains('expanded') ? '200px' : '60px';
});

nav.addEventListener('mouseenter', () => {
    if (!nav.classList.contains('expanded')) {
        body.classList.add('menu-hovered');
    }
    toggle.style.opacity = '0';
    toggle.style.pointerEvents = 'none';
});

nav.addEventListener('mouseleave', () => {
    body.classList.remove('menu-hovered');
    toggle.style.opacity = '1';
    toggle.style.pointerEvents = 'auto';
});