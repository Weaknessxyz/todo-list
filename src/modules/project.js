export default class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = [];
    }

    setProjectName(newProjectName) {
        this.projectName = newProjectName;
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