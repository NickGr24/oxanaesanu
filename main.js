window.onscroll = function() {
    let navbar = document.getElementsByClassName('nav');
    
    if (window.scrollY > 0) {
        navbar.style.position = "fixed";
    } else {
        navbar.style.position = "relative";
    }
};