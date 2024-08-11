const newTaskInput = document.getElementById('newTask');
const addBtn = document.getElementById('addBtn');
const tasklist = document.getElementById('tasklist');

function addTask() {
    const newTaskText = newTaskInput.value;
    newTaskInput.value = '';

    const listItem = document.createElement('li');
    const completeCheckbox = document.createElement('input');
    const taskText = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    completeCheckbox.type = 'checkbox';

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(taskText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    taskText.textContent = newTaskText;
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';

    tasklist.appendChild(listItem);

    deleteBtn.addEventListener('click', function () {
        tasklist.removeChild(listItem);
    });

    editBtn.addEventListener('click', function () {
        const currentText = taskText.textContent;
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = currentText;

        listItem.replaceChild(editInput, taskText);
        editBtn.textContent = 'Save';

        editBtn.addEventListener('click', function saveEdit() {
            taskText.textContent = editInput.value;
            listItem.replaceChild(taskText, editInput);
            editBtn.textContent = 'Edit';
            editBtn.removeEventListener('click', saveEdit);
            editBtn.addEventListener('click', editTask);
        }, { once: true });
    });

    function editTask() {
        const currentText = taskText.textContent;
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = currentText;

        listItem.replaceChild(editInput, taskText);
        editBtn.textContent = 'Save';

        editBtn.addEventListener('click', function saveEdit() {
            taskText.textContent = editInput.value;
            listItem.replaceChild(taskText, editInput);
            editBtn.textContent = 'Edit';
            editBtn.removeEventListener('click', saveEdit);
            editBtn.addEventListener('click', editTask);
        }, { once: true });
    }
}

addBtn.addEventListener('click', addTask);
