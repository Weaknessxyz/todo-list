export default class Task {
    constructor(taskName, dueDate, description, priority) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
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

    setPriority(newPriority) {
        this.priority = newPriority
    }
}