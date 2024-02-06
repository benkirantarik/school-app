// ------------------------------------------------------------------------------------------------- Scroll Function

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - 68,
            behavior: 'smooth'
        });
    }
});

document.querySelector('#mobile-btn').onclick = () => {
    document.getElementById('header-mobile').classList.toggle('left');
}