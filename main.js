/**
 * Anjou Media - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    initDemoForm();
    initFAQ();
    initCounterAnimation();
    initSourcesCarousel();
    initGanttHover();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    if (!mobileMenuBtn) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // Create mobile menu if it doesn't exist
        let mobileMenu = document.querySelector('.mobile-menu');
        
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = `
                <div class="mobile-menu-content">
                    ${navLinks.innerHTML}
                    <div class="mobile-menu-actions">
                        ${navActions.innerHTML}
                    </div>
                </div>
            `;
            
            // Add mobile menu styles
            const style = document.createElement('style');
            style.textContent = `
                .mobile-menu {
                    position: fixed;
                    top: 72px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    z-index: 999;
                    padding: 2rem;
                    display: none;
                    flex-direction: column;
                }
                .mobile-menu.active {
                    display: flex;
                }
                .mobile-menu-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .mobile-menu-content a {
                    font-size: 1.125rem;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid var(--color-gray-100);
                }
                .mobile-menu-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .mobile-menu-actions .btn {
                    width: 100%;
                    justify-content: center;
                }
                .mobile-menu-btn.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                .mobile-menu-btn.active span:nth-child(2) {
                    opacity: 0;
                }
                .mobile-menu-btn.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -5px);
                }
            `;
            document.head.appendChild(style);
            document.body.appendChild(mobileMenu);
            
            // Close menu when clicking a link
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                });
            });
        }
        
        mobileMenu.classList.toggle('active');
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Navbar Background on Scroll
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .product-card, .step');
    
    if (!animatedElements.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Demo Form Handling
 */
function initDemoForm() {
    const form = document.getElementById('demoForm');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = `
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                </path>
            </svg>
            Wird gesendet...
        `;
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate API call (replace with actual endpoint)
        try {
            // For now, we'll simulate a successful submission
            // In production, replace with actual API call:
            // const response = await fetch('/api/demo-request', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
            
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            form.innerHTML = `
                <div class="form-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="9 12 12 15 16 10"/>
                    </svg>
                    <h3>Vielen Dank für Ihre Anfrage!</h3>
                    <p>Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
                </div>
            `;
            
            // Add success styles
            const style = document.createElement('style');
            style.textContent = `
                .form-success {
                    text-align: center;
                    padding: 2rem;
                }
                .form-success svg {
                    margin-bottom: 1.5rem;
                }
                .form-success h3 {
                    margin-bottom: 0.5rem;
                    color: var(--color-gray-900);
                }
                .form-success p {
                    color: var(--color-gray-600);
                }
            `;
            document.head.appendChild(style);
            
        } catch (error) {
            // Show error message
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // You could add an error message display here
            alert('Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.');
        }
    });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('[data-faq]');

    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);
        });
    });
}

/**
 * Animated Counter for Stats
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');

    if (!counters.length) return;

    const animateCounter = (counter) => {
        const target = parseFloat(counter.dataset.count);
        const suffix = counter.dataset.suffix || '';
        const isDecimal = counter.dataset.decimal === 'true';
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = target * easeOutQuart;

            if (isDecimal) {
                counter.textContent = current.toFixed(1) + suffix;
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Use Intersection Observer to trigger animation when visible
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

/**
 * Sources Carousel
 */
function initSourcesCarousel() {
    const carousel = document.querySelector('.sources-carousel');
    const track = document.querySelector('.sources-track');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (!carousel || !track) return;

    const items = track.querySelectorAll('.source-item');
    const itemWidth = 110 + 12; // min-width + gap
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    const totalPages = Math.ceil(items.length / visibleItems);
    let currentPage = 0;

    // Create dots
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
    }

    function goToPage(page) {
        currentPage = Math.max(0, Math.min(page, totalPages - 1));
        const offset = currentPage * visibleItems * itemWidth;
        track.style.transform = `translateX(-${offset}px)`;
        updateDots();
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
    }

    // Auto-scroll every 4 seconds
    let autoScroll = setInterval(() => {
        if (currentPage < totalPages - 1) {
            goToPage(currentPage + 1);
        } else {
            goToPage(0);
        }
    }, 4000);

    // Pause auto-scroll on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
    carousel.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            if (currentPage < totalPages - 1) {
                goToPage(currentPage + 1);
            } else {
                goToPage(0);
            }
        }, 4000);
    });

    // Handle resize
    window.addEventListener('resize', debounce(() => {
        const newVisibleItems = Math.floor(carousel.offsetWidth / itemWidth);
        if (newVisibleItems !== visibleItems) {
            location.reload(); // Simple solution - reinitialize on resize
        }
    }, 250));
}

/**
 * Gantt Chart Hover - Highlight corresponding legend item
 */
function initGanttHover() {
    const ganttBars = document.querySelectorAll('.gantt-bar[data-phase]');
    const legendItems = document.querySelectorAll('.legend-item[data-phase]');

    if (!ganttBars.length || !legendItems.length) return;

    ganttBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            const phase = bar.dataset.phase;
            legendItems.forEach(item => {
                if (item.dataset.phase === phase) {
                    item.classList.add('highlighted');
                }
            });
        });

        bar.addEventListener('mouseleave', () => {
            legendItems.forEach(item => {
                item.classList.remove('highlighted');
            });
        });
    });

    // Also highlight bar when hovering legend item
    legendItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const phase = item.dataset.phase;
            ganttBars.forEach(bar => {
                if (bar.dataset.phase === phase) {
                    bar.style.transform = 'scale(1.02)';
                    bar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                    bar.style.zIndex = '10';
                }
            });
            item.classList.add('highlighted');
        });

        item.addEventListener('mouseleave', () => {
            ganttBars.forEach(bar => {
                bar.style.transform = '';
                bar.style.boxShadow = '';
                bar.style.zIndex = '';
            });
            item.classList.remove('highlighted');
        });
    });
}

/**
 * Utility: Debounce Function
 */
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

/**
 * Analytics Tracking (placeholder)
 * Replace with actual analytics implementation
 */
function trackEvent(category, action, label) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    // Console log for development
    console.log('Event tracked:', { category, action, label });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        const label = this.textContent.trim();
        trackEvent('CTA', 'click', label);
    });
});
