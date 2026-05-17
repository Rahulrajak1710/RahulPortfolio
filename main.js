/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})

/*SCROLL HOME*/
sr.reveal('.home__content', {})
sr.reveal('.home__projects-preview', {delay: 200})

/*SCROLL ABOUT*/
sr.reveal('.about__img-wrapper', {delay: 200})
sr.reveal('.about__text-content', {delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills__category', {distance: '30px', delay: 100, interval: 150})

/*SCROLL CERTIFICATES*/
sr.reveal('.cert-stats', {delay: 200})
sr.reveal('.certificate-card', {distance: '30px', delay: 300, interval: 100})

/*SCROLL PROJECTS*/
sr.reveal('.project-card', {distance: '30px', delay: 200, interval: 100})

/*SCROLL CONTACT*/
sr.reveal('.contact__info', {delay: 200})
sr.reveal('.contact__form', {delay: 400})

/*===== COUNTER ANIMATION FOR STATS =====*/
function animateCounters() {
    const counters = document.querySelectorAll('.counter, .stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;

        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };

        // Intersection Observer to trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

animateCounters();

/*===== SKILL PROGRESS BAR ANIMATION =====*/
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
}

animateSkillBars();

/*===== TECH BADGE HOVER EFFECT =====*/
const badges = document.querySelectorAll('.home__badge');
badges.forEach((badge, index) => {
    badge.addEventListener('mouseenter', function() {
        badges.forEach(b => b.style.opacity = '0.5');
        badges.forEach((b, i) => {
            if (Math.abs(i - index) <= 1) {
                b.style.opacity = '1';
            }
        });
    });
});

document.addEventListener('mouseleave', function() {
    badges.forEach(b => b.style.opacity = '1');
});

/*===== DEVOPS CARD INTERACTION =====*/
const devopsCards = document.querySelectorAll('.devops-project-card');
devopsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 60px rgba(0, 212, 255, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
    });
});

/*===== SMOOTH SCROLL TO PROJECTS =====*/
const ctaButton = document.querySelector('.home__cta');
if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/*===== SCROLL TO ABOUT ON SCROLL INDICATOR CLICK =====*/
const scrollIndicator = document.querySelector('.home__scroll');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/*===== CERTIFICATE CARD FLIP ANIMATION =====*/
const certificateCards = document.querySelectorAll('.certificate-card');
certificateCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('.cert-img-wrapper img');
        if (img) {
            img.style.animation = 'certImagePulse 0.6s ease-out';
        }
    });
});

/*===== PROJECT TAG HOVER EFFECT =====*/
const projectTags = document.querySelectorAll('.project__tag');
projectTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

/*===== CONTACT FORM VALIDATION & ANIMATION =====*/
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('.contact__input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const button = this.querySelector('.contact__button');
        button.textContent = 'Message Sent! ✓';
        button.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
        
        setTimeout(() => {
            button.textContent = 'Send Message';
            button.style.background = 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))';
            contactForm.reset();
        }, 3000);
    });
}

/*===== PARALLAX EFFECT ON SCROLL =====*/
window.addEventListener('scroll', () => {
    const aboutImg = document.querySelector('.about__img');
    if (aboutImg) {
        const scrollPosition = window.scrollY;
        const elePosition = aboutImg.offsetTop;
        if (scrollPosition < elePosition + 500 && scrollPosition > elePosition - 500) {
            aboutImg.style.transform = `translateY(${(scrollPosition - elePosition) * 0.3}px)`;
        }
    }
});

/*===== SKILL CATEGORY HOVER ANIMATION =====*/
const skillCategories = document.querySelectorAll('.skills__category');
skillCategories.forEach(category => {
    category.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.skills__header i');
        if (icon) {
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            icon.style.color = 'var(--accent-pink)';
        }
    });
    
    category.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.skills__header i');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.color = 'var(--accent-cyan)';
        }
    });
});

/*===== STAT CARD FLIP EFFECT =====*/
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.perspective = '1000px';
        this.style.transform = 'rotateY(5deg) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});

/*===== NAVBAR SHRINK ON SCROLL =====*/
const header = document.querySelector('.l-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 1px 4px rgba(146,161,176,.15)';
    }
});

/*===== CERTIFICATE STAT COUNTER WITH ANIMATION =====*/
function initializeCertStatCounters() {
    const statsItems = document.querySelectorAll('.cert-stat-number .counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.getAttribute('data-target'));
                const increment = Math.ceil(target / 50);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = current;
                    }
                }, 30);
            }
        });
    });

    statsItems.forEach(item => {
        observer.observe(item);
    });
}

initializeCertStatCounters();

/*===== INTERACTIVE PROJECT CARD ROTATION =====*/
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (x - rect.width / 2) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0px)';
    });
});

/*===== ADD STAGGER TO FOOTER ITEMS =====*/
document.addEventListener('DOMContentLoaded', () => {
    const footerItems = document.querySelectorAll('.footer__link');
    footerItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});