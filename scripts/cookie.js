function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
    const cookie = cookies.find(c => c[0] === name);
    return cookie ? cookie[1] : null;
}

document.getElementById('saveButtonCookie').addEventListener('click', function() {
    const data = prompt('Enter data to save:');
    
    if (data !== null && data.trim() !== '') {
        setCookie('savedData', data, 7); E
        alert('Data saved successfully!');
    }
});

document.getElementById('retrieveButtonCookie').addEventListener('click', function() {
    const savedData = getCookie('savedData');

    if (savedData !== null) {
        alert('Saved Data: ' + savedData);
    } else {
        alert('No data found in cookies.');
    }
});