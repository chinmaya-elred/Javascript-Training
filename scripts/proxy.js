const targetObject = {
    name: 'John Doe',
    age: 30
};

// Create a Proxy with a get trap
const proxy = new Proxy(targetObject, {
    get: function(target, property) {
        alert(`Getting property "${property}"`);
        return target[property];
    }
});

// Add a click event listener to the button
document.getElementById('myButtonProxy').addEventListener('click', () => {
    // Access properties through the Proxy
    alert(proxy.name);
    alert(proxy.age);
});