document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0; // Starting index for the slides
    let slides = document.querySelectorAll('.hero .slide'); // Select all slides
    let totalSlides = slides.length; // Get the total number of slides

    // Function to show the slides
    function showSlides() {
        // Hide all slides initially
        slides.forEach(slide => slide.style.display = 'none');
        
        // Increment slide index to move to the next slide
        slideIndex++;
        
        // If the index exceeds the number of slides, reset to 1
        if (slideIndex > totalSlides) { 
            slideIndex = 1; 
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = 'block';

        // Repeat the function every 3 seconds (3000ms)
        setTimeout(showSlides, 3000);
    }

    // Initialize the slider by calling showSlides
    showSlides();
});
