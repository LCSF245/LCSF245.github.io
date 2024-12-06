// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Welcome message hover effect
    const welcomeMessage = document.getElementById('welcome-message');
    
    welcomeMessage.addEventListener('mouseover', function() {
        this.textContent = "We're glad you're here!";
    });

    welcomeMessage.addEventListener('mouseout', function() {
        this.textContent = "Welcome to SmoothBlend!";
    });

    // Navigation link click handler
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         // Only show alert for external pages
    //         if (!this.href.includes('index.html')) {
    //             alert('Navigating to: ' + this.textContent);
    //         }
    //     });
    // });
}); 