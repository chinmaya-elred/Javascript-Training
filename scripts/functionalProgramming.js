const addProduct = (event) => {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    
    if (productName && !isNaN(productPrice)) {
        const productList = document.getElementById('productList');
        const li = document.createElement('li');
        li.textContent = `${productName} - $${productPrice.toFixed(2)}`;
        productList.appendChild(li);

        const totalPrice = Array.from(productList.children)
            .map(item => parseFloat(item.textContent.match(/\d+\.\d{2}/)[0]))
            .reduce((acc, price) => acc + price, 0);
        document.getElementById('totalPrice').textContent = `Total Price: $${totalPrice.toFixed(2)}`;

        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
    }
};

document.getElementById('addProductForm').addEventListener('submit', addProduct);
