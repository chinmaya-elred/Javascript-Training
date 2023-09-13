function showModal() {
    let user = {
        firstName: "Jane",
        lastName: "Doe",
        age: 25,
        email: "jane@example.com",
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            postalCode: "12345"
        },
        hobbies: ["reading", "painting", "traveling"],
        isAdmin: false,
        sayHello: function() {
            return `Hello, my name is ${this.firstName} ${this.lastName}.`;
        }
    };

    let userDetails = `
        Name: ${user.firstName} ${user.lastName}<br>
        Age: ${user.age}<br>
        Email: ${user.email}<br>
        Address: ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}<br>
        Hobbies: ${user.hobbies.join(", ")}<br>
        Admin: ${user.isAdmin ? "Yes" : "No"}
    `;

    document.getElementById('userDetails').innerHTML = userDetails;
    document.getElementById('userModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('userModal').style.display = 'none';
}