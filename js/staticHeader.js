window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const staticHeader = document.querySelector('.staticHeader');

    if (window.scrollY > 177) {
        header.style.transform = 'translateY(-100%)';
        staticHeader.classList.add('visible');
    } else {
        header.style.transform = 'translateY(0)';
        staticHeader.classList.remove('visible');
    }
});