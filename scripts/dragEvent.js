const draggableElement = document.getElementById('draggableElement');
const dropTarget = document.getElementById('dropTarget');

draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'Dragged Element');
});

draggableElement.addEventListener('drag', function(event) {
    console.log('Element is being dragged');
});

draggableElement.addEventListener('dragend', function(event) {
    console.log('Dragging ended');
});

dropTarget.addEventListener('dragover', function(event) {
    event.preventDefault(); 
    console.log('Element is over the drop target');
});

dropTarget.addEventListener('drop', function(event) {
    event.preventDefault();
    const draggedData = event.dataTransfer.getData('text/plain');
    console.log('Element dropped. Data: ' + draggedData);
});