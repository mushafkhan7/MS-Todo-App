document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const timeEstimateInput = document.getElementById('time-estimate');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');
    const searchInput = document.getElementById('search');

    const subtaskModal = document.getElementById('subtask-modal');
    const subtaskInput = document.getElementById('subtask-input');
    const addSubtaskButton = document.getElementById('add-subtask-btn');
    let currentTaskElement = null;

    addTaskButton.addEventListener('click', () => {
        const taskDescription = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const category = categoryInput.value;
        const timeEstimate = timeEstimateInput.value;

        if (taskDescription) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <div class="task-details">
                    <span>${taskDescription} (Due: ${dueDate}) [${priority}] - ${category} - ${timeEstimate} Hours</span>
                    <button class="add-subtask">Add Subtask</button>
                    <button class="add-note">Add Note</button>
                </div>
                <div class="task-actions">
                    <button class="complete-task">Complete</button>
                    <button class="delete-task">Delete</button>
                </div>
                <ul class="subtasks"></ul>
            `;

            const addSubtaskButton = taskItem.querySelector('.add-subtask');
            const addNoteButton = taskItem.querySelector('.add-note');
            const completeTaskButton = taskItem.querySelector('.complete-task');
            const deleteTaskButton = taskItem.querySelector('.delete-task');

            addSubtaskButton.addEventListener('click', () => {
                currentTaskElement = taskItem;
                subtaskModal.style.display = 'block';
            });

            addNoteButton.addEventListener('click', () => {
                const note = prompt('Enter note:');
                if (note) {
                    const noteElement = document.createElement('div');
                    noteElement.textContent = `Note: ${note}`;
                    taskItem.appendChild(noteElement);
                }
            });

            completeTaskButton.addEventListener('click', () => {
                taskItem.classList.toggle('complete');
            });

            deleteTaskButton.addEventListener('click', () => {
                taskItem.remove();
            });

            tasksList.appendChild(taskItem);

            // Clear input fields
            taskInput.value = '';
            dueDateInput.value = '';
            prioritySelect.value = 'medium';
            categoryInput.value = '';
            timeEstimateInput.value = '';
        }
    });

    // Add subtask modal logic
    document.querySelector('.close').addEventListener('click', () => {
        subtaskModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == subtaskModal) {
            subtaskModal.style.display = 'none';
        }
    });

    addSubtaskButton.addEventListener('click', () => {
        const subtaskDescription = subtaskInput.value;
        if (subtaskDescription && currentTaskElement) {
            const subtaskItem = document.createElement('li');
            subtaskItem.textContent = subtaskDescription;
            currentTaskElement.querySelector('.subtasks').appendChild(subtaskItem);
            subtaskInput.value = '';
            subtaskModal.style.display = 'none';
        }
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll('.task-list li').forEach(task => {
            const taskText = task.querySelector('.task-details span').textContent.toLowerCase();
            if (taskText.includes(query)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    });
});
