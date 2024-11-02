const hamberger = document.getElementById("hamberger");
const navbar = document.querySelector('.navbar');

hamberger.addEventListener('click', ()=> {
    navbar.classList.toggle("fade-out");
})