document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    if (email === 'test@example.com' && password === 'password') {
        message.textContent = 'Login successful!';
        message.classList.remove('hidden', 'text-red-500');
        message.classList.add('text-green-500');
    } else {
        message.textContent = 'Invalid email or password.';
        message.classList.remove('hidden', 'text-green-500');
        message.classList.add('text-red-500');
    }
});
