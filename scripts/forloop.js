document.addEventListener('DOMContentLoaded', function() {
    const outputDiv = document.getElementById('outputFor');
    
    for(let i = 1; i <= 5; i++) {
        setTimeout(function() {
            const newElement = document.createElement('p');
            newElement.textContent = `Number ${i}`;
            outputDiv.appendChild(newElement);
            
            if (i === 5) {
                // showAlert();
            }
        }, i * 1000);
    }
    
});