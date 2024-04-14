const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
        setupTaskButtons(li);
    }
}

function setupTaskButtons(li) {
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent = '✕';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    const completeButton = document.createElement('span');
    completeButton.classList.add('complete');
    completeButton.textContent = '✔';
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            taskList.appendChild(li); // Move completed task to the bottom
            completeButton.textContent = '✎'; // Change symbol to edit
            completeButton.classList.remove('complete');
            completeButton.classList.add('edit');
            completeButton.addEventListener('click', () => {
                // Your edit functionality here
                // For example, you can allow users to edit the task text
            });
        } else {
            completeButton.textContent = '✔'; // Change back to tick symbol
            completeButton.classList.remove('edit');
            completeButton.classList.add('complete');
        }
    });

    li.appendChild(deleteButton);
    li.appendChild(completeButton);
}


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

