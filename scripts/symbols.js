const mySymbol = Symbol('mySymbol');

    // Attach the Symbol as a property to an object
    const myObject1 = {};
    myObject1[mySymbol] = 'Hello, I am a Symbol';

    // Add a click event listener to the button
    document.getElementById('myButtonSymbols').addEventListener('click', () => {
        // Access the property using the Symbol
        alert(myObject1[mySymbol]);
    });