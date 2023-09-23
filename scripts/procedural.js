function showMessage() {
    const outputDiv = document.getElementById('outputProcedural');
    outputDiv.innerText = 'Button Clicked!';
}

const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', showMessage);
