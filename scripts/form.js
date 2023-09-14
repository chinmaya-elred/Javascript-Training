// 
document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let formOutput = document.getElementById("formOutput");

    formOutput.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `;
});