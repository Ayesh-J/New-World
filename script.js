document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");

    // Add to task list
    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        
        if (taskText) {
            const taskItem = document.createElement("li");

            // Create task text
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;
            taskItem.appendChild(taskSpan);

            // Create delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");
            taskItem.appendChild(deleteButton);

            // Toggle task completion
            taskItem.addEventListener("click", () => {
                taskItem.classList.toggle("completed"); // Note: 'completed' should be lowercase
            });

            // Delete task
            deleteButton.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent the click from toggling completion
                taskItem.remove();
            });

            // Append the new task item to the list
            taskList.appendChild(taskItem);

            // Clear the input after adding a task
            taskInput.value = "";
        }
    });

    // Optionally, allow pressing Enter to add a task
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addButton.click();
        }
    });
});
