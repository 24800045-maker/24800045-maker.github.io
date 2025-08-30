// --- Hamburger Menu Logic ---
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links-menu');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// --- Back to Top Button Logic ---
const toTopButton = document.getElementById('back-to-top');
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
};
toTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// --- Hide Header on Scroll Logic ---
let lastScrollTop = 0;
const header = document.getElementById('header');
window.addEventListener("scroll", function() {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
       header.style.top = "-80px"; // Hides header
   } else {
       header.style.top = "0"; // Shows header
   }
   lastScrollTop = scrollTop;
});