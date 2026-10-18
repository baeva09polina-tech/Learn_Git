/**
 * Initializes the To-Do List application.
 * - Loads tasks from local storage.
 * - Sets up event listeners for adding and deleting tasks.
 */
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    /**
     * Loads tasks from the browser's local storage and populates the task list.
     */
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));
    };

    /**
     * Saves the current tasks in the task list to the browser's local storage.
     */
    const saveTasks = () => {
        const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    /**
     * Adds a task to the DOM.
     * @param {string} task - The task to be added.
     */
    const addTaskToDOM = (task) => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    };

    /**
     * Event handler for adding a new task.
     * - Validates the input.
     * - Adds the task to the DOM and saves it to local storage.
     */
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTaskToDOM(task);
            saveTasks();
            taskInput.value = '';
        }
    });

    // Initialize the application by loading tasks.
    loadTasks();
});