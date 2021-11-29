import './index.css';
import Project from './modules/project';
import Task from './modules/task';
import projectList from './modules/project-list';

let currentTask = null;
let currentProjectIndex = null;

projectList.addProject(new Project('Default'));
projectList.projects[0].addTask(new Task('Drink Water 5x A Day!', '2021-12-30', 'Getting enough water every day is important for your health. Drinking water can prevent dehydration, a condition that can cause unclear thinking, result in mood change, cause your body to overheat, and lead to constipation and kidney stones.', 10));
projectList.projects[0].addTask(new Task('Brush Your Teeth Twice A Day!', '2021-12-30', 'When you brush your teeth, you help remove food and plaque — a sticky white film that forms on your teeth and contains bacteria. After you eat a meal or snack that contains sugar, the bacteria in plaque produce acids that attack tooth enamel.', 9));
projectList.projects[0].addTask(new Task('Clean Your Room!', '2021-12-30', 'Did you know that a clean and tidy bedroom is the secret to happiness? Actually, no it’s not. But it definitely helps and contributes to a happy and healthy lifestyle!', 7));

displayProjects();

function displayProjects() {
    document.querySelector('.projects').lastChild.remove();
    const projectListParentNode = document.createElement('div');
    projectListParentNode.classList.add = 'project-list';
    document.querySelector('.projects').appendChild(projectListParentNode);

    for (let i = 0; i < projectList.projects.length; i++) {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        const taskAddWrapper = document.createElement('div');
        const taskAddBtn = document.createElement('span');
        const taskAddText = document.createElement('span');

        summary.classList.add('project-summary');
        taskAddWrapper.style.display = 'flex';
        taskAddWrapper.style.alignItems = 'center';
        taskAddText.style.marginLeft = '10px';
        taskAddText.style.fontSize = '20px';
        taskAddBtn.classList.add('add-button');
        taskAddBtn.classList.add('button');
        taskAddBtn.style.marginLeft = '20px';
        
        summary.textContent = projectList.projects[i].projectName;
        taskAddBtn.textContent = '+';
        taskAddText.textContent = 'Add Task';

        details.addEventListener('click', () => {
            document.querySelector('#project-name').textContent = projectList.projects[i].projectName;
            currentProjectIndex = i;
        });

        projectListParentNode.appendChild(details);
        details.appendChild(summary);
        
        for (let j = 0; j < projectList.projects[i].tasks.length; j++) {
            const task = document.createElement('span');
            task.style.marginLeft = '20px';

            task.textContent = projectList.projects[i].tasks[j].taskName + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + projectList.projects[i].tasks[j].priority;

            task.addEventListener('click', () => {
                currentTask !== null ? currentTask.classList.remove('highlighted') : currentTask = task;
                currentTask = task;
                currentProjectIndex = i;
                currentTask.classList.add('highlighted');
                document.querySelector('#project-name').textContent = projectList.projects[i].projectName;
                displayTask(i, j);
            });

            details.appendChild(task);
            details.appendChild(document.createElement('br'));
        }

        taskAddBtn.addEventListener('click', () => {
            displayTaskAddInterface(projectList.projects[i]);
        });

        details.appendChild(taskAddWrapper);
        taskAddWrapper.appendChild(taskAddBtn);
        taskAddWrapper.appendChild(taskAddText);
    }
}

function removeTask(projectIndex, taskIndex) {
    projectList.projects[projectIndex].removeTask(taskIndex);
    document.querySelector('.content-info').remove();
    displayProjects();
    const taskInfoWrapper = document.createElement('div');
    taskInfoWrapper.classList.add('content-info');
    document.querySelector('.content').appendChild(taskInfoWrapper);
}

function displayTask(projectIndex, taskIndex) {
    const task = projectList.projects[projectIndex].tasks[taskIndex];
    document.querySelector('.content-info').remove();

    const taskInfoWrapper = document.createElement('div');
    const taskInfoMain = document.createElement('div');
    const taskInfoTitle = document.createElement('span');
    const taskInfoDate = document.createElement('span');
    const taskInfoDesc = document.createElement('p');
    const taskCompleteWrapper = document.createElement('div')
    const taskCompleteText = document.createElement('span');
    const taskCompleteBtn = document.createElement('span');

    taskInfoWrapper.classList.add('content-info');
    taskInfoMain.classList.add('flex-task-info-title');
    taskCompleteWrapper.style.display = 'flex';
    taskCompleteWrapper.style.alignItems = 'center';
    taskCompleteBtn.classList.add('dot');

    taskInfoTitle.textContent = task.taskName + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + task.priority;
    taskInfoDate.textContent = `${Math.floor((Date.parse(task.dueDate) - Date.now()) / 1000 / 60 / 60 / 24)} days left`;
    taskInfoDesc.textContent = task.description;
    taskCompleteText.textContent = 'Completed'

    taskCompleteBtn.addEventListener('click', () => {
        removeTask(projectIndex, taskIndex);
    });

    document.querySelector('.content').appendChild(taskInfoWrapper);
    taskInfoWrapper.appendChild(taskInfoMain)
    taskInfoMain.appendChild(taskInfoTitle);
    taskInfoMain.appendChild(taskInfoDate);
    taskInfoWrapper.appendChild(taskInfoDesc);
    taskInfoWrapper.appendChild(taskCompleteWrapper);
    taskCompleteWrapper.appendChild(taskCompleteText);
    taskCompleteWrapper.appendChild(taskCompleteBtn);
}

function addTaskToProject(parentProject, taskName, dueDate, description, priority) {
    parentProject.addTask(new Task(taskName, dueDate, description, priority));
    document.querySelector('.content-info').remove();
    const taskInfoWrapper = document.createElement('div');
    taskInfoWrapper.classList.add('content-info');
    document.querySelector('.content').appendChild(taskInfoWrapper);
}

function displayTaskAddInterface(parentProject) {
    document.querySelector('.content-info').remove();
    document.querySelector('#project-name').textContent = parentProject.projectName;

    const taskAddInterfaceWrapper = document.createElement('div');
    const taskNameInfo = document.createElement('p');
    const taskNameInput = document.createElement('input');
    const taskDateInfo = document.createElement('p');
    const taskDateInput = document.createElement('input');
    const taskPriorityInfo = document.createElement('p');
    const taskPriorityInput = document.createElement('input');
    const taskDescriptionInfo = document.createElement('p');
    const taskDescriptionInput = document.createElement('textarea');
    const taskAddConfirmBtn = document.createElement('button');

    taskDateInput.type = 'date';
    taskDateInput.value = '2021-12-31';
    taskPriorityInput.type = 'range';
    taskPriorityInput.value = '5';
    taskPriorityInput.max = '10';
    taskPriorityInput.min = '1';

    taskNameInfo.textContent = 'Task Name:';
    taskDateInfo.textContent = 'Due Date:';
    taskPriorityInfo.textContent = `Priority: ${taskPriorityInput.value}`;
    taskDescriptionInfo.textContent = 'Additional Info:';
    taskAddConfirmBtn.textContent = 'Confirm'

    taskAddInterfaceWrapper.classList.add('content-info');
    taskAddInterfaceWrapper.style.textAlign = 'center';
    taskAddInterfaceWrapper.style.width = 'fit-content';
    taskNameInfo.classList.add('input-field-margin');
    taskNameInput.classList.add('input-field-width');
    taskDateInfo.classList.add('input-field-margin');
    taskDateInput.classList.add('input-field-width');
    taskPriorityInfo.classList.add('input-field-margin');
    taskPriorityInput.classList.add('input-field-width');
    taskDescriptionInfo.classList.add('input-field-margin');
    taskDescriptionInput.classList.add('input-field-width');
    taskDescriptionInput.style.height = '300px';
    taskDescriptionInput.style.resize = 'none';
    taskAddConfirmBtn.classList.add('input-field-margin');
    taskAddConfirmBtn.classList.add('confirm-button');

    taskPriorityInput.addEventListener('click', () => {
        taskPriorityInfo.textContent = `Priority: ${taskPriorityInput.value}`;
    });

    taskAddConfirmBtn.addEventListener('click', () => {
        if (!taskNameInput.value.trim()) {
            taskNameInput.style.border = '1px solid red';
            return;
        } else if (!taskDateInput.value.trim()) {
            taskDateInput.style.border = '1px solid red';
            return;
        }else {
            addTaskToProject(parentProject, taskNameInput.value, taskDateInput.value, taskDescriptionInput.value, taskPriorityInput.value);
            displayProjects();
        }
    });

    document.querySelector('.content').appendChild(taskAddInterfaceWrapper);
    taskAddInterfaceWrapper.appendChild(taskNameInfo);
    taskAddInterfaceWrapper.appendChild(taskNameInput);
    taskAddInterfaceWrapper.appendChild(taskDateInfo);
    taskAddInterfaceWrapper.appendChild(taskDateInput);
    taskAddInterfaceWrapper.appendChild(taskPriorityInfo);
    taskAddInterfaceWrapper.appendChild(taskPriorityInput);
    taskAddInterfaceWrapper.appendChild(taskDescriptionInfo);
    taskAddInterfaceWrapper.appendChild(taskDescriptionInput);
    taskAddInterfaceWrapper.appendChild(document.createElement('br'));
    taskAddInterfaceWrapper.appendChild(taskAddConfirmBtn);
}

(function addProjectAddBtn(){
    const projectAddBtn = document.querySelector('#project-add-btn');
    projectAddBtn.addEventListener('click', () => {
        displayProjectAddInterface();
    });
})();

(function addProjectDeleteBtn(){
    const projectDeleteBtn = document.querySelector('#delete-btn');
    projectDeleteBtn.addEventListener('click', () => {
        document.querySelector('.content-info').remove();
        const taskInfoWrapper = document.createElement('div');
        taskInfoWrapper.classList.add('content-info');
        document.querySelector('.content').appendChild(taskInfoWrapper);
        projectList.removeProject(currentProjectIndex);
        document.querySelector('#project-name').textContent = '';
        displayProjects();
    });
})();

function addProjectToProjectList(projectName) {
    projectList.addProject(new Project(projectName));
}

function displayProjectAddInterface() {
    document.querySelector('.content-info').remove();
    document.querySelector('#project-name').textContent = '';

    const projectAddInterfaceWrapper = document.createElement('div');
    const projectNameInfo = document.createElement('p');
    const projectNameInput = document.createElement('input');
    const projectAddConfirmBtn = document.createElement('button');

    projectNameInfo.textContent = 'Project Name:';
    projectAddConfirmBtn.textContent = 'Confirm';

    projectAddInterfaceWrapper.classList.add('content-info');
    projectAddInterfaceWrapper.style.textAlign = 'center';
    projectAddInterfaceWrapper.style.width = 'fit-content';

    projectNameInfo.classList.add('input-field-margin');
    projectNameInput.classList.add('input-field-width');
    projectAddConfirmBtn.classList.add('input-field-margin');
    projectAddConfirmBtn.classList.add('confirm-button');

    projectAddConfirmBtn.addEventListener('click', () => {
        if (projectNameInput.value.trim() === '') {
            projectNameInput.style.border = '1px solid red';
            return;
        } else {
            addProjectToProjectList(projectNameInput.value);
            displayProjects();
        }
    });

    document.querySelector('.content').appendChild(projectAddInterfaceWrapper);
    projectAddInterfaceWrapper.appendChild(projectNameInfo);
    projectAddInterfaceWrapper.appendChild(projectNameInput);
    projectAddInterfaceWrapper.appendChild(document.createElement('br'));
    projectAddInterfaceWrapper.appendChild(projectAddConfirmBtn);
}