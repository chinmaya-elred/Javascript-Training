function openMap(latitude, longitude) {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
}

function shareLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            openMap(latitude, longitude);
        }, error => {
            alert('Error getting location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported in this browser.');
    }
}

document.getElementById('openMapButton').addEventListener('click', shareLocation);