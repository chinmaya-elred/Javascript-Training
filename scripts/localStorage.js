document.getElementById('saveButton').addEventListener('click', function() {
    const data = prompt('Enter data to save:');
    
    if (data !== null && data.trim() !== '') {
        localStorage.setItem('savedData', data);
        alert('Data saved successfully!');
    }
});


document.getElementById('retrieveButton').addEventListener('click', function() {
    // Retrieve data from local storage
    const savedData = localStorage.getItem('savedData');

    if (savedData !== null) {
        alert('Saved Data: ' + savedData);
    } else {
        alert('No data found in local storage.');
    }
});