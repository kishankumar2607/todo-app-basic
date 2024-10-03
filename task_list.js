"use strict";

$(document).ready(() => {
    // Array to store the list of tasks
    const tasks = [];

    $("#add_task").click(() => {
        const textbox = $("#task");
        const task = textbox.val();

        // Check if the input is empty
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // Split the tasks by comma and trim each task
            const newTasks = task.split(",").map(t => t.trim());

            // Loop through the array of new tasks and add each to the tasks array
            newTasks.forEach(newTask => {
                if (newTask !== "") {
                    tasks.push(newTask);
                }
            });

            // Clear the input box after adding tasks
            textbox.val("");
            $("#task_list").val(tasks.join("\n"));
            textbox.focus();
        }
    });

    $("#clear_tasks").click(() => {
        tasks.length = 0;
        $("#task_list").val("");
        $("#task").focus();
    });

    $("#task").focus();
});
