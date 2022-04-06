const navBtn = document.querySelector('.btn-menu');
const navMobile = document.querySelector('.nav-mobile');
const navAllLink = document.querySelectorAll('.menu-link');
const footerYear = document.querySelector('.footer-year');
const allSections = document.querySelectorAll('.scrollspy');


const handleNav = () => {
    document.body.classList.toggle('sticky-body')
    navMobile.classList.toggle('nav-mobile-active')
}

navAllLink.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('sticky-body')
        navMobile.classList.remove('nav-mobile-active')
    })
})

const handleObserver = () => {

    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if (section.classList.contains('section-dark') && section.offsetTop <= currentSection) {
            navBtn.classList.add('white-color')
        } else if (currentSection > 400) {
            navBtn.classList.remove('white-color')
        } else if (!section.classList.contains('section-dark') && section.offsetTop <= currentSection) {
            navBtn.classList.remove('white-color')
        }
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();


navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);