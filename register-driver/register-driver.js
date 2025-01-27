function submitDriverDetails() {
    const carNumber = document.getElementById('car-number').value;
    const carType = document.getElementById('car-type').value;
    const carSeats = document.getElementById('car-seats').value;
    const driverAdditionalInfo = document.getElementById('driver-additional-info').value;

    if (!carNumber || !carType || !carSeats) {
        displayMessage('Please fill in all required fields.', 'red');
        return;
    }

    const email = localStorage.getItem('current'); // המייל של המשתמש הנוכחי
    const userKey = `user_${email}`;
    let userData = JSON.parse(localStorage.getItem(userKey));

    // עדכון פרטי הנהג במשתמש
    userData.isDriver = true;
    userData.carNumber = carNumber;
    userData.carType = carType;
    userData.carSeats = carSeats;
    userData.driverAdditionalInfo = driverAdditionalInfo;

    // שמירת הנתונים המעודכנים ב-localStorage
    localStorage.setItem(userKey, JSON.stringify(userData));

    displayMessage('Driver details submitted successfully!', 'green');
    setTimeout(() => {
        window.location.href = '../htmlfiles/homepage.html'; // הפניה לעמוד הבית לאחר ההשלמה
    }, 2000);
}

function displayMessage(message, color) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}

function populateDriverFields() {
    const email = localStorage.getItem('current'); // המייל של המשתמש הנוכחי
    const userKey = `user_${email}`;
    const userData = JSON.parse(localStorage.getItem(userKey));

    if (userData && userData.isDriver) {
        // אם המשתמש כבר נהג, ממלאים את השדות
        document.getElementById('car-number').value = userData.carNumber || '';
        document.getElementById('car-type').value = userData.carType || '';
        document.getElementById('car-seats').value = userData.carSeats || '';
        document.getElementById('driver-additional-info').value = userData.driverAdditionalInfo || '';
    }
}

// הפעלת הפונקציה בעת טעינת הדף
window.onload = populateDriverFields;
