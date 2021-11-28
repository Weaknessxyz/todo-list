import './index.css';
import Project from './modules/project';
import Task from './modules/task';
import projectList from './modules/project-list';



projectList.addProject(new Project('muhammend'));
projectList.addProject(new Project('muhammaaaaend'));
projectList.addProject(new Project('muhammeasdnd'));

projectList.projects[0].addTask(new Task('mathis', '23.23.23', 'im lovin it', '10'));
projectList.projects[1].addTask(new Task('mathis', '23.23.23', 'im lovin it', '10'));
projectList.projects[2].addTask(new Task('mathis', '23.23.23', 'im lovin it', '10'));

displayProjects();

let currentTask = null;

function displayProjects() {
    let projectListParentNode = document.querySelector('.project-list');

    for (let i = 0; i < projectList.projects.length; i++) {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        const taskAddBtn = document.createElement('span');

        summary.classList.add('project-summary');
        taskAddBtn.classList.add('add-button');
        taskAddBtn.classList.add('button');
        
        taskAddBtn.textContent = '+';
        summary.textContent = projectList.projects[i].projectName;

        projectListParentNode.appendChild(details);
        details.appendChild(summary);
        
        for (let j = 0; j < projectList.projects[i].tasks.length; j++) {
            const task = document.createElement('span');

            task.textContent = projectList.projects[i].tasks[j].taskName + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + projectList.projects[i].tasks[j].priority;

            task.addEventListener('click', () => {
                currentTask !== null ? currentTask.classList.remove('highlighted') : currentTask = task;
                currentTask = task;
                currentTask.classList.add('highlighted');
                document.querySelector('#project-name').textContent = currentTask.parentNode.firstChild.textContent;
                displayTask(projectList.projects[i].tasks[j]);
            });

            details.appendChild(task);
            details.appendChild(document.createElement('br'));
        }

        taskAddBtn.addEventListener('click', () => {
            displayTaskAddInterface(projectList.projects[i]);
        });

        details.appendChild(taskAddBtn)
    }
}

function displayTask(task) {
    document.querySelector('.content-info').remove();

    const taskInfo = document.createElement('div');
    const taskInfoMain = document.createElement('div');
    const taskInfoTitle = document.createElement('span');
    const taskInfoDate = document.createElement('span');
    const taskInfoDesc = document.createElement('p')

    taskInfo.classList.add('content-info');
    taskInfoMain.classList.add('flex-task-info-title')

    taskInfoTitle.textContent = task.taskName;
    taskInfoDate.textContent = task.dueDate;
    taskInfoDesc.textContent = task.description;

    document.querySelector('.content').appendChild(taskInfo);

    taskInfo.appendChild(taskInfoMain);
    taskInfo.appendChild(taskInfoDesc);
    taskInfoMain.appendChild(taskInfoTitle);
    taskInfoMain.appendChild(taskInfoDate);

}

function displayTaskAddInterface(parentProject) {
    document.querySelector('.content-info').remove();

}

function addTask(parentProject) {
    
}


(function addProjectAddBtn(){
    const projectAddBtn = document.querySelector('#projectAddBtn');
    projectAddBtn.addEventListener('click', () => {
        displayProjectAddInterface();
    });
})();

function displayProjectAddInterface() {
    document.querySelector('.content-info').remove();


}


function addProject(parentProject) {

}