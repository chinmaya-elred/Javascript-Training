function greetCallback(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye(name) {
    let output = document.getElementById("outputCallback");
    console.log(output, name)
    output.innerHTML += `<p>Goodbye! ${name}</p>`;
}

document.getElementById("callbackButton").addEventListener("click", function() {
    greetCallback("John", sayGoodbye('John'));
});