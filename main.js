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
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__content', {})
sr.reveal('.home__projects-preview', {delay: 200})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*===== TECH BADGE HOVER EFFECT =====*/
const badges = document.querySelectorAll('.home__badge');
badges.forEach((badge, index) => {
    badge.addEventListener('mouseenter', function() {
        // Reset all badges opacity
        badges.forEach(b => b.style.opacity = '0.5');
        // Highlight hovered and adjacent badges
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
        // Add a subtle glow effect
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
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
}

/*===== SCROLL TO HOME ON SCROLL INDICATOR CLICK =====*/
const scrollIndicator = document.querySelector('.home__scroll');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}