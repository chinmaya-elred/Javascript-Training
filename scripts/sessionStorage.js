document.getElementById('saveButtonSession').addEventListener('click', function() {
    const data = prompt('Enter data to save:');
    
    if (data !== null && data.trim() !== '') {
        sessionStorage.setItem('saveButtonSession', data);
        alert('Data saved successfully!');
    }
});

document.getElementById('retrieveButtonSession').addEventListener('click', function() {
    const saveButtonSession = sessionStorage.getItem('saveButtonSession');

    if (saveButtonSession !== null) {
        alert('Saved Data: ' + saveButtonSession);
    } else {
        alert('No data found in session storage.');
    }
});