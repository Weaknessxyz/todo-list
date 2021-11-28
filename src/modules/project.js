export default class Project {
    constructor(projectName, description) {
        this.projectName = projectName;
        this.description = description;
        this.tasks = [];
    }

    setProjectName(newProjectName) {
        this.projectName = newProjectName;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    addTask(task) {
        this.tasks
            .push(task);
    }

    removeTask(index) {
        this.tasks
            .splice(index, 1);
    }
}