function showSignup() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        displayMessage('Please fill in all fields.', 'red');
        return;
    }
    window.location.href = '../homepge/homepage.html';

}

function displayMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}

function signup() {
    const fullname = document.getElementById('signup-fullname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const phone = document.getElementById('signup-phone').value;
    const dob = document.getElementById('signup-dob').value;
    const additionalInfo = document.getElementById('signup-additional-info').value;

    const isDriver = document.getElementById('is-driver').checked;
    let carNumber = '', carType = '', carSeats = '', driverAdditionalInfo = '';

    if (isDriver) {
        carNumber = document.getElementById('signup-car-number').value;
        carType = document.getElementById('signup-car-type').value;
        carSeats = document.getElementById('signup-car-seats').value;
        driverAdditionalInfo = document.getElementById('signup-driver-additional-info').value;
    }

    if (fullname && email && password && confirmPassword && phone && dob) {
        if (password !== confirmPassword) {
            displayMessage('Passwords do not match!', 'red');
            return;
        }

        const userKey = `user_${email}`;
        if (localStorage.getItem(userKey)) {
            displayMessage('User with this email already exists!', 'red');
        } else {
            const userData = {
                fullname, email, password, phone, dob, additionalInfo, isDriver, carNumber, carType, carSeats, driverAdditionalInfo
            };
            localStorage.setItem(userKey, JSON.stringify(userData));
            localStorage.setItem('current', email);
            setCookie('current', email, 5);
            window.location.href = '../htmlFiles/homepage.html';
        }
    } else {
        displayMessage('Please fill in all required fields.', 'red');
    }
}

function toggleDriverFields() {
    const driverFields = document.getElementById('driver-fields');
    driverFields.style.display = driverFields.style.display === 'none' ? 'block' : 'none';
}
