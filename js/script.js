// ===================================
// Project Data
// ===================================
const projects = [
    {
        id: 'ai-shorts-editor',
        title: '생성형AI프로젝트(웹용 숏츠편집기)',
        folder: '생성형AI프로젝트(웹용 숏츠편집기)',
        thumbnail: '1.png',
        imageCount: 4,
        tags: ['React', 'Vite', 'Spring Boot', 'FastAPI', 'Kafka', 'Stable Diffusion', 'FFmpeg']
    },
    {
        id: 'mmorpg',
        title: 'MMORPG(협객 온라인)',
        folder: 'MMORPG(협객 온라인)',
        thumbnail: '1.png',
        imageCount: 4,
        tags: ['Custom Engine', 'C++', 'RakNet', 'MMORPG', 'Game Server']
    },
    {
        id: 'ncsoft-government',
        title: 'NCSoft 정부 과업(웹튠생성및배포시스템)',
        folder: 'NCSoft 정부 과업(웹튠생성및배포시스템)',
        thumbnail: '1.png',
        imageCount: 4,
        tags: ['Unity VR', 'Generative AI', 'AWS', 'R&D', 'Admin']
    },
    {
        id: 'digital-twin',
        title: '디지털트윈 배터리공장 시물레이터',
        folder: '디지털트윈 배터리공장 시물레이터',
        thumbnail: '1.png',
        imageCount: 0,
        tags: ['Unity', 'Digital Twin', 'Java Spring', 'MSSQL', 'Kubernetes', 'WPF']
    },
    {
        id: 'enford-hotel',
        title: '엔포드호텔21층라운지시스템',
        folder: '엔포드호텔21층라운지시스템',
        thumbnail: '21층프런트.png',
        imageCount: 4,
        tags: ['Unity', 'IoT', 'Hotel System', 'Real-time Control']
    },
    {
        id: 'idol-fan-meeting',
        title: '아이돌팬미팅 굿즈 모바일',
        folder: '아이돌팬미팅 굿즈 모바일(유명가수팬덤)',
        thumbnail: '1.png',
        imageCount: 5,
        tags: ['React Native', 'NestJS', 'AWS', 'Mobile']
    },
    {
        id: 'silla-hotel',
        title: '신라 호텔 홈페이지',
        folder: '신라 호텔 홈페이지(Silla Hotel)',
        thumbnail: '1.png',
        imageCount: 4,
        tags: ['Web', 'HTML/CSS', 'JavaScript']
    },
    {
        id: 'korean-food-box',
        title: '한식문화상자',
        folder: '한식문화상자(공진원(공공))',
        thumbnail: '1.png',
        imageCount: 4,
        tags: ['Spring', 'Public', 'Web']
    },
    {
        id: 'naver-junior-school',
        title: '교육용강의 모바일',
        folder: '교육용강의 모바일(네이버 쥬니버스쿨)',
        thumbnail: '0.png',
        imageCount: 5,
        tags: ['Unity', 'Mobile', 'Education', 'Naver']
    },
    {
        id: 'portal-casino',
        title: '포털카지노',
        folder: '포털카지노(모바일)',
        thumbnail: '1.png',
        imageCount: 3,
        tags: ['Unity', 'Mobile', 'Casino']
    },
    {
        id: 'document-solution',
        title: '문서변환 및 에디팅 솔루션',
        folder: '문서변환 및 에디팅 솔루션(AlioSoft)',
        thumbnail: '1.png',
        imageCount: 4,
        tags: ['ASP.NET', 'C#', 'Document', 'Solution']
    }
];

// ===================================
// DOM Elements
// ===================================
const projectsGrid = document.getElementById('projectsGrid');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initializeNavigation();
    initializeScrollAnimations();
});

// ===================================
// Render Projects
// ===================================
function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <a href="projects/${project.folder}/index.html" 
           class="project-card" 
           data-project-id="${project.id}"
           target="_blank">
            <img 
                src="projects/${project.folder}/${project.thumbnail}" 
                alt="${project.title}"
                class="project-image"
                loading="lazy"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%231e293b%22 width=%22400%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2220%22 fill=%22%2394a3b8%22%3E${project.title}%3C/text%3E%3C/svg%3E'"
            />
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');

    // Add click event for modal (optional - currently links directly to project page)
    // Uncomment below if you want modal preview instead of direct navigation
    /*
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = card.dataset.projectId;
            const project = projects.find(p => p.id === projectId);
            if (project) {
                openProjectModal(project);
            }
        });
    });
    */
}

// ===================================
// Project Modal (Optional)
// ===================================
function openProjectModal(project) {
    const images = Array.from({ length: project.imageCount }, (_, i) => {
        const imageNum = project.thumbnail === '0.png' ? i : i + 1;
        return `projects/${project.folder}/${imageNum}.png`;
    });

    modalBody.innerHTML = `
        <div class="modal-project">
            <h2 class="modal-project-title">${project.title}</h2>
            <div class="modal-project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="modal-project-images">
                ${images.map(img => `
                    <img 
                        src="${img}" 
                        alt="${project.title}" 
                        class="modal-project-image"
                        loading="lazy"
                    />
                `).join('')}
            </div>
            <a href="projects/${project.folder}/index.html" 
               target="_blank" 
               class="btn btn-primary"
               style="margin-top: 2rem;">
                <span>프로젝트 상세 보기</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Modal event listeners
if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeProjectModal);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===================================
// Navigation
// ===================================
function initializeNavigation() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// Scroll Animations
// ===================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });

    // Observe contact methods
    document.querySelectorAll('.contact-method').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        observer.observe(el);
    });
}

// ===================================
// Utility Functions
// ===================================

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
lazyLoadImages();

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add active class to current nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavOnScroll = debounce(() => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, 100);

window.addEventListener('scroll', highlightNavOnScroll);

// ===================================
// Export for potential future use
// ===================================
window.portfolioApp = {
    projects,
    openProjectModal,
    closeProjectModal
};
