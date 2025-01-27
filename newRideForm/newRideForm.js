let tripId = 1; // Start with ID 1 and increment for each trip

// Function to generate a unique trip ID
function generateTripId() {
  return tripId++;
}

// Handle form submission
document.getElementById("trip-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const tripId = Math.floor(Math.random() * 100000);
    alert(`Trip number ${tripId} has been successfully created. We will notify you when other passengers join.`);
    window.location.href = '../htmlfiles/homepage.html'; 
});
  // Generate a unique trip ID
  const id = generateTripId();

// Initialize the map centered on Tel Aviv
const map = L.map('map').setView([32.0853, 34.7818], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

let startMarker, endMarker;

// Handle map clicks for selecting start and destination points
map.on('click', (e) => {
    if (!startMarker) {
        startMarker = L.marker(e.latlng).addTo(map).bindPopup("Start Point").openPopup();
        document.getElementById('start-point').value = `${e.latlng.lat.toFixed(6)}, ${e.latlng.lng.toFixed(6)}`;
    } else if (!endMarker) {
        endMarker = L.marker(e.latlng).addTo(map).bindPopup("Destination Point").openPopup();
        document.getElementById('end-point').value = `${e.latlng.lat.toFixed(6)}, ${e.latlng.lng.toFixed(6)}`;
    } else {
        alert("Start and destination points are already selected. Reset to change points.");
    }
});

// Show or hide the payment amount field based on payment type
document.getElementById('payment').addEventListener('change', (e) => {
    const paymentGroup = document.getElementById('payment-amount-group');
    if (e.target.value === 'global' || e.target.value === 'per_km') {
        paymentGroup.style.display = 'block';
    } else {
        paymentGroup.style.display = 'none';
        document.getElementById('payment-amount').value = '';
    }
});
