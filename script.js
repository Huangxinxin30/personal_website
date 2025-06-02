// header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('nav-show');
    }
    else{
        $('header').removeClass('nav-show');
    }
});

//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");
        
        //Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //hamburger animation
        hamburger.classList.toggle("toggle");
    };
};

// Toggle project details with animation
function toggleProjectDetails(elementId) {
    const details = document.getElementById(elementId);
    const projectCard = details.closest('.project-card');
    const button = projectCard.querySelector('.view-details-btn');
    
    if (details.classList.contains('active')) {
        // Hide details
        details.style.maxHeight = '0';
        details.classList.remove('active');
        projectCard.classList.remove('expanded');
        button.textContent = 'View Details'; // Change button text
        setTimeout(() => {
            details.style.display = 'none';
        }, 300); // Match this with CSS transition duration
    } else {
        // Show details
        details.style.display = 'block';
        details.classList.add('active');
        projectCard.classList.add('expanded');
        details.style.maxHeight = details.scrollHeight + 'px';
        button.textContent = 'Hide Details'; // Change button text
    }
}

// Handle consultation form submission
function handleFormSubmission() {
    const form = document.getElementById('consultationForm');
    const successMessage = document.getElementById('form-success');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Simulate form submission (you can replace this with actual API call)
            console.log('Consultation request submitted:', data);
            
            // Show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // In a real implementation, you would send this data to your backend
            // Example:
            // fetch('/api/consultation-request', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
        });
    }
}

window.onload = () => {
    navSlide();
    handleFormSubmission();
};