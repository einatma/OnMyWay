const currentUserEmail = localStorage.getItem('current');
const currentUserKey = `user_${currentUserEmail}`;
const currentUserData = JSON.parse(localStorage.getItem(currentUserKey));

if (currentUserData && currentUserData.fullname) {
    document.getElementById("welcome-banner").innerHTML = "Welcome " + currentUserData.fullname;
} else if (currentUserEmail) {
    document.getElementById("welcome-banner").innerHTML = "Welcome Guest";
} else {
    // אם אין משתמש מחובר, מפנים לעמוד הכניסה
    window.location.href = '../htmlfiles/login.html';
}

// לחצן ליצירת נסיעה חדשה
document.getElementById('new-ride-btn').addEventListener('click', function () {
    if (currentUserData && currentUserData.isDriver) {
        window.location.href = '../htmlfiles/newRideForm.html';
    } else {
        alert('Please complete your registration as a driver.');
        window.location.href = '../htmlfiles/register-driver.html';
    }
});

// לחצן להצטרפות לנסיעה
document.getElementById('join-ride-btn').addEventListener('click', function () {
    window.location.href = '../htmlfiles/viewRides.html'; // עדכן לכתובת המתאימה
});

// לחצן היסטוריית נסיעות
document.getElementById('ride-history-btn').addEventListener('click', function () {
    window.location.href = '../htmlfiles/rideHistory.html';
});

// לחצן יצירת קבוצה פרטית
document.getElementById('new-group-btn').addEventListener('click', function () {
    window.location.href = '../htmlfiles/createPrivateGroup.html';
});
