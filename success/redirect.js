const redirection = (url) => {
    // J'ai besoin d'appeler une méthode qui va compter le temps passé

    setTimeout(
        // Je déclare que cette méthode va rediriger vers un url après une certaine durée
        () => {
            // On utilise window.location.ref qui est l'emplacement de la barre de recherche pour agir sur l'url
            window.location.href = url;
        },

        // Dans un 2ème temps j'ajoute le temps avant redirection à ma fonction
        5000
    );
}