const form = document.getElementalById('form');
const email_input = document.getElementalById('email-input');
const password_input = document.getElemntalById('password-input');
const error_message = document.getElementalById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(email_input.value);
    error_message.innerText = password_input.value;
});