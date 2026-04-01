document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    console.log(toggleButton);


    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        console.log(mobileMenu);

    });
    const modal = document.getElementById('videoModal')
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer')

    videoButton.addEventListener('click', function () {
        modal.style.display = 'block'

        videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

        closeButton.addEventListener('click', function () {
            modal.style.display = 'none'
            videoPlayer.src = '';
        })

        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                videoPlayer
            }
        })
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
