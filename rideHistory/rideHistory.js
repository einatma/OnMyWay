document.addEventListener('DOMContentLoaded', loadTrips);

function loadTrips() {
    const email = localStorage.getItem('current');
    const userKey = `user_${email}`;
    const userData = JSON.parse(localStorage.getItem(userKey));

    if (userData && userData.trips) {
        const tripsTableBody = document.getElementById('trips-body');

        userData.trips.forEach(trip => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${trip.startPoint}</td>
                <td>${trip.destination}</td>
                <td>${trip.payment}</td>
                <td>${trip.driver}</td>
                <td>${trip.date}</td>
            `;
            tripsTableBody.appendChild(row);
        });
    }
}
