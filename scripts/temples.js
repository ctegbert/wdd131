// Function to update the copyright year dynamically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to update the last modified date dynamically
function updateLastModified() {
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;
}

// Call functions to update copyright year and last modified date
updateCopyrightYear();
updateLastModified();
