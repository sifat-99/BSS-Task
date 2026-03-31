document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    console.log(toggleButton);


    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        console.log(mobileMenu);

    })
})



window.addEventListener('scroll', function () {
    const navbar = querySelector('.navbar')
    if (this.window.scrollY > 0) {
        navbar.classList.add('navbar--scroll')
    } else {
        navbar.classList.remove('navbar--scroll')
    }

})
