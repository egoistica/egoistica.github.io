function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    const projectsHTML = projects.map(project => `
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${project.image}" alt="${project.title}">
                </div>
                <div class="card-content">
                    <span class="card-title activator white-text">
                        ${project.title}
                        <i class="bi bi-three-dots-vertical right white-text"></i>
                    </span>
                    <div class="card-technologies">
                        ${project.technologies.map(tech => 
                            `<span class="chip">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="card-reveal">
                    <span class="card-title white-text">
                        ${project.title}
                        <i class="bi bi-x right white-text"></i>
                    </span>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn waves-effect waves-light">
                        Посмотреть проект
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    projectsContainer.innerHTML = projectsHTML;
} 