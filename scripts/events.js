document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('myElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});

window.addEventListener('load', function() {
    // alert('Page loaded!');
});

document.getElementById('myInput').addEventListener('change', function() {
    console.log('Value changed: ' + this.value);
});

document.getElementById('myInput').addEventListener('focus', function() {
    console.log('Input focused');
});

document.getElementById('myInput').addEventListener('blur', function() {
    console.log('Input blurred');
});

window.addEventListener('scroll', function() {
    console.log('Page scrolled');
});

window.addEventListener('resize', function() {
    console.log('Window resized');
});