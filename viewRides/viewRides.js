// Mock data for prototype
const mockRides = [
    {
        start: "Tel Aviv",
        destination: "Jerusalem",
        driver: "David Cohen",
        passengers: 3,
        maxPassengers: 4,
        paymentType: "Per Kilometer",
        paymentAmount: 50, // Payment in NIS
        groupId: "",
        date: "2025-01-28T10:00", // Date and time in ISO format
    },
    {
        start: "Haifa",
        destination: "Eilat",
        driver: "Sarah Levi",
        passengers: 1,
        maxPassengers: 3,
        paymentType: "Global Payment",
        paymentAmount: 200, // Payment in NIS
        groupId: "12345",
        date: "2025-01-30T15:30", // Date and time in ISO format
    },
    {
        start: "Ashdod",
        destination: "Beer Sheva",
        driver: "Rachel Gabay",
        passengers: 2,
        maxPassengers: 5,
        paymentType: "Free Ride",
        paymentAmount: null, // No payment defined
        groupId: "",
        date: "2025-02-01T08:45", // Date and time in ISO format
    },
    {
        start: "Tel Aviv",
        destination: "Beer Sheva",
        driver: "Rachel Gabay",
        passengers: 2,
        maxPassengers: 5,
        paymentType: "Free Ride",
        paymentAmount: null, // No payment defined
        groupId: "",
        date: "2025-03-01T08:00", // Date and time in ISO format
    },
];

// Function to populate mock data into localStorage
function populateMockData() {
    if (!localStorage.getItem("rides")) {
        localStorage.setItem("rides", JSON.stringify(mockRides));
    }
}

// Load rides from localStorage
function loadRides(groupId = null) {
    const rides = JSON.parse(localStorage.getItem("rides")) || [];
    return groupId === null
        ? rides.filter((ride) => ride.groupId === "") // Default: show only public rides
        : rides.filter((ride) => ride.groupId === groupId); // Filter by specific group ID
}

// Render rides based on filter
    function renderRides(groupId = null) {
        const ridesContainer = document.getElementById("rides-container");
        ridesContainer.innerHTML = ""; // Clear container
    
        const filteredRides = loadRides(groupId);
    
        if (filteredRides.length === 0) {
            ridesContainer.innerHTML = `<p>No rides available${groupId ? " for the selected group ID" : ""}.</p>`;
            return;
        }
    
        filteredRides.forEach((ride) => {
            const rideCard = document.createElement("div");
            rideCard.className = "ride-card";
    
            const paymentAmount = ride.paymentAmount !== null ? `${ride.paymentAmount} NIS` : "-";
            const rideDate = new Date(ride.date).toLocaleString("en-GB", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });
    
            rideCard.innerHTML = `
                <h3>${ride.start} ➡️ ${ride.destination}</h3>
                <p><strong>Driver:</strong> ${ride.driver}</p>
                <p><strong>Passengers:</strong> ${ride.passengers}/${ride.maxPassengers}</p>
                <p><strong>Payment Type:</strong> ${ride.paymentType}</p>
                <p><strong>Payment Amount:</strong> ${paymentAmount}</p>
                <p><strong>Date:</strong> ${rideDate}</p>
                <p><strong>Group ID:</strong> ${ride.groupId || "Public"}</p>
                <button data-id="${ride.start}-${ride.destination}" class="join-btn">Request to Join</button>
            `;
    
            ridesContainer.appendChild(rideCard);
        });
    
        // Add event listeners for join buttons
        document.querySelectorAll(".join-btn").forEach((button) =>
            button.addEventListener("click", handleJoinRequest)
        );
    
}

// Handle join request
function handleJoinRequest(event) {
    const button = event.target;
    button.disabled = true;
    button.innerText = "Waiting for the driver approval to join the ride";

    setTimeout(() => {
        button.innerText = "Complete Ride";
        button.disabled = false; // Enable the button again
        button.classList.remove("join-btn");
        button.classList.add("complete-btn");

        // Replace button to remove old event listeners
        const newButton = button.cloneNode(true);
        button.replaceWith(newButton);

        // Add new event listener for the complete ride button
        newButton.addEventListener("click", handleCompleteRide);
    }, 3000);
}

// Handle complete ride
function handleCompleteRide(event) {
    alert("Ride completed! Redirecting to rating form...");
    window.location.href = "../htmlfiles/ratingForm.html"; // Redirect to rating form
}

// Filter rides by group ID
document.getElementById("filter-btn").addEventListener("click", () => {
    const groupId = document.getElementById("group-id").value.trim();
    renderRides(groupId || null); // If empty input, show public rides
});

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    populateMockData(); // Ensure mock data exists in localStorage
    renderRides(); // Show public rides by default
});

document.getElementById("create-ride-btn").addEventListener("click", () => {
    window.location.href = "../htmlfiles/newRideForm.html"; // Redirect to the new ride form
});
