document.getElementById('numberButton').addEventListener('click', function() {
    const num1 = 10;
    const num2 = 5;

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;

    document.getElementById('numberString').textContent = `
        Sum: ${sum}
        Difference: ${difference}
        Product: ${product}
        Quotient: ${quotient}
    `;
});

document.getElementById('stringButton').addEventListener('click', function() {
    const str1 = 'Hello';
    const str2 = ' World';

    const concatenation = str1 + str2;

    document.getElementById('numberString').textContent = `
        Concatenation: ${concatenation}
    `;
});


