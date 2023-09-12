function addTask() {
    var task = document.getElementById('task').value;
    if (task.trim() !== '') {
        var ul = document.getElementById('taskList');
        var li = document.createElement('li');
        li.textContent = task;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            alert('Todo deleted Successfully')
            ul.removeChild(li);
        }

        li.appendChild(deleteButton);
        ul.appendChild(li);
        document.getElementById('task').value = '';
    }
}