function add(a, b) {
    return a + b;
}

// Impure function with side effect (modifies a DOM element)
function impureAdd(a, b) {
    const resultElement = document.getElementById('resultPure');
    resultElement.textContent = `The sum of a and b is : ${a + b}`;
}

// Event listener for the button click
document.getElementById('pureFunction').addEventListener('click', function() {
    // Example of using the pure function
    const pureResult = add(2, 3);
    console.log('Pure Result:', pureResult);

    // Example of using the impure function
    impureAdd(2, 3);
});