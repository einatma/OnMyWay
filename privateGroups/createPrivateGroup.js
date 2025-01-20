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

        const groupData = {
            groupName,
            groupDescription,
            maxUsers: parseInt(maxUsers, 10),
            groupType,
            groupPassword
        };

        const groupKey = `group_${groupName}`;
        localStorage.setItem(groupKey, JSON.stringify(groupData));

        alert('Group created successfully!');
        window.location.href = 'group-trips.html';  // Redirect to the group trips page
    } else {
        alert('Please fill in all required fields.');
    }
    function createGroup() {
        const groupName = document.getElementById('group-name').value;
        const groupDescription = document.getElementById('group-description').value;
        const groupLimit = document.getElementById('group-limit').value;
        const groupAdditionalInfo = document.getElementById('group-additional-info').value;
    
        if (groupName && groupDescription && groupLimit) {
            // שמירת הנתונים בלוקאל סטורג' או העברה לשרת
            const groupData = {
                groupName, groupDescription, groupLimit, groupAdditionalInfo
            };
            localStorage.setItem(`group_${groupName}`, JSON.stringify(groupData));
            displayMessage('Group created successfully!', 'green');
            // הפניה לעמוד הנסיעות הקיימות בקבוצה
            window.location.href = '../groupRides/groupRides.html';
        } else {
            displayMessage('Please fill in all required fields.', 'red');
        }
    }
    
});