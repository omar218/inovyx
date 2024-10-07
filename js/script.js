document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Merci pour votre message, nous vous contacterons bientôt!');
    }
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('nav'); // Sélectionne le nav
    const carouselHeight = document.getElementById('carouselExampleSlidesOnly').offsetHeight; // Hauteur du carousel

    if (window.scrollY > carouselHeight) {
        header.classList.add('header-scrolled'); // Ajoute la classe si défilement est au-delà de l'image
    } else {
        header.classList.remove('header-scrolled'); // Retire la classe sinon
    }
});

