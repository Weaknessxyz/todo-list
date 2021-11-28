class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks
            .push(task);
    }

    removeTask(task) {
        let index = tasks.indexOf(task);
        
    }

    setProjectName(newProjectName) {
        this.projectName = newProjectName;
    }
}