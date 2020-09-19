const portfolioItems = document.querySelectorAll('div.projSpotlite');
const navi = document.querySelector('.navi');
const topHeader = document.querySelector('.head');
const contactLinks = document.querySelectorAll('.faObs');
const theBigThree = document.querySelectorAll('.big3');
const navButtons = document.querySelectorAll('.navButton');
const smNavLogo = document.querySelector('.smNavLogo');
const topButton = document.querySelector('.topButton');

const portfolioptions =  {
    root: null,
    threshold: 0.7,
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

const topHeadOptions = {
    // rootMargin: '200px'
};

const topHeadObserver = new IntersectionObserver(function(entries, topHeadObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navi.classList.add('nav-scrolled');
            smNavLogo.classList.add('shoLogo');
        } else {
            navi.classList.remove('nav-scrolled');
            smNavLogo.classList.remove('shoLogo');
        }
    }, topHeadOptions);
});

const conOptions = {
    rootMargin: '-125px'
};

const contactObserver = new IntersectionObserver(function(entries, contactObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('iconVisible');
            contactObserver.unobserve(entry.target);
        }
    });
}, conOptions);

const big3Options = {
    threshold: 0.6
};

const big3Observer = new IntersectionObserver(function(entries, big3Observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            navButtons.forEach(button => {
                if(button.innerHTML === entry.target.getAttribute('data')) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
        if(entry.target.getAttribute('data') === 'About' ||
           entry.target.getAttribute('data') === 'Portfolio' ) {
            topButton.classList.remove('displayTopBtn');
        } else {
            topButton.classList.add('displayTopBtn');
        }
    });
}, big3Options);

portfolioItems.forEach(item => {
    portfolioObserver.observe(item);
});

contactLinks.forEach(link => {
    contactObserver.observe(link);
});

topHeadObserver.observe(topHeader);

theBigThree.forEach(link => {
    big3Observer.observe(link)
});