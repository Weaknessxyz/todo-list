class Task {
    constructor(taskName, dueDate, description) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.description = description;
    }

    setTaskName(newName) {
        this.taskName = newName;
    }

    setDueDate(newDate) {
        this.dueDate = newDate;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }
}