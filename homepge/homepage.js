const currentUserEmail = localStorage.getItem('current');
const currentUserKey = `user_${currentUserEmail}`;
const currentUserData = JSON.parse(localStorage.getItem(currentUserKey));

if (currentUserData && currentUserData.fullname) {
    document.getElementById("welcome-banner").innerHTML = "Welcome " + currentUserData.fullname;
} else {
    document.getElementById("welcome-banner").innerHTML = "Welcome Guest";
}

document.getElementById('new-ride-btn').addEventListener('click', function() {
    const isDriver = currentUser.isDriver;
    if (isDriver) {
        window.location.href = 'createPrivateGroup/new-ride.html'; 
    } else {
        alert('Please complete your registration as a driver.');
        window.location.href = 'register-driver.html'; 
    }
});

document.getElementById('join-ride-btn').addEventListener('click', function() {
    window.location.href = '../htmlFiles/joinRide.html'; 
});
document.getElementById('ride-history-btn').addEventListener('click', function() {
    window.location.href = '../htmlFiles/rideHistory.html'; 
});

document.getElementById('new-group-btn').addEventListener('click', function() {
    window.location.href = '../htmlFiles/createPrivateGroup.html'; 
});
