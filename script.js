function checkPassword() {
    // *** 🚨 CHANGE THIS TO YOUR ACTUAL PASSWORD 🚨 ***
    const correctPassword = "שירקון הקטון"; 
    // **********************************************
    
    const inputElement = document.getElementById('password-input');
    const errorMessageElement = document.getElementById('error-message');
    const enteredPassword = inputElement.value.trim();

    if (enteredPassword === correctPassword) {
        // Correct password - redirect to the main content page
        window.location.href = "songs.html";
    } else {
        // Incorrect password - show error
        errorMessageElement.textContent = "Oops! That's not quite right. Try again!";
        inputElement.value = ""; // Clear the input
    }
}
// --- Lightbox Functions for Photo Gallery ---

function openLightbox(element, captionText) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');

    modal.style.display = "block";
    modalImg.src = element.src;
    caption.innerHTML = captionText;

    // Optional: Hide the main body content a little (to enhance the fade effect)
    document.body.style.overflow = "hidden"; // Prevent scrolling while modal is open
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}