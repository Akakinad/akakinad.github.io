
// Embedded projects data – works without a server
const projects = [
  {
    "title": "Berlin Property Intelligence",
    "shortDescription": "Predict Berlin property prices using XGBoost and Random Forest on 57,000+ data points, achieving R²=0.87.",
    "technologies": ["Python", "XGBoost", "Random Forest", "GeoPandas"],
    "category": "Machine Learning",
    "liveDemoUrl": "#",
    "repoUrl": "https://github.com/Akakinad/berlin-property-intelligence",
    "thumbnail": "assets/img/projects/berlin-property.svg"
  },
  {
    "title": "TravelTide Customer Segmentation",
    "shortDescription": "Segment travelers into 5 groups using K‑Means and PCA, visualized with Streamlit.",
    "technologies": ["Python", "K-Means", "PCA", "SQL", "Streamlit"],
    "category": "Machine Learning",
    "liveDemoUrl": "https://traveltide-customer-segmentation-ak.streamlit.app",
    "repoUrl": "#",
    "thumbnail": "assets/img/projects/traveltide.svg"
  },
  {
    "title": "Currency Forecasting",
    "shortDescription": "Forecast SGD/USD and CNY/USD exchange rates with LSTM ensemble models.",
    "technologies": ["Python", "LSTM", "Ensemble Models", "Streamlit"],
    "category": "Machine Learning",
    "liveDemoUrl": "https://currency-forecasting-ak.streamlit.app",
    "repoUrl": "#",
    "thumbnail": "assets/img/projects/currency-forecast.svg"
  },
  {
    "title": "Restaurant Sentiment Analysis",
    "shortDescription": "Classify restaurant reviews sentiment with SVM, achieving 84.5% accuracy.",
    "technologies": ["Python", "SVM", "NLP", "Streamlit"],
    "category": "Machine Learning",
    "liveDemoUrl": "https://restaurant-sentiment-analysis-ak.streamlit.app",
    "repoUrl": "#",
    "thumbnail": "assets/img/projects/restaurant-sentiment.svg"
  },
  {
    "title": "E‑commerce Delivery Prediction",
    "shortDescription": "Predict delivery success using Random Forest, achieving 67% recall.",
    "technologies": ["Python", "Random Forest", "Streamlit"],
    "category": "Machine Learning",
    "liveDemoUrl": "https://ecommerce-delivery-prediction-ak.streamlit.app",
    "repoUrl": "#",
    "thumbnail": "assets/img/projects/ecommerce-delivery.svg"
  },
        {
            "title": "Flower Classification",
            "shortDescription": "Classify flower species with MobileNetV2 (53.93% accuracy), containerized with Docker and deployed on Render.",
            "technologies": ["Python", "MobileNetV2", "Docker", "Render"],
            "category": "Machine Learning",
            "liveDemoUrl": "https://flower-classification-gcf4.onrender.com/docs",
            "repoUrl": "https://github.com/akakinad",
            "thumbnail": "assets/img/projects/flower-classification.svg"
        },
        {
            "title": "Logstash DevOps Automation",
            "shortDescription": "Enterprise‑grade Logstash deployment using Infrastructure as Code with Terraform and Ansible.",
            "technologies": ["Terraform", "Ansible", "AWS", "DevOps"],
            "category": "Machine Learning",
            "liveDemoUrl": "",
            "repoUrl": "https://github.com/Akakinad/akakinad-logstash-deployment",
            "thumbnail": "assets/img/projects/logstash.svg"
        },
  {
    "title": "Car Price Prediction",
    "shortDescription": "Predict used car prices with XGBoost (93.2% accuracy) and expose via Flask API.",
    "technologies": ["Python", "XGBoost", "Flask"],
    "category": "Machine Learning",
    "liveDemoUrl": "#",
    "repoUrl": "#",
    "thumbnail": "assets/img/projects/car-price.svg"
  }
];

function loadProjects() {
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
