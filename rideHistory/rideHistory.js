document.addEventListener('DOMContentLoaded', () => {
    populateMockData(); // Add mock data
    loadTrips();        // Load trips into the table
});

function populateMockData() {
    const email = 'test@example.com'; // Mock email
    localStorage.setItem('current', email);

    const mockUserData = {
        trips: [
            {
                startPoint: 'Tel Aviv',
                destination: 'Ashdod',
                payment: '50₪',
                driver: 'Avi Cohen',
                date: '2025-01-15'
            },
            {
                startPoint: 'Haifa',
                destination: 'Eilat',
                payment: '50₪',
                driver: 'Roni Levi',
                date: '2025-01-18'
            },
            {
                startPoint: 'Ashdod',
                destination: 'Beer Sheva',
                payment: null,
                driver: 'Sara Mizrahi',
                date: '2025-01-20'
            },
            {
                startPoint: 'Netanya',
                destination: 'Herzliya',
                payment: '20₪',
                driver: 'Yossi Green',
                date: '2025-01-22'
            },
            {
                startPoint: 'Herzliya',
                destination: 'Ashdod',
                driver: 'Roni Levi',
                date: '2024-12-23'
            },
            {
                startPoint: 'Ashdod',
                destination: 'Herzliya',
                driver: 'Roni Levi',
                date: '2024-12-23'
            },
            {
                startPoint: 'Herzliya',
                destination: 'Ashdod',
                payment: '67₪',
                driver: 'Daniel Yaakov',
                date: '2024-12-10'
            },
            {
                startPoint: 'Ashdod',
                destination: 'Shilat&Ariels wedding',
                driver: 'Yoram Cohen',
                date: '2024-11-15'
            },
        ]
    };

    const userKey = `user_${email}`;
    localStorage.setItem(userKey, JSON.stringify(mockUserData));
}

function loadTrips() {
    const email = localStorage.getItem('current');
    const userKey = `user_${email}`;
    const userData = JSON.parse(localStorage.getItem(userKey));

    if (userData && userData.trips) {
        const tripsTableBody = document.getElementById('trips-body');

        userData.trips.forEach(trip => {
            const payment = trip.payment || '-'; // Default text for empty payment
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${trip.startPoint}</td>
                <td>${trip.destination}</td>
                <td>${payment}</td>
                <td>${trip.driver}</td>
                <td>${trip.date}</td>
            `;
            tripsTableBody.appendChild(row);
        });
    }
}
