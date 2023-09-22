let db;

// Open or create the database
const request = indexedDB.open('myDatabase', 1);

// Setup event handlers for the database
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore('data', { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('content', 'content', { unique: false });
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onerror = function(event) {
    alert("Error opening database: " + event.target.errorCode);
};

document.getElementById('saveButtonDB').addEventListener('click', function() {
    const data = prompt('Enter data to save:');
    
    if (data !== null && data.trim() !== '') {
        const transaction = db.transaction(['data'], 'readwrite');
        const objectStore = transaction.objectStore('data');
        const request = objectStore.add({ content: data });

        request.onsuccess = function(event) {
            alert('Data saved successfully!');
        };

        request.onerror = function(event) {
            alert('Error saving data: ' + event.target.errorCode);
        };
    }
});

document.getElementById('retrieveButtonDB').addEventListener('click', function() {
    const transaction = db.transaction(['data'], 'readonly');
    const objectStore = transaction.objectStore('data');
    const request = objectStore.getAll();

    request.onsuccess = function(event) {
        const savedData = event.target.result;

        if (savedData.length > 0) {
            // alert('Saved Data:');
            savedData.forEach(item => {
                alert(item.content);
            });
        } else {
            alert('No data found in IndexedDB.');
        }
    };

    request.onerror = function(event) {
        alert('Error retrieving data: ' + event.target.errorCode);
    };
});