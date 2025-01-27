function submitDriverDetails() {
    const carNumber = document.getElementById('car-number').value;
    const carType = document.getElementById('car-type').value;
    const carSeats = document.getElementById('car-seats').value;
    const driverAdditionalInfo = document.getElementById('driver-additional-info').value;

    if (!carNumber || !carType || !carSeats) {
        displayMessage('Please fill in all required fields.', 'red');
        return;
    }

    const driverDetails = {
        carNumber,
        carType,
        carSeats,
        driverAdditionalInfo,
    };

    localStorage.setItem('driverDetails', JSON.stringify(driverDetails));
    displayMessage('Driver details submitted successfully!', 'green');
    setTimeout(() => {
        window.location.href = '../htmlfiles/homepage.html';
    }, 2000);
}

function displayMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}
