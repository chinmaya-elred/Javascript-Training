function addItem() {
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    if (item && quantity) {
        const itemList = document.getElementById('itemList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item}</span>
            <span>${quantity}</span>
            <button onclick="deleteItem(this)">Delete</button>
        `;
        itemList.appendChild(li);

        document.getElementById('item').value = '';
        document.getElementById('quantity').value = '';
    }
}

function deleteItem(element) {
    const li = element.parentElement;
    li.remove();
}
