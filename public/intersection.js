const portfolioItems = document.querySelector('.portfolioViewer');
const navi = document.querySelector('.navi');
const topHeader = document.querySelector('.about');
const theBigThree = document.querySelectorAll('.big3');
const navButtons = document.querySelectorAll('.navButton');
const smNavLogo = document.querySelector('.smNavLogo');
const topButton = document.querySelector('.topButton');
const contactSection = document.querySelector('#contact');
const portfolioSection = document.querySelector('#portfolio');

const portfolioptions =  {
    root: null,
    threshold: 0.3,
    rootMargin: '0px 0px 0px 0px'
 };

const portfolioObserver = new IntersectionObserver(function(entries, portfolioObserver) 
    {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            portfolioObserver.unobserve(entry.target);
        }
    });
}, portfolioptions);

// const topHeadOptions = {
// };

// const topHeadObserver = new IntersectionObserver(function(entries, topHeadObserver) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             navi.classList.add('nav-scrolled');
//         } else {
//             navi.classList.remove('nav-scrolled');
//         }
//     }, topHeadOptions);
// });

const pFixOptions = {
    rootMargin: '0px 0px -675px 0px'
}

const portfolioFix = new IntersectionObserver((entries, portfolioFix) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navi.classList.remove('nav-scrolled');
        } else {
            navi.classList.add('nav-scrolled');
        }
    });
}, pFixOptions);

const contactOptions = {
    threshold: 0.95
};

const contactObserver = new IntersectionObserver((entries, contactObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            navi.classList.remove('hidenav');
            topButton.classList.remove('displayTopBtn');
        } else {
            navi.classList.add('hidenav');
            topButton.classList.add('displayTopBtn');
        }
    });
}, contactOptions);


portfolioObserver.observe(portfolioItems);

// topHeadObserver.observe(topHeader);

contactObserver.observe(contactSection);

portfolioFix.observe(portfolioSection);
