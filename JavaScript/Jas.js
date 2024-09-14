const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (name === '') {
        showError('Name is required.');
        return;
    }

 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        showError('Invalid email format.');
        return;
    }

    if (password === '') {
        showError('Password is required.');
        return;
    }

    errorMessages.textContent = '';
});

function showError(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessages.appendChild(errorMessage);
}
