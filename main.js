/*===========================
    MAIN JAVASCRIPT
============================*/

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.getElementById('header');
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const backToTop = document.getElementById('backToTop');
    const themeToggle = document.getElementById('themeToggle');
    const contactForm = document.getElementById('contactForm');
    
    // Functions
    
    // Toggle Theme
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        
        // Update icon
        const themeIcon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Check for saved theme preference
    function checkTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            const themeIcon = themeToggle.querySelector('i');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    // Toggle Mobile Menu
    function toggleMenu() {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
    
    // Close Mobile Menu
    function closeMenu() {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Handle Sticky Header
    function stickyHeader() {
        if (window.scrollY > 50) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }
    
    // Handle Back to Top Button
    function scrollFunction() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // Scroll to Top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Active Menu Link
    function activeMenuLink() {
        let sections = document.querySelectorAll('section');
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    /*Submit Form
    function handleSubmit(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Submit form using formspree
        const formData = new FormData(contactForm);
        
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert('Thank you for your message. I will get back to you soon!');
            contactForm.reset();
        })
        .catch(error => {
            alert('There was a problem submitting your form. Please try again later.');
            console.error('Error:', error);
        });
    }
    */
    // Event Listeners
    
    // Mobile Menu Toggle
    menuBtn.addEventListener('click', toggleMenu);
    
    // Close Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Sticky Header on Scroll
    window.addEventListener('scroll', stickyHeader);
    
    // Back to Top Button
    window.addEventListener('scroll', scrollFunction);
    backToTop.addEventListener('click', scrollToTop);
    
    // Active Menu Link on Scroll
    window.addEventListener('scroll', activeMenuLink);
    
    // Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
    
    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Initialize
    checkTheme();
    stickyHeader();
    scrollFunction();
    activeMenuLink();
    
    // Add animation classes after page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Fixes for missing Font Awesome icons
// Using JavaScript to replace the cricket icon with a suitable alternative
document.addEventListener('DOMContentLoaded', function() {
    const cricketIcons = document.querySelectorAll('.fa-cricket-bat-ball');
    cricketIcons.forEach(icon => {
        icon.classList.remove('fa-cricket-bat-ball');
        icon.classList.add('fa-baseball-ball'); // Using baseball as fallback
    });
});

//EmailJS
function sendMail(event) {
  event.preventDefault(); // stop form from submitting and refreshing the page

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_7tyjlqf", "template_4lucuzo", parms)
    .then(function (response) {
      window.location.href = "thankyou.html";
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("feedback-form").reset(); // clear the form after sending
    });
}
