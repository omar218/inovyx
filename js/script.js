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


