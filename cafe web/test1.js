function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

images_list = [
    "images/coffee-ani",
    "images/coffee-ani2",
    "images/coffee-ani3",
    "images/coffee-ani4"
]
let count = 0

function backgroundImg(){
let member = document.querySelector(".Membership")  
member.style.backgroundImage = `url(${images_list[count]}.jpg`
count = (count + 1) % images_list.length
}
setInterval(backgroundImg, 4000);

  
  // Scroll effect for web solutions section
  ScrollReveal().reveal('.web_solutions_section', {
    origin: 'right',
    distance: '200px',
    duration: 1200,
  });
  
  // Scroll effect for logo design section
  ScrollReveal().reveal('.logo_design_section', {
    origin: 'left',
    distance: '200px',
    duration: 1200,
  });

  ScrollReveal().reveal('.testimonials', {
    duration: 1200,      // Animation duration in milliseconds
    origin: 'bottom',    // Start animation from bottom
    distance: '50px',    // Distance to move before revealing
    opacity: 0,          // Start with opacity 0 (fade effect)
    easing: 'ease-in-out', // Easing effect
    interval: 200  
  });
  

