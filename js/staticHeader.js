window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector('.mainHeader');
    const staticHeader = document.querySelector('.staticHeader');

    if (window.scrollY > 177) {
        mainHeader.style.transform = 'translateY(-100%)';
        staticHeader.classList.add('visible');
    } else {
        mainHeader.style.transform = 'translateY(0)';
        staticHeader.classList.remove('visible');
    }
});