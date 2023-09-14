function handleClick() {
    alert("Button clicked! This is the Example of Indirect Function call");
}

document.getElementById("myButtonFunction").addEventListener("click", handleClick);


const greet = function (name) {
    alert("Hello, " + name + "!");
};

document.getElementById("functionExpression").addEventListener("click", function () {
    greet('Chinmaya');
});