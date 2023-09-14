function changeText(newText) {
    this.innerText = newText;
}

let buttonElement = document.getElementById("changeTextButton");

// Bind the changeText function to the button element
let changeTextButton = changeText.bind(buttonElement, "New Text");

buttonElement.addEventListener("click", changeTextButton);