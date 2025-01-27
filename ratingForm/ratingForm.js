document.getElementById('rating-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const safety = document.getElementById('safety').value;
    const cleanliness = document.getElementById('cleanliness').value;
    const comfort = document.getElementById('comfort').value;
    const atmosphere = document.getElementById('atmosphere').value;
    const comments = document.getElementById('comments').value;

    const email = localStorage.getItem('current');
    const userKey = `user_${email}`;
    const userData = JSON.parse(localStorage.getItem(userKey));

    const feedback = {
        safety,
        cleanliness,
        comfort,
        atmosphere,
        comments,
        date: new Date().toLocaleString()
    };

    userData.feedback = userData.feedback || [];
    userData.feedback.push(feedback);
    localStorage.setItem(userKey, JSON.stringify(userData));

    alert('Thank you for your feedback!');
    window.location.href = '../htmlfiles/homepage.html';  // Redirect back to the trip history page
});
