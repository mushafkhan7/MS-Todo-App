Sure, here's the updated markdown file with your JavaScript code included:

```markdown
# MS-Todo App

This is a simple MS-Todo web application.

## Features

- Add new tasks with various attributes such as description, due date, priority, category, and time estimate.
- Search existing tasks.
- Add subtasks to existing tasks.

## Technologies Used

- HTML
- CSS
- JavaScript

## Screenshots

Include screenshots here if applicable.

## Usage

1. Clone the repository.
2. Open `index.html` in your web browser.

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MS-Todo App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header>
            <img src="logo.jpeg" alt="Logo" class="logo">
            <h1>MS-Todo App</h1>
            <input type="text" id="search" placeholder="Search tasks...">
        </header>
        <main>
            <section class="task-input">
                <input type="text" id="new-task" placeholder="Task Description">
                <input type="date" id="due-date">
                <select id="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <input type="text" id="category" placeholder="Category">
                <input type="text" id="time-estimate" placeholder="Time Estimate (hrs)">
                <button id="add-task">Add Task</button>
            </section>
            <section class="task-list">
                <ul id="tasks">
                    <!-- Task items will go here -->
                </ul>
            </section>
        </main>
    </div>

    <!-- Modal for adding subtasks -->
    <div id="subtask-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Add Subtask</h2>
            <input type="text" id="subtask-input" placeholder="Subtask Description">
            <button id="add-subtask-btn">Add Subtask</button>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
```

## CSS

```css
body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    margin: 0;
    padding: 0;
}

/* Include your CSS styles here */

```

## JavaScript

```javascript
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

    // Your JavaScript code goes here
});
```
