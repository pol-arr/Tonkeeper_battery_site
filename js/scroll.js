const scrollIndicator = document.getElementById('scroll-indicator');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    const equation = scrollPos >= 1000 ? 0 : Math.max(Math.exp(-scrollPos / 200), 0.006);
    scrollIndicator.style.opacity = equation;
});
