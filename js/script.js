const mobileNavClose = document.getElementById('nav-close');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavBtn = document.querySelector('.mobile-navBtn');

mobileNavBtn.onclick = function (){
    mobileNav.style.display="flex";
}

mobileNavClose.onclick = function (){
    mobileNav.style.display="none";
}