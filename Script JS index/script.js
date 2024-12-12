function menuMobile() {
    const btn = document.querySelector('.burger')
    const header = document.querySelector('header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    })


    // J'utilise un forEach pour parcourir chaque lien et ajouter un gestionnaire d'evenement 'click'
    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    })
}

menuMobile()