window.addEventListener('load', () => {
    const hero = document.querySelector('#hero');

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        })
    }, {
        rootMargin: "0px",
        threshold: 1.0
    });
    heroObserver.observe(hero)
})