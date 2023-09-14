function exampleWithVar() {
    let output = document.getElementById("outputScope");
    output.innerHTML = "";

    console.log(message); 
    var message = "Hello from var!";
    console.log(message); // Output: Hello from var!

    output.innerHTML += "<p>Example with var:</p>";
    output.innerHTML += "<p>message is: " + message + "</p>";
}

function exampleWithLet() {
    let output = document.getElementById("outputScope");
    output.innerHTML = "";

    let message = "Hello from let!";
    console.log(message);

    output.innerHTML += "<p>Example with let:</p>";
    output.innerHTML += "<p>message is: " + message + "</p>";
}

function exampleWithConst() {
    let output = document.getElementById("outputScope");
    output.innerHTML = "";

    const message = "Hello from const!";
    console.log(message); 

    output.innerHTML += "<p>Example with const:</p>";
    output.innerHTML += "<p>message is: " + message + "</p>";
}