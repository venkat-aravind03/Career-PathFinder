// Authentication state
let isSignUp = false;
let currentSection = 'domains';
let selectedCompany = null;

// Toggle between Sign Up and Sign In modes
function toggleAuthMode() {
    isSignUp = !isSignUp;
    const nameGroup = document.querySelector('.name-group');
    const authTitle = document.getElementById('auth-title');
    const authButton = document.getElementById('auth-button');
    const toggleButton = document.querySelector('.left-section button');

    if (isSignUp) {
        nameGroup.style.display = 'block';
        authTitle.textContent = 'Create Account';
        authButton.textContent = 'Sign Up';
        toggleButton.textContent = 'Sign In Instead';
    } else {
        nameGroup.style.display = 'none';
        authTitle.textContent = 'Sign In';
        authButton.textContent = 'Sign In';
        toggleButton.textContent = 'Create Account';
    }
}

// Handle authentication form submission
function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
        initializeApp();
    }
}

// Handle logout
function logout() {
    document.getElementById('auth-container').style.display = 'flex';
    document.getElementById('app').style.display = 'none';
    document.getElementById('auth-form').reset();
    isSignUp = false;
    toggleAuthMode();
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Show different sections
function showSection(sectionName) {
    currentSection = sectionName;
    
    // Hide all sections
    document.getElementById('domains-section').style.display = 'none';
    document.getElementById('interviews-section').style.display = 'none';
    
    // Show selected section
    document.getElementById(`${sectionName}-section`).style.display = 'block';
    
    // Update active button
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(sectionName)) {
            btn.classList.add('active');
        }
    });

    // Reset interview questions view
    if (sectionName === 'interviews') {
        showCompanies();
    }
}

// Create domain card
function createDomainCard(domain) {
    const card = document.createElement('div');
    card.className = 'domain-card';
    
    card.innerHTML = `
        <div class="domain-icon">
            <i class="fas ${domain.icon}"></i>
        </div>
        <h3 class="domain-title">${domain.title}</h3>
        <p class="domain-description">${domain.description}</p>
        <div class="roadmap">
            <h4>Roadmap:</h4>
            <ul>
                ${domain.roadmap.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return card;
}

// Create company card
function createCompanyCard(company) {
    const card = document.createElement('div');
    card.className = 'company-card';
    
    card.innerHTML = `
        <div class="company-icon">
            <i class="fas ${company.icon}"></i>
        </div>
        <h3>${company.name}</h3>
    `;
    
    card.addEventListener('click', () => showQuestions(company));
    
    return card;
}

// Show companies grid
function showCompanies() {
    const companiesGrid = document.getElementById('companies-grid');
    const questionsList = document.getElementById('questions-list');
    
    companiesGrid.style.display = 'grid';
    questionsList.style.display = 'none';
    
    companiesGrid.innerHTML = '';
    companies.forEach(company => {
        companiesGrid.appendChild(createCompanyCard(company));
    });
}

// Show questions for selected company
function showQuestions(company) {
    const companiesGrid = document.getElementById('companies-grid');
    const questionsList = document.getElementById('questions-list');
    
    companiesGrid.style.display = 'none';
    questionsList.style.display = 'block';
    
    questionsList.innerHTML = `
        <div class="questions-header">
            <button onclick="showCompanies()" class="back-btn">
                <i class="fas fa-arrow-left"></i> Back to Companies
            </button>
            <h2>${company.name} Questions</h2>
        </div>
        <div class="questions-container">
            ${company.questions.map((q, index) => `
                <div class="question-item">
                    <span>${index + 1}. ${q.title}</span>
                    <a href="${q.url}" target="_blank">Solve <i class="fas fa-external-link-alt"></i></a>
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize the application
function initializeApp() {
    // Populate domains
    const domainsGrid = document.getElementById('domains-grid');
    domains.forEach(domain => {
        domainsGrid.appendChild(createDomainCard(domain));
    });
    
    // Show initial section
    showSection('domains');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial auth mode
    toggleAuthMode();
});