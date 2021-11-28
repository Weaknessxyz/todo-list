export default (function() {
    let projects = [];
    
    const addProject = (project) => {
        projects.push(project);
    }

    const removeProject = (index) => {
        projects.splice(index, 1);
    }

    return {
        addProject,
        removeProject,
        projects,
    }
})();