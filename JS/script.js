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

function tabFilters() {
    const tabs = document.querySelectorAll('.portofolio-filters a');
    const projects = document.querySelectorAll('.portfolio .card');

    const resetActive = () => {
        tabs.forEach(element => {
            element.classList.remove('active');
        });
    }

    const showProJects = (element) => {
        console.log(element);
        projects.forEach(project => {
            
            let filter = project.getAttribute('data-category');

            if (element === 'all') {
                project.parentNode.classList.remove('hide');
                return
            }

            if(filter !== element) {
                project.parentNode.classList.add('hide');
            } else {
               project.parentNode.classList.remove('hide');
            }
        });
    }

    tabs.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = element.getAttribute('data-filter');
            showProJects(filter);
            element.classList.add('active');
        });
    })
}
showProJects();
tabFilters();
// Séquence de touches souhaitée (par exemple, "abc")
// const sequence = ['s','a','n','t','i'];
// let currentSequence = [];

// // Écouter les événements de touches
// document.addEventListener('keydown', (event) => {
//     // Ajouter la touche pressée à la séquence actuelle
//     currentSequence.push(event.key);

//     // Vérifier si la séquence actuelle correspond à la séquence souhaitée
//     if (currentSequence.join('').includes(sequence.join(''))) {
//         // Rediriger l'utilisateur vers une autre page
//         window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
//     }

//     // Limiter la longueur de la séquence actuelle pour éviter les dépassements
//     if (currentSequence.length > sequence.length) {
//         currentSequence.shift();
//     }
// });