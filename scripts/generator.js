function* myGenerator() {
    yield 'First';
    yield 'Second';
    yield 'Third';
}

// Create an instance of the generator
const iterator = myGenerator();

// Add a click event listener to the button
document.getElementById('myButtonGenerator').addEventListener('click', () => {
    // Use the generator
    const result = iterator.next();
    
    if (!result.done) {
        alert(result.value);
    } else {
        alert('Generator is complete');
    }
});