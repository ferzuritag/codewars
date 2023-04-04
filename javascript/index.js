var teleportAudio = new Audio('../assets/teleport.mp3')

var dragonBallMusic = new Audio('../assets/dragonball.mp3')

window.addEventListener('load', () => {
    const section1 = document.querySelector("section");
    const gokuBody = document.querySelector('#goku-body');
    const sections = document.querySelectorAll('section');


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.scrollIntoView({
                    behavior: "smooth"
                });
            } 
        })
    }, {

        rootMargin: "0px",
        threshold: 0.40
    });
    sections.forEach((el) => {
        observer.observe(el);
    });

    const observerGokuAppear = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !gokuBody.classList.contains('body__goku__image--appear')) {
                setTimeout(() => {
                    gokuBody.classList.add('body__goku__image--appear');
                    teleportAudio.play()
                }, 1000)
            }
        })
    }, {
        rootMargin: "0px",
        threshold: .50
    });
    observerGokuAppear.observe(section1);
})

function hiddeModal() {
    const modal = document.querySelector('#main-modal');

    modal.classList.add('display-none');
    dragonBallMusic.play()
}