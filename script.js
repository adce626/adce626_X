// Global Variables
let currentFilter = 'all';
let currentPage = 1;
const toolsPerPage = 12;
let filteredTools = [...bugBountyTools];
let searchQuery = '';

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const filterButtons = document.querySelectorAll('.filter-btn');
const toolsGrid = document.getElementById('tools-grid');
const categoriesGrid = document.getElementById('categories-grid');
const loadMoreBtn = document.getElementById('load-more');
const backToTopBtn = document.getElementById('back-to-top');
const particles = document.getElementById('particles');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after a delay
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2000);

    // Initialize components
    initializeParticles();
    initializeNavigation();
    initializeCounters();
    initializeSearch();
    initializeFilters();
    initializeScrollEffects();
    renderCategories();
    renderTools();
    
    // Add event listeners
    setupEventListeners();
});

// Initialize floating particles
function initializeParticles() {
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particles.appendChild(particle);
}

// Initialize navigation
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`[data-section="${id}"]`);

        if (scrollPos >= top && scrollPos <= bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });

    // Show/hide navbar background based on scroll
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
}

// Initialize animated counters
function initializeCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };

    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    statNumbers.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Initialize search functionality
function initializeSearch() {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', handleSearchKeydown);
    searchClear.addEventListener('click', clearSearch);
    
    // Add search suggestions
    createSearchSuggestions();
}

function handleSearch() {
    searchQuery = searchInput.value.toLowerCase().trim();
    
    if (searchQuery) {
        searchClear.classList.add('show');
        filterTools();
    } else {
        searchClear.classList.remove('show');
        filterTools();
    }
}

function handleSearchKeydown(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchInput.blur();
    }
    if (e.key === 'Escape') {
        clearSearch();
    }
}

function clearSearch() {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('show');
    filterTools();
    searchInput.focus();
}

function createSearchSuggestions() {
    // This function creates search suggestions (implementation can be expanded)
    console.log('Search suggestions initialized');
}

// Initialize filter functionality
function initializeFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current filter
            currentFilter = button.getAttribute('data-category');
            currentPage = 1;
            
            // Filter and render tools
            filterTools();
        });
    });
}

// Filter tools based on search and category
function filterTools() {
    filteredTools = bugBountyTools.filter(tool => {
        const matchesSearch = !searchQuery || 
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.description.toLowerCase().includes(searchQuery) ||
            tool.category.toLowerCase().includes(searchQuery);
        
        const matchesCategory = currentFilter === 'all' || tool.category === currentFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    currentPage = 1;
    renderTools();
}

// Initialize scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Show/hide back to top button
        if (scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll indicator click
    document.querySelector('.scroll-arrow').addEventListener('click', () => {
        document.querySelector('.search-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Setup additional event listeners
function setupEventListeners() {
    // Load more tools
    loadMoreBtn.addEventListener('click', loadMoreTools);
    
    // Category cards click
    document.addEventListener('click', (e) => {
        let categoryCard = null;
        let target = e.target;
        
        // Traverse up the DOM to find category card
        while (target && target !== document) {
            if (target.classList && target.classList.contains('category-card')) {
                categoryCard = target;
                break;
            }
            target = target.parentNode;
        }
        
        if (categoryCard) {
            const categoryKey = categoryCard.getAttribute('data-category');
            
            // Update filter
            currentFilter = categoryKey;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const targetBtn = document.querySelector(`[data-category="${categoryKey}"]`);
            if (targetBtn) targetBtn.classList.add('active');
            
            // Scroll to tools section and filter
            document.querySelector('.tools-section').scrollIntoView({
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                filterTools();
            }, 500);
        }
    });

    // Tool card animations
    document.addEventListener('mouseenter', (e) => {
        let toolCard = null;
        let target = e.target;
        
        // Traverse up the DOM to find tool card
        while (target && target !== document) {
            if (target.classList && target.classList.contains('tool-card')) {
                toolCard = target;
                break;
            }
            target = target.parentNode;
        }
        
        if (toolCard) {
            toolCard.style.transform = 'translateY(-10px)';
        }
    }, true);

    document.addEventListener('mouseleave', (e) => {
        let toolCard = null;
        let target = e.target;
        
        // Traverse up the DOM to find tool card
        while (target && target !== document) {
            if (target.classList && target.classList.contains('tool-card')) {
                toolCard = target;
                break;
            }
            target = target.parentNode;
        }
        
        if (toolCard) {
            toolCard.style.transform = 'translateY(-5px)';
        }
    }, true);
}

// Render categories
function renderCategories() {
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = categories.map(category => {
        const toolCount = bugBountyTools.filter(tool => tool.category === category.key).length;
        
        return `
            <div class="category-card" data-category="${category.key}">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <div class="category-info">
                    <h3 class="category-name">${category.name}</h3>
                    <p class="category-count">${toolCount} tools available</p>
                    <p class="category-description">${category.description}</p>
                </div>
                <div class="category-stats">
                    <span class="popularity-indicator">
                        <i class="fas fa-fire"></i>
                        ${Math.floor(Math.random() * 95) + 5}%
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// Render tools
function renderTools() {
    if (!toolsGrid) return;
    
    const startIndex = 0;
    const endIndex = currentPage * toolsPerPage;
    const toolsToShow = filteredTools.slice(startIndex, endIndex);
    
    if (toolsToShow.length === 0) {
        toolsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-secondary); margin-bottom: 0.5rem;">No tools found</h3>
                <p style="color: var(--text-muted);">Try adjusting your search or filter criteria</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    toolsGrid.innerHTML = toolsToShow.map(tool => {
        const categoryInfo = categories.find(cat => cat.key === tool.category);
        const categoryName = categoryInfo ? categoryInfo.name : tool.category;
        
        return `
            <div class="tool-card fade-in">
                <div class="tool-header">
                    <div class="tool-icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <div class="tool-info">
                        <h3 class="tool-name">${tool.name}</h3>
                        <span class="tool-category">${categoryName}</span>
                    </div>
                </div>
                <p class="tool-description">${tool.description}</p>
                <div class="tool-actions">
                    <a href="${tool.url}" target="_blank" rel="noopener" class="tool-btn primary">
                        <i class="fab fa-github"></i>
                        <span>View on GitHub</span>
                    </a>
                    <button class="tool-btn" onclick="copyToClipboard('${tool.url}')">
                        <i class="fas fa-copy"></i>
                        <span>Copy URL</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    // Show/hide load more button
    if (endIndex >= filteredTools.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
    
    // Update load more button text
    const remaining = filteredTools.length - endIndex;
    if (remaining > 0) {
        loadMoreBtn.querySelector('span').textContent = `Load ${Math.min(remaining, toolsPerPage)} More Tools`;
    }
}

// Load more tools
function loadMoreTools() {
    currentPage++;
    renderTools();
    
    // Scroll to newly loaded content
    setTimeout(() => {
        const cards = document.querySelectorAll('.tool-card');
        const newCard = cards[cards.length - toolsPerPage];
        if (newCard) {
            newCard.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, 100);
}

// Copy URL to clipboard
function copyToClipboard(url) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification('URL copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(url);
        });
    } else {
        fallbackCopyToClipboard(url);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('URL copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy URL', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-card);
        border: 2px solid var(--primary-green);
        border-radius: var(--radius-md);
        padding: 1rem 1.5rem;
        color: var(--text-primary);
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow-glow);
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        clearSearch();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.tool-card, .category-card, .section-header');
        animatedElements.forEach(el => observer.observe(el));
    }, 2000);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 4rem 2rem;
    }
`;
document.head.appendChild(style);

// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images if any
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle resize-specific logic here
            updateActiveNavLink();
        }, 250);
    });
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be registered here in a production environment
        console.log('ADCE626 Platform loaded successfully');
    });
}
