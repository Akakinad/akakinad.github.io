// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
                // Update active class
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Load and render project cards
    loadProjects();
});

function loadProjects() {
    fetch('data/projects.json')
        .then(resp => resp.json())
        .then(projects => {
            const grid = document.getElementById('projects-grid');
            if (!grid) return;
            projects.forEach(p => {
                const card = document.createElement('div');
                card.className = 'project-card fade-in-up';
                card.innerHTML = `
                    <img src="${p.thumbnail}" alt="${p.title} thumbnail" class="project-thumb" />
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.shortDescription}</p>
                    <div class="project-tech">
                        ${p.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${p.liveDemoUrl}" target="_blank" class="project-link">Live Demo</a>
                        <a href="${p.repoUrl}" target="_blank" class="project-link">GitHub</a>
                    </div>
                `;
                grid.appendChild(card);
            });
        })
        .catch(err => console.error('Failed to load projects:', err));
}

// IntersectionObserver for fade‑in animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section, .project-card').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
                // Update active class
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Load projects and init animations
    loadProjects();
    initScrollAnimations();
});
