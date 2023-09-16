let myObject = {
    name: "John Doe",
    age: 30
};


document.getElementById("addProperty").addEventListener("click", function() {
    // Add a new property
    myObject.email = "john@example.com";
    alert("Added Property - Email: " + myObject.email);
});

// Function to handle modifying a property
document.getElementById("modifyProperty").addEventListener("click", function() {
    // Modify an existing property
    myObject.age = 31;
    alert("Modified Property - Age: " + myObject.age);
});

// Function to handle deleting a property
document.getElementById("deleteProperty").addEventListener("click", function() {
    // Delete a property
    delete myObject.age;
    alert("Deleted Property - Age: " + myObject.age);
});

function destructuringExample() {
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
    };

    const { firstName, lastName } = person;

    alert(`First Name: ${firstName}, Last Name: ${lastName}`);
}

function assignExample() {
    const source = {
        a: 1,
        b: 2,
        c: 3
    };

    const target = {
        b: 4,
        c: 5,
        d: 6
    };

    Object.assign(target, source);

    alert(JSON.stringify(target));
}

document.getElementById("clickMeObject").addEventListener("click", function() {
    alert("Name: " + myObject.name + ", Age: " + myObject.age);
});

