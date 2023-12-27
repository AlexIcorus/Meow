const API = 'http://localhost:4000';

function getValue(id) {
    return document.getElementById(id).value;
}

async function handleLogin() {
    try {
        const email = getValue('email');
        const password = getValue('password');
        const response = await fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const result = await response.json();

        if (response.status !== 200) {
            return alert('Email or password is incorrect');
        }

        localStorage.setItem('token', result.token);
        window.location.href = '/index.html';
    } catch (error) {
        console.error(error);
    }
}

async function handleRegister() {
    try {
        const firstName = getValue('regFirstName');
        const lastName = getValue('regLastName');
        const email = getValue('regEmail');
        const password = getValue('regPassword');
        const confirmPassword = getValue('regConfirmPassword');

        // Check if passwords match
        if (password !== confirmPassword) {
            return alert('Passwords do not match');
        }

        const response = await fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        });

        const result = await response.json();

        if (response.status !== 200) {
            return alert('Registration failed. Please check your details.');
        }

        localStorage.setItem('token', result.token);
        window.location.href = '/index.html';
    } catch (error) {
        console.error(error);
    }
}