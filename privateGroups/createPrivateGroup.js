// Event listener for the group form submission
document.getElementById('group-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const groupName = document.getElementById('group-name').value.trim();
    const groupDescription = document.getElementById('group-description').value.trim();
    const maxUsers = document.getElementById('max-users').value.trim();
    const groupType = document.getElementById('group-type').value;
    const groupPassword = document.getElementById('group-password').value.trim();

    if (groupName && groupDescription && maxUsers) {
        if (groupType === 'private' && !groupPassword) {
            alert('Please provide a password for the private group.');
            return;
        }

        // Create a unique group ID
        const groupId = `group_${Date.now()}`; // Using a timestamp for uniqueness

        const groupData = {
            groupId, // Add the unique group ID
            groupName,
            groupDescription,
            maxUsers: parseInt(maxUsers, 10),
            groupType,
            groupPassword
        };

        // Save group data in local storage
        localStorage.setItem(groupId, JSON.stringify(groupData));

        // Show success message with group name and ID
        alert(`Group created successfully!\nGroup Name: ${groupName}\nGroup ID: ${groupId}`);

        // Redirect to the view rides page
        window.location.href = '../htmlfiles/viewRides.html';
    } else {
        alert('Please fill in all required fields.');
    }
});

// Separate function to create a group
function createGroup() {
    const groupName = document.getElementById('group-name').value.trim();
    const groupDescription = document.getElementById('group-description').value.trim();
    const groupLimit = document.getElementById('group-limit').value.trim();
    const groupAdditionalInfo = document.getElementById('group-additional-info').value.trim();

    if (groupName && groupDescription && groupLimit) {
        // Create a unique group ID
        const groupId = Math.floor(Date.now()/100000000); // Using a timestamp for uniqueness

        // Save data in local storage or send to server
        const groupData = {
            groupId, // Add the unique group ID
            groupName,
            groupDescription,
            groupLimit: parseInt(groupLimit, 10),
            groupAdditionalInfo
        };
        localStorage.setItem(groupId, JSON.stringify(groupData));

        // Display success message with group details
        displayMessage(`Group created successfully!\nGroup Name: ${groupName}\nGroup ID: ${groupId}`, 'green');

        // Redirect to the view rides page
        window.location.href = '../htmlfiles/viewRides.html';
    } else {
        displayMessage('Please fill in all required fields.', 'red');
    }
}

// Helper function to display messages
function displayMessage(message, color) {
    alert(message); // Display message in an alert
}
