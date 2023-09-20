function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'This is the fetched data!';
            resolve(data);
        }, 2000); 
    });
}

document.getElementById('promiseButton').addEventListener('click', function() {
    document.getElementById('outputPromise').textContent = 'Loading...';

    fetchData()
        .then(data => {
            document.getElementById('outputPromise').textContent = `Data: ${data}`;
        })
        .catch(error => {
            document.getElementById('outputPromise').textContent = `Error: ${error}`;
        });
});





//===============================================================================================
//Async Await Example




async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData = await response.json();
        return userData;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
}

document.getElementById('getUserButton').addEventListener('click', async function() {
    document.getElementById('outputAsyncAwait').textContent = 'Loading...';

    try {
        const user = await fetchUserData();
        const outputElement = document.getElementById('outputAsyncAwait');
        outputElement.innerHTML = '';

        const nameElement = document.createElement('div');
        nameElement.textContent = `Name: ${user.name}`;
        outputElement.appendChild(nameElement);

        const emailElement = document.createElement('div');
        emailElement.textContent = `Email: ${user.email}`;
        outputElement.appendChild(emailElement);

        const phoneElement = document.createElement('div');
        phoneElement.textContent = `Phone: ${user.phone}`;
        outputElement.appendChild(phoneElement);
    } catch (error) {
        document.getElementById('outputAsyncAwait').textContent = `Error: ${error.message}`;
    }
});