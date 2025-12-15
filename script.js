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