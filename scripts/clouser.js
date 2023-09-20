function createCounter() {
    let counter = 0;

    return function() {
        counter++;
        document.getElementById('counter').textContent = counter;
    };
}

const incrementCounter = createCounter();

document.getElementById('incrementButton').addEventListener('click', incrementCounter);